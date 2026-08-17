/* =========================
   OPEN INVITATION
========================= */

function openInvitation() {
  document.getElementById("opening").classList.add("hide");
  document.body.classList.remove("locked");

  const music = document.getElementById("weddingMusic");
  music.play().catch(() => {});
}

/* =========================
   PERSONAL GUEST
========================= */

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
  document.getElementById("guestName").textContent = guest;
}

/* =========================
   LANGUAGE - 3 BAHASA (ID, EN, ES)
========================= */

function changeLanguage(language) {
  // 1. Ubah semua elemen dengan data-id, data-en, data-es
  document.querySelectorAll("[data-id][data-en][data-es]").forEach(element => {
    if (!element.hasAttribute("data-id-placeholder") && 
        !element.hasAttribute("data-en-placeholder") &&
        !element.hasAttribute("data-es-placeholder") &&
        element.tagName !== "OPTION") {
      element.textContent = element.dataset[language];
    }
  });

  // 2. Ubah placeholder untuk input dan textarea
  document.querySelectorAll("[data-id-placeholder][data-en-placeholder][data-es-placeholder]").forEach(element => {
    const placeholderKey = language === "id" ? "id-placeholder" : 
                           language === "en" ? "en-placeholder" : "es-placeholder";
    element.placeholder = element.dataset[placeholderKey];
  });

  // 3. Ubah teks option select
  document.querySelectorAll("option[data-id][data-en][data-es]").forEach(option => {
    option.textContent = option.dataset[language];
  });

  // 4. Update tombol bahasa
  document.querySelectorAll(".language button").forEach(button => {
    button.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".language button");
  if (language === "id") buttons[0].classList.add("active");
  else if (language === "en") buttons[1].classList.add("active");
  else if (language === "es") buttons[2].classList.add("active");

  // Simpan preferensi bahasa ke localStorage
  localStorage.setItem("preferredLanguage", language);
}

/* =========================
   LOAD SAVED LANGUAGE PREFERENCE
========================= */

document.addEventListener("DOMContentLoaded", function() {
  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang && savedLang !== "id") {
    changeLanguage(savedLang);
  }
});

/* =========================
   COUNTDOWN
========================= */

const weddingDate = new Date("2026-10-17T10:30:00+07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================
   FIREBASE CONFIG
========================= */

// 🔥 GANTI DENGAN CONFIG DARI FIREBASE ANDA
const firebaseConfig = {
  apiKey: "AIzaSyBcRT2YJjRbDI1HY2Y_JRSl5emrXrNQIHU",
  authDomain: "wedding-invitation-a306e.firebaseapp.com",
  projectId: "wedding-invitation-a306e",
  storageBucket: "wedding-invitation-a306e.firebasestorage.app",
  messagingSenderId: "613861194051",
  appId: "1:613861194051:web:779cd56d36e0944abcd7f6",
  measurementId: "G-FXRF89588L"
};

// 🔥 Inisialisasi Firebase
let db;

try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  console.log("✅ Firebase berhasil diinisialisasi");
} catch (error) {
  console.error("❌ Firebase gagal diinisialisasi:", error);
}

/* =========================
   RSVP - DENGAN FIREBASE (REAL-TIME SYNC) + DELETE
========================= */

// Subscribe ke perubahan data real-time
function subscribeRsvp() {
  if (!db) {
    console.warn("⚠️ Firebase belum siap, coba lagi nanti");
    setTimeout(subscribeRsvp, 2000);
    return;
  }

  try {
    db.collection("rsvp").orderBy("time", "desc").onSnapshot((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      
      // Simpan ke localStorage sebagai cache
      localStorage.setItem("frankieSeciliaRSVP", JSON.stringify(data));
      renderRsvp();
      renderRsvpList(data);
    }, (error) => {
      console.error("❌ Error subscribe RSVP:", error);
    });
  } catch (error) {
    console.error("❌ Error subscribe RSVP:", error);
  }
}

function getRsvpData() {
  return JSON.parse(localStorage.getItem("frankieSeciliaRSVP") || "[]");
}

function renderRsvp() {
  const data = getRsvpData();
  let attending = 0;
  let guests = 0;

  data.forEach(item => {
    if (item.attendance === "Hadir") {
      attending++;
      guests += Number(item.guests) || 0;
    }
  });

  const totalRsvp = document.getElementById("totalRsvp");
  const totalAttend = document.getElementById("totalAttend");
  const totalGuests = document.getElementById("totalGuests");

  if (totalRsvp) totalRsvp.textContent = data.length;
  if (totalAttend) totalAttend.textContent = attending;
  if (totalGuests) totalGuests.textContent = guests;
}

/* =========================
   RENDER RSVP LIST (DENGAN TOMBOL DELETE)
========================= */

function renderRsvpList(data) {
  const container = document.getElementById("rsvpList");
  if (!container) return;

  if (!data || data.length === 0) {
    container.innerHTML = `
      <div class="rsvp-empty" data-id="Belum ada konfirmasi" data-en="No confirmations yet" data-es="Aún no hay confirmaciones">
        Belum ada konfirmasi
      </div>
    `;
    // Update bahasa untuk empty state
    const currentLang = localStorage.getItem("preferredLanguage") || "id";
    if (currentLang !== "id") {
      const emptyEl = container.querySelector(".rsvp-empty");
      if (emptyEl) {
        emptyEl.textContent = emptyEl.dataset[currentLang] || emptyEl.textContent;
      }
    }
    return;
  }

  let html = '';
  data.forEach((item) => {
    const attendanceClass = item.attendance === "Hadir" ? "attending" : "not-attending";
    const attendanceText = item.attendance === "Hadir" ? "✅ Hadir" : "❌ Tidak hadir";
    const guestsText = item.guests > 0 ? `• ${item.guests} tamu` : '';
    const messageText = item.message ? `<div class="rsvp-item-message">"${escapeHtml(item.message)}"</div>` : '';
    const timeText = item.time ? new Date(item.time).toLocaleDateString('id-ID') : '';

    html += `
      <div class="rsvp-item" data-id="${item.id}">
        <div class="rsvp-item-info">
          <div class="rsvp-item-name">${escapeHtml(item.name)}</div>
          <div class="rsvp-item-detail">
            <span class="${attendanceClass}">${attendanceText}</span>
            ${guestsText ? ` ${guestsText}` : ''}
            ${timeText ? ` • ${timeText}` : ''}
          </div>
          ${messageText}
        </div>
        <div class="rsvp-item-actions">
          <button class="rsvp-delete-btn" onclick="deleteRsvp('${item.id}')" title="Hapus RSVP">
            ✕
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Fungsi untuk menghindari XSS
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* =========================
   DELETE RSVP
========================= */

async function deleteRsvp(docId) {
  if (!docId) {
    alert("❌ ID tidak valid!");
    return;
  }

  // Konfirmasi sebelum hapus
  const confirmDelete = confirm("⚠️ Apakah Anda yakin ingin menghapus RSVP ini?");
  if (!confirmDelete) return;

  if (!db) {
    alert("❌ Firebase belum siap. Coba refresh halaman.");
    return;
  }

  try {
    await db.collection("rsvp").doc(docId).delete();
    alert("✅ RSVP berhasil dihapus!");
  } catch(error) {
    console.error("❌ Error deleting RSVP:", error);
    alert("❌ Gagal menghapus RSVP. Periksa koneksi internet Anda.");
  }
}

// Ekspos fungsi ke global scope
window.deleteRsvp = deleteRsvp;

/* =========================
   RSVP FORM SUBMIT
========================= */

const rsvpForm = document.getElementById("rsvpForm");
if (rsvpForm) {
  rsvpForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("rsvpName").value.trim();
    const attendance = document.getElementById("rsvpAttendance").value;
    const guests = document.getElementById("rsvpGuests").value;
    const message = document.getElementById("rsvpMessage").value.trim();

    if (!name) {
      alert("⚠️ Nama harus diisi!");
      return;
    }

    if (!attendance) {
      alert("⚠️ Kehadiran harus dipilih!");
      return;
    }

    const rsvpData = {
      name: name,
      attendance: attendance,
      guests: parseInt(guests) || 0,
      message: message,
      time: new Date().toISOString(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (!db) {
      alert("❌ Firebase belum siap. Coba refresh halaman.");
      return;
    }

    try {
      await db.collection("rsvp").add(rsvpData);
      
      rsvpForm.reset();
      document.getElementById("rsvpGuests").value = 1;
      
      alert("✅ RSVP berhasil disimpan! (Sinkron real-time)");
    } catch(error) {
      console.error("❌ Error:", error);
      alert("❌ Gagal menyimpan RSVP. Periksa koneksi internet Anda.");
    }
  });
}

/* =========================
   GIFT BOX - BUKA KADO
========================= */

let giftOpened = false;

function openGift() {
  if (giftOpened) return;
  giftOpened = true;

  const giftBox = document.getElementById("giftBox");
  if (giftBox) {
    giftBox.classList.add("opened");
  }

  setTimeout(() => {
    const content = document.getElementById("giftContent");
    if (content) {
      content.classList.add("show");
    }
    createConfetti();
  }, 600);
}

// Ekspos fungsi ke global scope
window.openGift = openGift;

/* =========================
   CONFETTI
========================= */

function createConfetti() {
  const container = document.getElementById("confettiContainer");
  if (!container) return;
  
  const colors = ["#e74c3c", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#1abc9c"];
  
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 2;
    const size = 6 + Math.random() * 8;
    const rotation = Math.random() * 360;
    const shape = Math.random() > 0.5 ? "50%" : "2px";
    
    piece.style.cssText = `
      left: ${left}%;
      background: ${color};
      width: ${size}px;
      height: ${size * (0.5 + Math.random())}px;
      border-radius: ${shape};
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      transform: rotate(${rotation}deg);
    `;
    
    container.appendChild(piece);
  }
  
  setTimeout(() => {
    container.innerHTML = "";
  }, 5000);
}

/* =========================
   COPY BANK - DENGAN NOTIFIKASI
========================= */

function copyAccount() {
  const numberElement = document.getElementById("accountNumber");
  if (!numberElement) return;
  
  const accountNumber = numberElement.textContent.trim();

  // Coba dengan Clipboard API modern
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(accountNumber).then(() => {
      showCopyNotification();
    }).catch(() => {
      // Fallback
      fallbackCopy(accountNumber);
    });
  } else {
    // Fallback untuk browser lama
    fallbackCopy(accountNumber);
  }
}

function fallbackCopy(text) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  showCopyNotification();
}

function showCopyNotification() {
  const notification = document.getElementById("copyNotification");
  if (!notification) return;
  
  // Ambil bahasa yang sedang aktif
  const currentLang = localStorage.getItem("preferredLanguage") || "id";
  
  // Gunakan data attribute sesuai bahasa
  if (currentLang === "id") {
    notification.textContent = notification.dataset.id || "✓ Tersalin!";
  } else if (currentLang === "en") {
    notification.textContent = notification.dataset.en || "✓ Copied!";
  } else if (currentLang === "es") {
    notification.textContent = notification.dataset.es || "✓ ¡Copiado!";
  }
  
  notification.classList.add("show");
  
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2500);
}

// Ekspos fungsi ke global scope
window.copyAccount = copyAccount;

/* =========================
   MUSIC
========================= */

let musicPlaying = false;

function toggleMusic() {
  const music = document.getElementById("weddingMusic");
  if (!music) return;

  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
  } else {
    music.play().catch(() => {
      console.warn("⚠️ File music.mp3 tidak ditemukan");
    });
    musicPlaying = true;
  }
}

// Ekspos fungsi ke global scope
window.toggleMusic = toggleMusic;

/* =========================
   INISIALISASI
========================= */

// Jalankan ketika DOM sudah siap
document.addEventListener("DOMContentLoaded", function() {
  console.log("✅ Website siap!");
  
  // Render RSVP dari cache dulu
  renderRsvp();
  
  // Load data dari localStorage
  const cachedData = getRsvpData();
  if (cachedData.length > 0) {
    renderRsvpList(cachedData);
  }
  
  // Mulai subscribe ke Firebase setelah 1 detik
  setTimeout(subscribeRsvp, 1000);
});