(function() {
  // ===================== DATA BAHASA UNDANGAN =====================
  const langData = {
    id: {
      heroTitle: "Pernikahan Kudus",
      heroSub: "Dalam Kasih Kristus",
      quoteText: "Apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.",
      locLabel: "Lokasi Misa Pernikahan",
      locValue: "Gereja St. Yohanes Rasul Delanggu",
      locSub: "Delanggu, Klaten",
      dateLabel: "Hari & Waktu",
      dateValue: "Sabtu, 17 Oktober 2026",
      timeText: "10.30 WIB",
      mapLabel: "Gereja St. Yohanes Rasul",
      rsvpText1: "Kirim ke Frankie",
      rsvpText2: "Kirim ke Secil",
      footerText: "Dipersembahkan dalam cinta kasih Kristus",
      footerChurch: "Gereja St. Yohanes Rasul · Delanggu",
      paduanBtnLabel: "📖 Buka Paduan Misa",
      waMessage: "Halo, saya ingin mengucapkan selamat atas pernikahan kalian! Kiranya Tuhan memberkati keluarga baru ini. 🙏"
    },
    en: {
      heroTitle: "Holy Matrimony",
      heroSub: "In Christ's Love",
      quoteText: "What God has joined together, let no man put asunder.",
      locLabel: "Wedding Mass Location",
      locValue: "St. Yohanes Rasul Church Delanggu",
      locSub: "Delanggu, Klaten",
      dateLabel: "Day & Time",
      dateValue: "Saturday, 17 October 2026",
      timeText: "10.30 AM (WIB)",
      mapLabel: "St. Yohanes Rasul Church",
      rsvpText1: "Send to Frankie",
      rsvpText2: "Send to Secil",
      footerText: "Offered in the love of Christ",
      footerChurch: "St. Yohanes Rasul Church · Delanggu",
      paduanBtnLabel: "📖 Open Mass Guide",
      waMessage: "Hello, congratulations on your wedding! May God bless your new family. 🙏"
    }
  };

  // ===================== DATA PADUAN MISA (LENGKAP) =====================
  const paduanData = {
    id: `
      <!-- ============================================================ -->
      <!-- TATA PERAYAAN PERKAWINAN DALAM MISA                           -->
      <!-- Sumber: Buku Tata Perayaan Perkawinan (dari file dokumen)     -->
      <!-- ============================================================ -->

      <h3>RITUS PEMBUKA</h3>

      <h4>Cara Meriah: Di Depan Gereja</h4>

      <p><strong>PENYAMBUTAN MEMPELAI</strong></p>
      <p>Mempelai beserta rombongan berhimpun di depan pintu gereja atau tempat perayaan. Imam menyambut kedua mempelai di pintu itu dengan mengenakan busana liturgi berwarna putih atau warna pesta, dan didampingi putra-putri altar. Imam dapat memercikkan air suci kepada mereka dan kerabatnya. Namun, bila Percikan tidak dilakukan pada saat ini, dapat dilakukan setelah Kata Pembuka untuk mengganti Ritus Tobat.</p>
      <p>Ketika memerciki mereka, Imam dapat mengucapkan kata-kata berikut ini:</p>
      <p><strong>I:</strong> Semoga Allah memberi rahmat dan berkat, agar Saudara-saudari menghadap kepada-Nya dengan hati yang suci.</p>
      <p>Kemudian Imam menyampaikan salam dengan ramah, dan menyatakan bahwa Gereja ikut berbahagia bersama mereka. Salah satu cara berikut ini dapat dipilih:</p>

      <p><strong>Cara A — Tanpa permohonan keluarga:</strong></p>
      <p><strong>I:</strong> Selamat datang, N... dan N.... Selamat datang juga bagi para orang tua dan kerabat. Mempelai yang berbahagia, kami menyambut kalian di sini, hendak ikut bersyukur dan menyaksikan peneguhan cinta kalian di hadapan Allah. Semoga peristiwa indah ini akan menjadi kenangan penuh rahmat dalam hidup kalian. Marilah kita bersama-sama menuju ke depan altar Tuhan.</p>
      <p><em>→ PERARAKAN</em></p>

      <p><strong>Cara B — Dengan permohonan keluarga:</strong></p>
      <p><strong>I:</strong> Selamat datang, Saudara-saudari yang dikasihi Tuhan. Kita berhimpun di sini untuk mengawali perayaan perkawinan N... dan N.... Gereja menyambut Saudara-saudari dan ikut bergembira dalam perayaan kasih ini.</p>
      <p><strong>Wakil Keluarga:</strong> Rama N... yang terhormat, seluruh keluarga N... dan N... hendak mengantar N... dan N... memasuki hidup perkawinan. Kami mohon agar perkawinan mereka dikukuhkan dan diberkati sesuai dengan ajaran dan tata perayaan Gereja Katolik.</p>
      <p><strong>I:</strong> Semoga Tuhan berkenan akan kehendak dan harapan kita semua. Marilah kita bersama-sama menuju ke depan altar Tuhan.</p>
      <p>Atau:</p>
      <p><strong>I:</strong> Sekarang, marilah kita masuk ke rumah Tuhan dan menyerahkan seluruh harapan serta doa-doa kita kepada-Nya. Semoga kita boleh mengalami kasih setia Tuhan yang menghidupkan dan menguduskan kita, umat-Nya.</p>

      <h4>PERARAKAN</h4>
      <p><em>Umat berdiri</em></p>
      <p>Secara berurutan putra-putri altar, Imam, kedua mempelai, orang tua, saksi, dan kerabat berarak menuju depan altar dan kemudian menuju tempat masing-masing yang telah disediakan. Perarakan ini diiringi nyanyian atau salah satu Antifon Pembuka berikut ini.</p>

      <p><strong>Antifon Pembuka A</strong> — Bdk. Mzm. 20:36</p>
      <p><em>Kiranya Tuhan mengirimkan bantuan kepadamu dari tempat kudus dan menyokong kamu dari Sion. Kiranya Ia memberikan apa yang kamu kehendaki dan membuat rancanganmu berhasil.</em></p>

      <p><strong>Antifon Pembuka B</strong> — Bdk. Mzm. 90:14,17</p>
      <p><em>Kami Engkau penuhi di pagi hari dengan kasih setia-Mu, ya Tuhan sehingga kami bersorak-sorai dan bersukacita semasa hari-hari kami. Semoga seri wajah-Mu menerangi kami dan teguhkanlah karya tangan kami.</em></p>

      <p><strong>Antifon Pembuka C</strong> — Bdk. Mzm. 145:2,9</p>
      <p><em>Setiap hari aku memuji Dikau, ya Tuhan, dan memuliakan nama-Mu selama-lamanya. Sebab Engkau baik terhadap semua makhluk dan penuh kasih setia kepada segala ciptaan-Nya.</em></p>

      <p>Di depan altar mereka memberi penghormatan dengan membungkuk khidmat. Lalu Imam menuju altar dan menciumnya, kemudian menuju tempat yang tersedia (di depan kursi imam).</p>

      <h4>Cara Sederhana: Di Dalam Gereja</h4>
      <p>Mempelai beserta rombongan berhimpun di dalam gedung gereja atau tempat perayaan. Semua berdiri di tempat masing-masing yang telah disediakan. Imam memasuki ruang perayaan dengan mengenakan busana liturgi berwarna putih atau warna pesta lainnya, didampingi putra-putri altar. Di depan mempelai, Imam menyampaikan salam kepada mereka dengan ramah, dan menyatakan bahwa Gereja ikut mengambil bagian dalam kebahagiaan mereka.</p>
      <p>Setelah menyambut mempelai dan kaum kerabatnya, lagu pembuka dinyanyikan. Sementara itu Imam menuju altar, memberi penghormatan dengan membungkuk khidmat, lalu menciumnya. Kemudian ia menuju tempat yang tersedia (di depan kursi imam).</p>

      <h4>TANDA SALIB</h4>
      <p><em>Umat berdiri</em></p>
      <p>Imam bersama dengan umat membuat Tanda Salib.</p>
      <p><strong>I:</strong> Dalam nama Bapa dan Putra dan Roh Kudus.</p>
      <p><strong>U:</strong> Amin.</p>

      <h4>SALAM</h4>
      <p><em>Umat berdiri</em></p>
      <p>Kemudian Imam menyampaikan Salam berikut atau rumus lain yang terdapat dalam buku <em>Tata Perayaan Ekaristi</em>.</p>
      <p><strong>I:</strong> Tuhan bersamamu.</p>
      <p><strong>U:</strong> Dan bersama rohmu.</p>
      <p>Atau:</p>
      <p><strong>I:</strong> Rahmat Tuhan kita Yesus Kristus, cinta kasih Allah, dan persekutuan Roh Kudus bersamamu.</p>
      <p><strong>U:</strong> Dan bersama rohmu.</p>

      <h4>KATA PEMBUKA</h4>
      <p><em>Umat berdiri</em></p>
      <p>Kemudian Imam menyampaikan Kata Pembuka yang ditujukan kepada kedua mempelai dan umat yang hadir, supaya mengarahkan perhatian untuk perayaan perkawinan; dengan salah satu ungkapan berikut ini atau ungkapan lain yang serupa.</p>
      <p><strong>I:</strong> Saudara-saudari terkasih, khususnya keluarga dan sahabat kedua mempelai, dengan penuh sukacita kita berkumpul di rumah Tuhan bersama N... dan N... yang pada hari ini bermaksud meneguhkan ikatan kasih mereka dalam perkawinan suci. Bagi mereka hari ini sangatlah istimewa. Kita akan mendengarkan sabda Tuhan, yang ditujukan kepada mereka, namun juga kepada kita semua. Marilah menopang keinginan mereka dengan doa-doa yang tulus. Semoga Allah memberkati keluarga yang akan mereka bangun mulai hari ini.</p>

      <h4>PERCIKAN / DOA PEMBUKA</h4>
      <p><strong>I:</strong> N... dan N... , bersama dengan orang tua, sanak saudara, dan para sahabat, Gereja ikut bergembira dan menerima kalian dengan senang hati, pada saat penuh arti dalam hidup kalian. Tuhan menolong kalian pada hari bahagia ini. Ia mengulurkan tangan dari surga dan menjaga kalian berdua. Ia menganugerahi dan memenuhi semua permohonan seperti yang kalian harapkan.</p>

      <p>Untuk kedua mempelai yang dibaptis secara Katolik/Kristiani:</p>
      <p><strong>I:</strong> Saudara-saudari sekalian. Hari ini kedua mempelai datang ke sini dengan permohonan agar cinta kasih mereka dikuduskan oleh Tuhan di hadapan Saudara-saudari. Pengudusan cinta kasih ini bagi kedua mempelai merupakan sakramen, yaitu tanda kehadiran Tuhan di tengah keluarga yang akan mereka bangun bersama. Ini berarti pula bahwa Tuhan berkenan mendampingi keluarga mereka siang dan malam, sepanjang hidup mereka. Allah telah menguduskan ikatan suami-istri dan mengangkat perjanjian nikah menjadi lambang persatuan Kristus dan Gereja. Maka marilah kita mempersiapkan diri agar layak merayakan misteri perkawinan yang suci dan agung ini.</p>

      <p>Dapat ditambahkan sapaan kepada para hadirin yang bukan Katolik:</p>
      <p><strong>I:</strong> Saudara-saudari yang tidak beragama Katolik, kami ucapkan terima kasih atas kehadiran Anda dalam perayaan ini. Perkawinan ini akan dilaksanakan menurut tata cara Gereja Katolik. Kami juga memohon dukungan doa Anda selama perayaan suci ini.</p>

      <h4>PERCIKAN</h4>
      <p><em>Umat berdiri</em></p>
      <p>Ritus Tobat ditiadakan dan dapat diganti dengan Percikan Air Suci (pengenangan akan sakramen Pembaptisan). Cara ini dapat dilakukan jika tidak dipilih penyambutan mempelai dengan Cara Meriah yang menggunakan percikan. Imam menyampaikan pengantar, misalnya sebagai berikut:</p>
      <p><strong>I:</strong> Saudara-saudari terkasih, kita sedang merayakan misteri agung cinta Kristus kepada Gereja. Hari ini N... dan N... dipanggil untuk mengambil bagian dalam misteri itu, melalui perkawinan mereka. Kita semua bersatu padu dalam iman akan Kristus, yaitu karunia dari Allah yang dicurahkan ke dalam hati kita, dan kita ikrarkan ketika dibaptis. Oleh karena itu, marilah kita kenangkan saat pembaptisan kita, awal hidup baru dalam iman, sumber dan dasar setiap panggilan Kristiani.</p>
      <p>Seorang putra/putri altar membawakan air suci kepada Imam. Imam memerciki dirinya sendiri, putra-putri altar, dan kemudian memerciki mempelai dan seluruh umat. Ritus ini dapat diiringi dengan nyanyian yang sesuai.</p>

      <h4>DOA PEMBUKA</h4>
      <p><em>Umat berdiri</em></p>
      <p>Jika Perayaan Perkawinan dilakukan dalam Misa pada hari/masa yang disebut di atas (bukan Misa bagi Mempelai), maka Doa Pembuka, Doa Persiapan Persembahan, dan Doa Sesudah Komuni diambil dari rumus Misa hari yang bersangkutan. Dalam Misa bagi Mempelai, Doa Pembuka dapat memakai contoh berikut ini.</p>
      <p><strong>I:</strong> Marilah kita berdoa. <em>(hening sejenak untuk menyampaikan doa-doa pribadi)</em></p>
      <p>Allah, Pencipta yang penuh kasih, Engkau telah menuntun kedua mempelai ini dalam perjalanan untuk saling mengasihi. Kukuhkanlah cinta dan keinginan luhur mereka yang melandasi ikrar untuk saling mengikatkan diri di hadapan-Mu. Limpahkanlah rahmat-Mu atas mereka. Buatlah mereka pantas dan kudus, agar mampu menjadi tanda kehadiran-Mu yang nyata. Dengan pengantaraan Yesus Kristus, Putra-Mu, Tuhan kami, yang hidup dan berkuasa bersama Dikau dalam persatuan Roh Kudus, Allah, sepanjang segala masa.</p>
      <p><strong>U:</strong> Amin.</p>

      <h3>LITURGI SABDA</h3>
      <p>Liturgi Sabda dilaksanakan seperti biasanya. Dapat diadakan dua atau tiga bacaan. Bacaan Pertama harus diambil dari Kitab Suci Perjanjian Lama, namun dalam masa Paskah dari Kisah Para Rasul atau Kitab Wahyu. Setidaknya salah satu dari dua atau tiga bacaan itu secara khusus berbicara tentang perkawinan. Hendaknya mempelai tidak diberi tugas sebagai lektor, sebab teristimewa bagi mereka berdualah Sabda Tuhan diarahkan.</p>

      <h4>PILIHAN BACAAN</h4>
      <p>Pembacaan dilakukan seperti lazimnya. Berikut ini contoh pilihan Bacaan-bacaannya.</p>

      <p><strong>Bacaan Pertama</strong> — Kej. 1:26-28, 31a:</p>
      <p><em>"Ia menciptakan mereka laki-laki dan perempuan."</em></p>
      <p>Allah bersabda: Mari kita membuat manusia... sangat baik adanya.</p>

      <p><strong>Mazmur Tanggapan</strong> — Mzm. 127 (128):1-2, 3, 4-5ac dan 6a</p>
      <p><strong>Ulangan:</strong> (bdk. 1) Berbahagialah semua orang yang takut akan Tuhan.</p>
      <p>Atau:</p>
      <p><strong>Ulangan:</strong> (4) Lihatlah betapa diberkati orang laki-laki yang takut akan Tuhan.</p>

      <p><strong>Bacaan Kedua</strong> — Ef. 5:2a, 21-33 (panjang) atau 5:2a, 25-32 (singkat):</p>
      <p><em>"Rahasia ini besar, tetapi yang aku maksudkan ialah hubungan antara Kristus dengan jemaat."</em></p>
      <p>Saudara-saudara: Hiduplah di dalam kasih, sebagaimana Kristus juga telah mengasihi kamu dan telah menyerahkan diri-Nya untuk kita... mengabdilah satu sama lain.</p>

      <p><strong>Alleluya dan Bait Pengantar Injil</strong> — Mzm. 133 (134):3</p>
      <p><strong>Ulangan:</strong> Alleluya.</p>
      <p><strong>Ayat:</strong> Semoga Tuhan yang menjadikan langit dan bumi, memberkati engkau dari Sion.</p>
      <p>Atau: (untuk masa Prapaskah) — 1Yoh. 4:16b, 12, 11</p>
      <p><strong>Ulangan:</strong> Terpujilah Kristus, Tuhan, raja mulia dan kekal.</p>
      <p><strong>Ayat:</strong> Allah adalah kasih, hendaklah kita juga saling mengasihi, seperti Allah telah mengasihi kita.</p>

      <p><strong>Bacaan Injil</strong> — Mat. 19:3-6:</p>
      <p><em>"Yang telah disatukan Allah, janganlah diceraikan oleh manusia."</em></p>
      <p>Pada waktu itu orang-orang Farisi datang kepada Yesus...</p>

      <h4>HOMILI</h4>
      <p><em>Umat duduk</em></p>
      <p>Imam menyampaikan Homili yang bersumber dari bacaan Kitab Suci atau teks Liturgi yang digunakan dalam Misa ini. Ia hendaknya menjelaskan misteri perkawinan Kristiani, martabat cinta pasangan suami-istri, rahmat Sakramen ini, dan kewajiban mereka, serta perlu mengaitkannya dengan situasi nyata dari mempelai dan keadaan zaman.</p>

      <h3>PERAYAAN PERKAWINAN</h3>
      <p>Kalau dalam perayaan ini ada dua pasang mempelai atau lebih, Pernyataan Mempelai, Kesepakatan Perkawinan, dan Penerimaan Kesepakatan Perkawinan dilaksanakan oleh/untuk masing-masing pasangan, yang satu sesudah yang lain. Bagian-bagian lain, termasuk Berkat untuk Mempelai, dilaksanakan satu kali untuk semua pasangan sekaligus.</p>

      <h4>MOHON RESTU</h4>
      <p><em>Umat duduk</em></p>
      <p>Sebelum melangsungkan Perayaan Perkawinan, kedua mempelai mohon restu para orang tua dengan cara yang sesuai dengan adat setempat. Acara ini dapat juga dilaksanakan sesudah Penerimaan Kesepakatan Perkawinan, yakni pada bagian Ritus Pelengkap.</p>
      <p><strong>I:</strong> N... dan N... , sebelum perayaan perkawinan Gereja kita laksanakan, kami persilakan kalian berdua terlebih dahulu menghadap kedua orang tua kalian untuk mohon restu bagi perjalanan hidup yang hendak kalian awali ini.</p>
      <p>Kedua mempelai menghadap orang tua mereka. Sementara itu dapat diiringi nyanyian yang sesuai dengan maksud ritus ini. Bagi wilayah adat yang biasa mengisi ungkapan restu orang tua dengan kata-kata dan nasihat, nyanyian dapat ditiadakan.</p>

      <h4>PENGANTAR</h4>
      <p>Para Saksi Perkawinan berdiri mendampingi mempelai.</p>
      <p>Di hadapan mempelai yang berdiri Imam menyampaikan pengantar:</p>

      <p>Untuk kedua mempelai yang dibaptis secara Katolik/Kristiani:</p>
      <p><strong>I:</strong> Mempelai yang berbahagia, kalian datang di tempat ini untuk menerima berkat Tuhan, karena kalian berniat untuk saling mengikat diri dalam hidup perkawinan. Para pelayan Gereja dan saudara-saudari seiman hadir juga di sini untuk menyaksikan peristiwa penuh rahmat ini. Kristus memberikan berkat melimpah bagi cinta kalian sebagai suami-istri. Ia telah menguduskan kalian dalam pembaptisan dan kini Ia memperkaya serta memperkuat kalian dengan Sakramen Perkawinan ini. Semoga kalian saling mempercayai dan melaksanakan kewajiban-kewajiban hidup perkawinan. Kini saya minta kalian menyatakan niat itu di hadapan Gereja.</p>

      <p>Atau:</p>
      <p><strong>I:</strong> Para mempelai yang berbahagia, kalian telah datang kemari dengan maksud untuk meneguhkan perkawinan kalian di hadapan pejabat Gereja dan disaksikan oleh umat beriman. Kristus akan memberkati dan mengukuhkan perkawinan kalian, agar kalian sanggup saling mengasihi dengan setia dan menunaikan tanggung jawab sebagai suami-istri. Maka sekarang saya minta supaya kalian menyatakan maksud dan isi hati dengan menjawab pertanyaan saya.</p>

      <h4>PERNYATAAN MEMPELAI</h4>
      <p>Kemudian Imam menanyai Mempelai tentang kehendak bebas, kesetiaan, kesediaan menerima dan mendidik anak mereka. Masing-masing mengungkapkan jawaban pribadi namun diucapkan bersama-sama.</p>
      <p><strong>I:</strong> N... dan N... , sungguhkah kalian dengan hati bebas dan tulus ikhlas hendak meresmikan perkawinan ini?</p>
      <p><strong>M:</strong> Ya, sungguh.</p>
      <p><strong>I:</strong> Selama menjalani perkawinan nanti, bersediakah kalian untuk saling mengasihi dan saling menghormati sepanjang hidup?</p>
      <p><strong>M:</strong> Ya, saya bersedia.</p>
      <p><strong>I:</strong> Bersediakah kalian dengan penuh kasih sayang menerima anak-anak yang dianugerahkan Allah kepada kalian, dan mendidik mereka sesuai dengan hukum Kristus dan Gereja-Nya?</p>
      <p><strong>M:</strong> Ya, saya bersedia.</p>

      <h4>KESEPAKATAN PERKAWINAN</h4>
      <p><strong>Cara A — Janji dengan berjabat tangan</strong></p>
      <p>Imam mengajak Mempelai Laki-laki dan Mempelai Perempuan untuk mengungkapkan Kesepakatan Perkawinan.</p>
      <p><strong>I:</strong> Untuk mengikrarkan perkawinan kudus ini, silakan kalian saling berjabat tangan kanan dan menyatakan kesepakatan kalian di hadapan Allah dan Gereja-Nya.</p>
      <p>Kedua mempelai saling menghadap, berjabat tangan kanan, dan sambil bergantian mengucapkan janji masing-masing.</p>
      <p><strong>ML:</strong> Saya, N..., memilih engkau, N..., menjadi istri saya. Saya berjanji untuk setia mengabdikan diri kepadamu dalam untung dan malang, di waktu sehat dan sakit. Saya mau mengasihi dan menghormati engkau sepanjang hidup saya.</p>
      <p><strong>MP:</strong> Saya, N..., memilih engkau, N..., menjadi suami saya. Saya berjanji untuk setia mengabdikan diri kepadamu dalam untung dan malang, di waktu sehat dan sakit. Saya mau mengasihi dan menghormati engkau sepanjang hidup saya.</p>

      <p><strong>Cara B — Janji dalam bentuk tanya jawab</strong></p>
      <p>Kalau berdasarkan pertimbangan pastoral dirasakan lebih baik, maka Imam dapat menggunakan cara berikut:</p>
      <p><strong>I:</strong> Kini tibalah saatnya pernyataan janji perkawinan. Saya persilakan Anda berdua saling berjabat tangan kanan, dan secara bergantian menjawab pertanyaan saya.</p>
      <p>Para mempelai saling berjabat tangan kanan dan jika memungkinkan Imam dapat meletakkan stola di atas tangan mereka.</p>
      <p><strong>I:</strong> N... (nama mempelai laki-laki), maukah Anda menerima N... (nama mempelai perempuan), menjadi istrimu dan berjanji setia mengabdikan diri kepadanya dalam untung dan malang, di waktu sehat dan sakit, serta mau mengasihi dan menghormati dia sepanjang hidupmu?</p>
      <p><strong>ML:</strong> Ya, saya mau.</p>
      <p><strong>I:</strong> N... (nama mempelai perempuan), maukah Anda menerima N... (nama mempelai laki-laki), menjadi suamimu dan berjanji setia mengabdikan diri kepadanya dalam untung dan malang, di waktu sehat dan sakit, serta mau mengasihi dan menghormati dia sepanjang hidupmu?</p>
      <p><strong>MP:</strong> Ya, saya mau.</p>

      <h4>PENERIMAAN KESEPAKATAN PERKAWINAN</h4>
      <p>Imam menerima Kesepakatan Perkawinan dan berkata kepada mempelai, misalnya dengan salah satu rumus berikut:</p>

      <p><strong>Rumus A:</strong></p>
      <p><strong>I:</strong> Semoga Tuhan memperteguh janji yang sudah kalian nyatakan dan berkenan melimpahkan berkat-Nya kepada kalian berdua. Yang telah dipersatukan Allah, janganlah diceraikan manusia.</p>
      <p><strong>U:</strong> Amin.</p>
      <p><strong>I:</strong> Marilah memuji Tuhan.</p>
      <p><strong>U:</strong> Syukur kepada Allah.</p>

      <p><strong>Rumus B:</strong></p>
      <p><strong>I:</strong> Semoga Allah Abraham, Allah Ishak, dan Allah Yakub, yang telah mempersatukan manusia pertama di Taman Eden, mengukuhkan dan memberkati perkawinan yang kalian laksanakan di hadapan Gereja dalam Kristus. Yang telah dipersatukan Allah, janganlah diceraikan manusia.</p>
      <p><strong>U:</strong> Amin.</p>
      <p><strong>I:</strong> Marilah memuji Tuhan.</p>
      <p><strong>U:</strong> Syukur kepada Allah.</p>

      <p><strong>Rumus C:</strong></p>
      <p><strong>I:</strong> Atas nama Gereja Allah, di hadapan para saksi dan umat Allah yang hadir di sini, saya menegaskan bahwa perkawinan yang telah diresmikan ini adalah perkawinan Katolik yang sah. Semoga bagi kalian berdua Sakramen ini menjadi sumber kekuatan dan kebahagiaan. Yang dipersatukan Allah, janganlah diceraikan manusia.</p>
      <p><strong>U:</strong> Amin.</p>
      <p><strong>I:</strong> Marilah memuji Tuhan.</p>
      <p><strong>U:</strong> Syukur kepada Allah.</p>

      <h3>RITUS PELENGKAP</h3>
      <p>Bagian berikut ini dapat disesuaikan dengan perlambangan lain dalam adat istiadat setempat. Ritus ini tidak perlu diiringi nyanyian.</p>

      <h4>PEMBERKATAN DAN PENGENAAN CINCIN</h4>
      <p><em>Umat duduk</em></p>

      <p><strong>Cara A</strong></p>
      <p>Imam memberkati cincin kedua mempelai:</p>
      <p><strong>I:</strong> Semoga Tuhan memberkati kedua cincin ini, yang akan kalian kenakan satu sama lain sebagai tanda cinta dan kesetiaan.</p>
      <p><strong>U:</strong> Amin.</p>
      <p>Imam dapat memerciki cincin-cincin dengan air suci. Kemudian mempersilakan mempelai untuk secara bergantian mengambil cincin pasangannya dan mengenakan cincin itu kepada pasangannya.</p>
      <p><strong>ML:</strong> N..., terimalah cincin ini, tanda cintaku dan kesetiaanku. (jika mempelai Katolik ditambahkan:) Dalam nama Bapa dan Putra dan Roh Kudus.</p>
      <p><strong>MP:</strong> N..., terimalah cincin ini, tanda cintaku dan kesetiaanku. (jika mempelai Katolik ditambahkan:) Dalam nama Bapa dan Putra dan Roh Kudus.</p>
      <p>Setelah kedua mempelai saling mengenakan cincin, seluruh umat dapat menyanyikan madah pujian kepada Allah. Jika dikehendaki dan sesuai dengan adat istiadat, maka mempelai dapat bertukar tempat.</p>

      <p><strong>Cara B</strong></p>
      <p>Imam memberkati cincin-cincin sambil berkata:</p>
      <p><strong>I:</strong> Ya Tuhan, berkatilah kedua cincin ini. Semoga kedua mempelai yang mengenakannya tetap bersatu dalam kesetiaan; tinggal dalam damai menurut kehendak-Mu; saling mengasihi dan menghormati. Semoga mereka selalu hidup dalam cinta kasih satu sama lain. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p>Atau:</p>
      <p><strong>I:</strong> Ya Tuhan, berkatilah dan kuduskanlah hamba-hamba-Mu dalam cinta kasih mereka. Semoga kedua cincin ini, menjadi tanda kesetiaan bagi mereka dan mengingatkan mereka untuk saling mengasihi. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p><strong>U:</strong> Amin.</p>
      <p>Imam dapat memerciki cincin-cincin itu dengan air suci.</p>

      <h4>PEMBUKAAN KERUDUNG</h4>
      <p><em>Umat duduk</em></p>
      <p>Pada waktu mempelai laki-laki membuka kerudung mempelai perempuan, Imam dapat berkata:</p>
      <p><strong>I:</strong> Semoga kalian berdua selalu saling memandang dengan wajah penuh cinta. Semoga ikatan cinta kasih kalian berdua yang diresmikan dalam perayaan ini menjadi sumber kebahagiaan sejati.</p>

      <h4>MOHON RESTU</h4>
      <p>Jika diharapkan oleh keluarga dan belum dilakukan, sekarang kedua mempelai dapat diberi kesempatan untuk memohon restu dan berkat kepada orang tua mereka.</p>
      <p><strong>I:</strong> N... dan N..., sekarang saya persilakan kalian berdua memohon restu kedua orang tuamu demi perjalanan hidup yang sudah kalian awali ini.</p>
      <p>Kedua mempelai menghadap orang tua mereka. Sementara itu dapat diiringi nyanyian yang sesuai dengan maksud ritus ini. Bagi wilayah adat yang biasa mengisi ungkapan restu orang tua dengan kata-kata dan nasihat, nyanyian dapat ditiadakan.</p>

      <h4>PENYERAHAN KITAB SUCI, SALIB, DAN ROSARIO</h4>
      <p>Imam memberkati Kitab Suci, Salib, dan Rosario; kemudian Orang Tua kedua mempelai menyerahkannya kepada kedua mempelai.</p>
      <p><strong>Orang Tua:</strong> Anak-anak yang terkasih, terimalah Kitab Suci, Salib, dan Rosario ini sebagai bekal perjalanan hidup Perkawinan. Baik dalam suka maupun duka, pergunakanlah semua ini dengan semestinya. Tuhan akan selalu mendampingi langkah kalian. Doa kami pun selalu menyertai kalian.</p>
      <p><strong>M:</strong> Terima kasih.</p>

      <h4>DOA UMAT</h4>
      <p><em>Umat berdiri</em></p>
      <p>Imam mengajak dan memimpin umat untuk menyampaikan doa-doa mereka:</p>
      <p><strong>I:</strong> Saudara-saudari terkasih, Tuhan telah berkenan menyempurnakan dan menguduskan cinta N... dan N..., maka sambil mengenangkan anugerah kebaikan dan cinta istimewa yang telah mereka terima marilah kita menyerahkan mereka kepada Tuhan melalui doa-doa ini.</p>
      <p><strong>L:</strong> Semoga N... dan N..., yang baru saja dipersatukan dalam perkawinan suci, selalu dikaruniai kesehatan jiwa dan raga. Marilah kita mohon.</p>
      <p><strong>U:</strong> Ya Tuhan, dengarkanlah doa kami.</p>
      <p><strong>L:</strong> Semoga Tuhan, yang memberkati perkawinan di Kana melalui kehadiran-Nya, senantiasa juga menjaga pasangan ini agar selalu setia pada janji perkawinan mereka. Marilah kita mohon.</p>
      <p><strong>U:</strong> Ya Tuhan, dengarkanlah doa kami.</p>
      <p><strong>L:</strong> Semoga cinta mereka akan berbuah dan menjadi sempurna. Semoga mereka dapat saling mendukung dalam damai dan saling membantu, serta, sebagai orang Kristiani, mereka dapat menjadi saksi Injil. Marilah kita mohon.</p>
      <p><strong>U:</strong> Ya Tuhan, dengarkanlah doa kami.</p>
      <p><strong>L:</strong> Semoga umat Allah tumbuh dari hari ke hari dalam keutamaan dan semoga semua orang yang berbeban berat mendapat kekuatan dalam rahmat suci Allah. Marilah kita mohon.</p>
      <p><strong>U:</strong> Ya Tuhan, dengarkanlah doa kami.</p>
      <p><strong>L:</strong> Semoga rahmat Sakramen Perkawinan dari semua pasangan suami-istri yang hadir di sini diperbarui oleh Roh Kudus. Marilah kita mohon.</p>
      <p><strong>U:</strong> Ya Tuhan, dengarkanlah doa kami.</p>
      <p><strong>I:</strong> Ya Tuhan, utuslah Roh cinta-Mu atas pasangan yang berbahagia ini, agar mereka menjadi sehati dan sejiwa. Jangan biarkan sesuatu mengganggu kebahagiaan mereka, karena Engkaulah yang telah memberkati mereka. Jangan biarkan pula mereka terpisah, karena Engkaulah yang telah mempersatukan mereka. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p><strong>U:</strong> Amin.</p>

      <h3>LITURGI EKARISTI</h3>

      <h4>PERARAKAN PERSEMBAHAN</h4>
      <p><em>Umat duduk</em></p>
      <p>Kedua mempelai mengantar sendiri roti dan anggur dan para petugas atau kerabat mereka menyertai dengan membawa bahan-bahan persembahan lainnya.</p>

      <h4>DOA PERSIAPAN PERSEMBAHAN</h4>
      <p><em>Umat berdiri</em></p>
      <p>Imam mengajak umat berdoa dan kemudian mengucapkan Doa Persiapan Persembahan:</p>
      <p><strong>I:</strong> Berdoalah, Saudara-saudari, supaya persembahanku dan persembahanmu berkenan kepada Allah, Bapa yang mahakuasa.</p>
      <p><strong>U:</strong> Semoga persembahan ini diterima demi kemuliaan Tuhan dan keselamatan kita, serta seluruh umat Allah yang kudus.</p>
      <p>Doa berikut ini dapat diganti:</p>
      <p><strong>I:</strong> Ya Tuhan, terimalah kurban yang kami persembahkan untuk perjanjian perkawinan yang suci ini. Engkaulah yang memungkinkan pelaksanaannya. Semoga Engkau juga yang mengatur kelangsungannya dengan bijaksana. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p><strong>U:</strong> Amin.</p>

      <h4>DOA SYUKUR AGUNG</h4>
      <p><em>Umat berlutut/berdiri</em></p>
      <p>Imam dapat memilih salah satu Doa Syukur Agung (I, II, III) yang tersedia dalam buku <em>Tata Perayaan Ekaristi</em>.</p>

      <p><strong>Prefasi Perkawinan (Martabat Perjanjian Perkawinan)</strong></p>
      <p><strong>I:</strong> Sungguh layak dan benar, pantas dan menyelamatkan, bahwa kami selalu dan di mana pun bersyukur kepada-Mu, Tuhan, Bapa yang kudus, Allah yang Mahakuasa dan kekal: Engkau menjalin janji perkawinan dengan tali kerukunan yang lembut dan dengan ikatan damai yang tak terputuskan, agar kesuburan yang murni dari pasangan-pasangan suci menambah jumlah anak-anak angkat-Mu. Sebab, oleh penyelenggaraan dan kasih karunia-Mu, ya Tuhan, secara mengagumkan Engkau mengatur agar keturunan yang dilahirkan untuk memenuhi bumi menambah jumlah anggota Gereja oleh kelahiran kembali dengan pengantaraan Kristus, Tuhan kami. Dengan pengantaraan-Nya, bersama para Malaikat dan semua Orang Kudus, kami menyanyikan madah pujian bagi-Mu dengan tak henti-hentinya bernyanyi/berseru:</p>
      <p><strong>U:</strong> Kudus, kudus, kuduslah Tuhan...</p>

      <p><strong>Sisipan dalam Doa Syukur Agung I:</strong></p>
      <p><strong>I:</strong> Maka kami mohon, ya Tuhan, sudilah menerima persembahan kami, hamba-hamba-Mu, dan persembahan seluruh keluarga-Mu ini. Kami mempersembahkannya juga untuk hamba-hamba-Mu, N... dan N... ini. Sebagaimana Engkau telah mengantar mereka sampai pada hari perkawinan mereka; [semoga Engkau menggembirakan mereka dengan anugerah keturunan] dan memberkati mereka dengan usia panjang. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p><strong>U:</strong> Amin.</p>

      <p><strong>Sisipan dalam Doa Syukur Agung II:</strong></p>
      <p><strong>I:</strong> Ingatlah juga, ya Tuhan, akan hamba-hamba-Mu, N... dan N... ini, yang telah Engkau antar sampai pada hari perkawinan ini. Semoga dengan bantuan rahmat-Mu mereka saling mencintai dan hidup rukun.</p>

      <p><strong>Sisipan dalam Doa Syukur Agung III:</strong></p>
      <p><strong>I:</strong> Kami mohon, teguhkanlah dalam rahmat perkawinan hamba-hamba-Mu, N... dan N..., yang telah Engkau antar dengan sukacita sampai pada hari perkawinan ini. Semoga janji yang mereka ikrarkan di hadapan-Mu senantiasa mereka pelihara selama hidup di dalam naungan-Mu.</p>

      <h4>DOA TUHAN: BAPA KAMI</h4>
      <p><em>Umat berdiri</em></p>
      <p>Imam mengajak umat untuk bersama-sama mengucapkan atau menyanyikan doa Tuhan, "Bapa Kami". Embolisme-Doksologi ditiadakan. Setelah doa "Bapa Kami" Imam berdiri di hadapan kedua mempelai yang berlutut di tempat mereka atau di depan altar.</p>

      <h4>BERKAT UNTUK MEMPELAI</h4>
      <p><em>Umat berdiri, mempelai berlutut</em></p>
      <p>Sambil mengatupkan tangan Imam memberi pengantar dan mengajak semua untuk hening sejenak:</p>
      <p><strong>I:</strong> Saudara-saudari terkasih, marilah kita berdoa dengan rendah hati agar Tuhan berkenan melimpahkan anugerah berkat-Nya atas hamba-hamba-Nya ini yang sudah menikah dalam Kristus; dan yang sudah diikat-Nya dengan janji suci [dengan Sakramen Tubuh dan Darah Kristus] serta dibuat-Nya sehati sejiwa dalam satu kasih.</p>
      <p><em>Hening</em></p>
      <p>Imam merentangkan kedua tangannya di atas mempelai dan mengucapkan doa berikut:</p>
      <p><strong>I:</strong> Ya Allah, dengan kuat kuasa-Mu, Engkau telah menciptakan segala sesuatu dari ketiadaan. Setelah mengatur awal mula alam semesta dan menciptakan manusia menurut citra-Mu, Engkau pun menetapkan bagi laki-laki seorang perempuan sebagai penolong yang tak terpisahkan. Mereka bukan lagi dua melainkan satu daging, dan Engkau mengajarkan bahwa yang sudah dipersatukan tidak pernah boleh diceraikan.</p>
      <p>Ya Allah, Engkau telah menguduskan ikatan perkawinan dengan misteri yang begitu luhur, sehingga dalam janji perkawinan Engkau memperlambangkan sakramen hubungan Kristus dengan Gereja.</p>
      <p>Ya Allah, di dalam Engkau perempuan bersatu dengan laki-laki, dan komunitas insani yang pertama, yaitu keluarga, dianugerahi dengan berkat yang tidak bisa ditiadakan oleh apa pun: tidak oleh kutukan dosa asal, tidak pula oleh hukuman air bah.</p>
      <p>Pandanglah dengan rela hamba-hamba-Mu ini, yang setelah menjalin persekutuan perkawinan, mereka tetap mengharapkan berkat dan perlindungan-Mu. Curahkanlah anugerah Roh Kudus ke atas mereka agar mereka tetap setia dalam ikatan perkawinan karena kasih-Mu yang dituangkan ke dalam hati mereka.</p>
      <p>Penuhilah hati hamba-Mu, N..., mempelai perempuan ini, dengan rahmat cinta dan damai. Semoga ia mengikuti teladan hidup perempuan-perempuan kudus yang dipuji di dalam Kitab Suci. Semoga hati suaminya tertambat padanya dan dia diterima sebagai teman hidup yang setara. Semoga ia mendampinginya dengan rasa hormat yang pantas dan senantiasa mencintainya, dengan kasih Kristus sendiri, yang mencintai Gereja-Nya.</p>
      <p>Maka kami mohon kepada-Mu, ya Tuhan, semoga hamba-hamba-Mu ini tetap tinggal dalam ikatan iman dan pelaksanaan hukum-Mu. Semoga mereka yang sudah dipersatukan sebagai suami-istri menjadi orang-orang terpandang karena kesempurnaan peri hidup mereka. Semoga mereka yang telah diteguhkan oleh Injil menjadi saksi Kristus yang baik di hadapan semua orang. [Semoga mereka mendapat keturunan, menjadi orang tua yang patut dicontoh karena kebajikan, dan boleh melihat cucu-cicit mereka.] Akhirnya, semoga mereka mencapai usia lanjut, dan masuk ke dalam kehidupan para kudus di dalam kerajaan surga. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p><strong>U:</strong> Amin.</p>

      <h4>SALAM DAMAI</h4>
      <p><em>Umat dan mempelai berdiri</em></p>
      <p>Doa damai "Tuhan Yesus Kristus, Engkau telah bersabda..." ditiadakan, dan Imam langsung menyampaikan "Salam Damai".</p>
      <p><strong>I:</strong> Damai Tuhan bersamamu.</p>
      <p><strong>U:</strong> Dan bersama rohmu.</p>
      <p>Kemudian Imam memberi salam kepada mempelai dan orang tua mereka. Mempelai dan seluruh umat dapat saling mengungkapkan tanda damai dan cinta kasih, khususnya kepada Umat di sekitarnya yang dapat dijangkau.</p>

      <h4>PEMECAHAN HOSTI</h4>
      <p>Imam memecah-mecahkan hosti kudus, sementara umat mengiringinya dengan mengucapkan/menyanyikan "Anak Domba Allah". Setelah itu Imam menunjukkan hosti dan mengangkat piala, sambil mengucapkan "Inilah Anak Domba Allah..." atau rumus lain yang terdapat dalam buku <em>Tata Perayaan Ekaristi</em>.</p>

      <h4>KOMUNI</h4>
      <p>Ketika Imam menyambut Tubuh Kristus, dimulailah nyanyian komuni, atau salah satu Antifon Komuni berikut ini:</p>

      <p><strong>Antifon Komuni A</strong> — Bdk. Ef. 5:25-27</p>
      <p><em>Kristus mencintai Gereja dan menyerahkan diri baginya, dan menjadikannya mempelai perempuan yang kudus dan tak bercela.</em></p>

      <p><strong>Antifon Komuni B</strong> — Yoh. 13:34</p>
      <p><em>Perintah baru Aku berikan kepada kamu, supaya kamu saling mengasihi, sama seperti Aku telah mengasihi kamu, sabda Tuhan.</em></p>

      <p><strong>Antifon Komuni C</strong> — Mzm. 34:2,9</p>
      <p><em>Aku hendak memuji Tuhan setiap waktu, Pujian-Nya tetap menggema dari mulutku. Nikmatilah dan rasakanlah betapa manisnya Tuhan. Berbahagialah orang yang berlindung pada-Nya.</em></p>

      <p>Kedua mempelai, orang tua, saudara sekandung mereka, dan para saksi sebaiknya menerima komuni dalam dua rupa. Antara kedua mempelai, dan juga umat, tidak diizinkan mengambil sendiri, saling memberikan, ataupun saling menyuapkan hosti kudus dan piala.</p>

      <h4>DOA SESUDAH KOMUNI</h4>
      <p><em>Umat berdiri</em></p>
      <p>Imam mengucapkan doa berikut ini, atau memilih doa lain:</p>
      <p><strong>I:</strong> Marilah kita berdoa. Ya Tuhan, kami telah mengambil bagian pada meja perjamuan-Mu. Kami mohon, semoga mereka yang telah dipersatukan dengan Sakramen Perkawinan senantiasa berpaut pada-Mu, dan memaklumkan nama-Mu kepada semua orang. Dengan pengantaraan Kristus, Tuhan kami.</p>
      <p><strong>U:</strong> Amin.</p>

      <h3>RITUS PENUTUP</h3>
      <p>Pada saat ini dapat diadakan acara yang sesuai dengan adat setempat sebagai bentuk amanat pengutusan.</p>

      <h4>BERKAT MERIAH</h4>
      <p><em>Umat berdiri</em></p>
      <p><strong>I:</strong> Saudara-saudari, marilah kita mengakhiri perayaan ini dengan memohon berkat Tuhan.</p>
      <p><em>Hening</em></p>
      <p><strong>I:</strong> Semoga Allah Bapa yang kekal memelihara kalian dalam cinta kasih dan kerukunan, supaya damai Kristus senantiasa tinggal dalam diri dan dalam rumah kalian.</p>
      <p><strong>U:</strong> Amin.</p>
      <p><strong>I:</strong> Semoga kalian diberkati dengan keturunan, memperoleh penghiburan dari para sahabat dan kenalan, dan hidup dalam damai sejati dengan semua orang.</p>
      <p><strong>U:</strong> Amin.</p>
      <p><strong>I:</strong> Semoga kalian menjadi saksi kasih Allah dalam dunia, dan berhati dermawan bagi mereka yang menderita dan berkekurangan, agar kelak mereka menyambut kalian dengan penuh terima kasih ke dalam kediaman Allah yang kekal.</p>
      <p><strong>U:</strong> Amin.</p>
      <p><strong>I:</strong> Dan semoga saudara sekalian yang hadir di sini diberkati oleh Allah yang mahakuasa: † Bapa dan Putra dan Roh Kudus.</p>
      <p><strong>U:</strong> Amin.</p>

      <h4>PENGUTUSAN</h4>
      <p><em>Umat berdiri</em></p>
      <p><strong>I:</strong> Saudara-saudari terkasih, dengan ini perayaan Ekaristi dan Perkawinan N... dan N... sudah selesai.</p>
      <p><strong>U:</strong> Syukur kepada Allah.</p>
      <p><strong>I:</strong> Marilah pergi dan memberi kesaksian tentang kebaikan Tuhan.</p>
      <p><strong>U:</strong> Amin.</p>

      <h4>BERDOA KEPADA BUNDA MARIA ATAU KELUARGA KUDUS NAZARET</h4>
      <p>Jika dikehendaki, kedua mempelai dapat berdoa di hadapan patung Bunda Maria, atau Keluarga Kudus Nazaret, atau patung devosional lain yang sesuai. Imam beserta saksi dapat mendampingi mereka.</p>

      <p><strong>Cara A: Doa kepada Bunda Maria</strong></p>
      <p><strong>ML:</strong> Santa Maria, Bunda Yesus dan Bunda kami yang tercinta, hari ini hari yang sangat membahagiakan kami berdua. Kami telah berjanji untuk saling setia dan kami mau menempuh perjalanan hidup selanjutnya bersama-sama sebagai suami istri. Pada saat yang sungguh berarti ini kami memohon juga doa restumu, ya Bunda kami.</p>
      <p><strong>MP:</strong> Santa Maria, doakanlah kami, agar cinta kami tahan uji dalam segala suka dan duka hidup perkawinan. Semoga kami dapat membentuk rumah tangga yang sejahtera dan membangun keluarga yang bahagia. Ya Bunda yang baik hati, doakanlah kami pada Putra-Mu, Tuhan kami, Yesus Kristus.</p>
      <p><strong>Kedua mempelai bersama-sama:</strong> Salam Maria penuh rahmat...</p>

      <p><strong>Cara B: Doa kepada Keluarga Kudus dari Nazaret</strong></p>
      <p><strong>Kedua mempelai bersama-sama:</strong> Santo Yusuf dan Santa Maria, engkaulah pasangan hidup yang setia dan saling mengasihi. Karena keberanian dan kerelaanmu telah lahir ke dunia ini Putramu, Yesus Kristus, Tuhan kami. Bersama Yesus itulah keluargamu yang kudus dari Nazaret telah kami kenal dan menjadi teladan hidup rumah tangga kami.</p>
      <p>Ya Yesus, Maria, dan Yusuf, dampingilah selalu kami berdua yang baru saja meneguhkan cinta kami dalam hidup perkawinan. Sinarilah kami dengan teladan keluarga kudusmu dan bimbinglah kami ke jalan damai sejahtera. Semoga Allah Bapa menjadikan kami keluarga yang suci. Terpujilah Engkau, ya Yesus, cahaya mulia dari Allah Bapa. Terpujilah engkau, ya Maria, bunda dan perawan yang murni. Terpujilah engkau, ya Yusuf, ayah pengasuh yang setia. Terpujilah nama Yesus, Maria, dan Yusuf untuk selama-lamanya. Amin.</p>

      <h4>PENANDATANGANAN SURAT PERKAWINAN</h4>
      <p>Kedua mempelai, para saksi, dan Imam menandatangani Surat Perkawinan gerejawi pada meja yang sudah disediakan di hadapan umat, bukan pada meja altar. Acara ini dapat diiringi nyanyian yang sesuai. Dapat pula acara ini dilaksanakan di sekretariat paroki menurut kebiasaan setempat.</p>

      <h4>PERARAKAN KELUAR</h4>
      <p><em>Umat berdiri</em></p>
      <p>Imam dan para pelayan menghormati altar, lalu meninggalkan gereja/tempat perayaan menuju sakristi. Kedua mempelai beserta keluarga berarak meninggalkan gereja/tempat perayaan. Dapat diiringi nyanyian.</p>

      <p class="small-note">— Misa Kudus dipersembahkan dalam bahasa Indonesia —</p>
    `,

    es: `
      <!-- ============================================================ -->
      <!-- GUÍA DE LA CELEBRACIÓN DEL MATRIMONIO DURANTE LA MISA        -->
      <!-- Fuente: Libro de la Celebración del Matrimonio               -->
      <!-- ============================================================ -->

      <h3>RITO DE APERTURA</h3>

      <h4>Manera Solemne: Frente a la Iglesia</h4>

      <p><strong>RECEPCIÓN DE LOS NOVIOS</strong></p>
      <p>Los novios y su séquito se reúnen frente a la puerta de la iglesia. El sacerdote los recibe con vestimenta litúrgica blanca, acompañado por los acólitos. El sacerdote puede rociar agua bendita sobre ellos y sus familiares. Si no se realiza la aspersión en este momento, puede hacerse después de la Monición de Entrada para sustituir el Acto Penitencial.</p>
      <p>Al rociarlos, el sacerdote puede decir:</p>
      <p><strong>P:</strong> Que Dios os conceda gracia y bendición, para que os presentéis ante Él con corazón puro.</p>

      <p><strong>Manera A — Sin petición de la familia:</strong></p>
      <p><strong>P:</strong> Bienvenidos, N... y N.... Bienvenidos también padres y familiares. Novios felices, os acogemos aquí para dar gracias y ser testigos de la confirmación de vuestro amor ante Dios. Que este hermoso acontecimiento sea un recuerdo lleno de gracia en vuestra vida. Vayamos juntos hacia el altar del Señor.</p>
      <p><em>→ PROCESIÓN</em></p>

      <p><strong>Manera B — Con petición de la familia:</strong></p>
      <p><strong>P:</strong> Bienvenidos, queridos hermanos y hermanas. Nos reunimos aquí para comenzar la celebración del matrimonio de N... y N.... La Iglesia os acoge y se alegra con vosotros en esta celebración de amor.</p>
      <p><strong>Familia:</strong> Reverendo Padre N..., toda la familia de N... y N... desea acompañar a N... y N... a iniciar la vida matrimonial. Rogamos que su matrimonio sea confirmado y bendecido según la enseñanza y la tradición de la Iglesia Católica.</p>
      <p><strong>P:</strong> Que el Señor acepte vuestro deseo y esperanza. Vayamos juntos hacia el altar del Señor.</p>

      <h4>PROCESIÓN</h4>
      <p><em>Asamblea de pie</em></p>
      <p>Acólitos, sacerdote, novios, padres, testigos y familiares procesionan hacia el altar, acompañados de cánticos o de una de las siguientes Antífonas de Entrada.</p>

      <p><strong>Antífona de Entrada A</strong> — Salmo 20:36</p>
      <p><em>Que el Señor te envíe auxilio desde el santuario, y desde Sión te sostenga. Que te conceda lo que deseas y haga prosperar tus proyectos.</em></p>

      <p><strong>Antífona de Entrada B</strong> — Salmo 90:14,17</p>
      <p><em>Sácianos de tu amor por la mañana, y cantaremos y nos alegraremos todos nuestros días. Que la luz de tu rostro brille sobre nosotros y confirma la obra de nuestras manos.</em></p>

      <p><strong>Antífona de Entrada C</strong> — Salmo 145:2,9</p>
      <p><em>Cada día te bendeciré, Señor, y alabaré tu nombre por siempre. Porque el Señor es bueno con todos, y su compasión alcanza a todas sus criaturas.</em></p>

      <h4>Manera Sencilla: Dentro de la Iglesia</h4>
      <p>Los novios y su séquito se reúnen dentro de la iglesia. El sacerdote entra con vestimenta litúrgica blanca, acompañado por los acólitos. Frente a los novios, el sacerdote los saluda cordialmente, manifestando que la Iglesia comparte su alegría.</p>

      <h4>SEÑAL DE LA CRUZ</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> En el nombre del Padre, del Hijo y del Espíritu Santo.</p>
      <p><strong>A:</strong> Amén.</p>

      <h4>SALUDO</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> El Señor esté con vosotros.</p>
      <p><strong>A:</strong> Y con tu espíritu.</p>
      <p>O:</p>
      <p><strong>P:</strong> La gracia de nuestro Señor Jesucristo, el amor del Padre y la comunión del Espíritu Santo estén con vosotros.</p>
      <p><strong>A:</strong> Y con tu espíritu.</p>

      <h4>MONICIÓN DE ENTRADA</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Queridos hermanos y hermanas, especialmente la familia y amigos de los novios, con gran alegría nos reunimos en la casa del Señor junto a N... y N... que hoy desean confirmar su amor en el santo matrimonio. Para ellos este día es muy especial. Escucharemos la Palabra de Dios, dirigida a ellos y también a todos nosotros. Acompañemos sus deseos con oraciones sinceras. Que Dios bendiga la familia que comenzarán a construir hoy.</p>

      <h4>ASPERSIÓN / ORACIÓN DE APERTURA</h4>
      <p><strong>P:</strong> N... y N..., junto con vuestros padres, familiares y amigos, la Iglesia se alegra y os recibe con cariño en este momento tan significativo de vuestra vida. El Señor os ayuda en este día feliz. Tiende su mano desde el cielo y os protege a ambos. Os concede y colma todas las peticiones que esperáis.</p>

      <p>Para los novios bautizados católicos/cristianos:</p>
      <p><strong>P:</strong> Hermanos y hermanas. Hoy los novios han venido aquí con la petición de que su amor sea santificado por Dios ante vosotros. La santificación de este amor es para ellos un sacramento, señal de la presencia de Dios en la familia que construirán juntos. Esto significa también que el Señor acompañará a su familia día y noche, toda su vida. Dios ha santificado la unión conyugal y ha elevado la alianza matrimonial como símbolo de la unión de Cristo y la Iglesia. Preparémonos para celebrar dignamente este santo y grande misterio del matrimonio.</p>

      <h4>ASPERSIÓN</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Queridos hermanos y hermanas, estamos celebrando el gran misterio del amor de Cristo a la Iglesia. Hoy N... y N... son llamados a participar en este misterio a través de su matrimonio. Todos estamos unidos en la fe en Cristo, don de Dios derramado en nuestros corazones y profesado en el bautismo. Recordemos, pues, nuestro bautismo, inicio de la vida nueva en la fe, fuente y fundamento de toda vocación cristiana.</p>

      <h4>ORACIÓN DE APERTURA</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Oremos. <em>(Silencio)</em></p>
      <p>Dios, Creador lleno de amor, has guiado a estos novios en su camino para amarse mutuamente. Fortalece el amor y los nobles deseos que fundamentan su compromiso ante Ti. Derrama tu gracia sobre ellos. Hazlos dignos y santos, para que puedan ser signo visible de tu presencia. Por Jesucristo, tu Hijo, nuestro Señor, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.</p>
      <p><strong>A:</strong> Amén.</p>

      <h3>LITURGIA DE LA PALABRA</h3>
      <p><em>Asamblea sentada</em></p>

      <h4>LECTURAS</h4>
      <p><strong>Primera Lectura</strong> — Génesis 1:26-28, 31a:</p>
      <p><em>"Los creó varón y mujer."</em></p>

      <p><strong>Salmo Responsorial</strong> — Salmo 127 (128):1-2, 3, 4-5ac y 6a</p>
      <p><strong>Estribillo:</strong> Dichosos los que temen al Señor.</p>

      <p><strong>Segunda Lectura</strong> — Efesios 5:2a, 25-32:</p>
      <p><em>"Grande es este misterio, pero yo me refiero a Cristo y a la Iglesia."</em></p>

      <p><strong>Aclamación del Evangelio</strong> — Salmo 133 (134):3</p>
      <p><strong>Aleluya:</strong> Que el Señor te bendiga desde Sion.</p>

      <p><strong>Evangelio</strong> — Mateo 19:3-6:</p>
      <p><em>"Lo que Dios ha unido, que no lo separe el hombre."</em></p>

      <h4>HOMILÍA</h4>
      <p><em>Asamblea sentada</em></p>
      <p>El sacerdote explica el misterio del matrimonio cristiano, la dignidad del amor conyugal, la gracia del sacramento y sus obligaciones, relacionándolo con la situación real de los novios.</p>

      <h3>CELEBRACIÓN DEL MATRIMONIO</h3>
      <p><em>Asamblea sentada</em></p>

      <h4>PEDIR LA BENDICIÓN DE LOS PADRES</h4>
      <p><strong>P:</strong> N... y N..., antes de celebrar el sacramento del matrimonio, os invitamos a acercaros a vuestros padres para pedir su bendición para el camino que vais a iniciar.</p>

      <h4>DECLARACIÓN DE LOS NOVIOS</h4>
      <p><strong>P:</strong> N... y N..., ¿venís libremente y con sincero corazón a contraer matrimonio?</p>
      <p><strong>N:</strong> Sí, venimos.</p>
      <p><strong>P:</strong> ¿Estáis dispuestos a amaros y respetaros mutuamente durante toda la vida?</p>
      <p><strong>N:</strong> Sí, estamos dispuestos.</p>
      <p><strong>P:</strong> ¿Estáis dispuestos a recibir con amor a los hijos que Dios os conceda y educarlos según la ley de Cristo y de su Iglesia?</p>
      <p><strong>N:</strong> Sí, estamos dispuestos.</p>

      <h4>CONSENTIMIENTO MATRIMONIAL</h4>
      <p><strong>Manera A — Con apretón de manos</strong></p>
      <p><strong>P:</strong> Para ratificar este santo matrimonio, daos la mano derecha y expresad vuestro consentimiento ante Dios y su Iglesia.</p>
      <p><strong>Novio:</strong> Yo, N..., te recibo a ti, N..., como mi esposa. Prometo serte fiel en la prosperidad y en la adversidad, en la salud y en la enfermedad, y amarte y respetarte todos los días de mi vida.</p>
      <p><strong>Novia:</strong> Yo, N..., te recibo a ti, N..., como mi esposo. Prometo serte fiel en la prosperidad y en la adversidad, en la salud y en la enfermedad, y amarte y respetarte todos los días de mi vida.</p>

      <p><strong>Manera B — En forma de preguntas</strong></p>
      <p><strong>P:</strong> N... (nombre del novio), ¿aceptas a N... (nombre de la novia) como tu esposa y prometes serle fiel en la prosperidad y en la adversidad, en la salud y en la enfermedad, y amarla y respetarla todos los días de tu vida?</p>
      <p><strong>Novio:</strong> Sí, acepto.</p>
      <p><strong>P:</strong> N... (nombre de la novia), ¿aceptas a N... (nombre del novio) como tu esposo y prometes serle fiel en la prosperidad y en la adversidad, en la salud y en la enfermedad, y amarlo y respetarlo todos los días de tu vida?</p>
      <p><strong>Novia:</strong> Sí, acepto.</p>

      <h4>ACEPTACIÓN DEL CONSENTIMIENTO</h4>
      <p><strong>Fórmula A:</strong></p>
      <p><strong>P:</strong> Que el Señor confirme la promesa que habéis hecho y derrame su bendición sobre vosotros. Lo que Dios ha unido, que no lo separe el hombre.</p>
      <p><strong>A:</strong> Amén.</p>
      <p><strong>P:</strong> Alabemos al Señor.</p>
      <p><strong>A:</strong> Demos gracias a Dios.</p>

      <p><strong>Fórmula B:</strong></p>
      <p><strong>P:</strong> Que el Dios de Abraham, de Isaac y de Jacob, que unió a los primeros hombres en el Jardín del Edén, confirme y bendiga el matrimonio que habéis celebrado ante la Iglesia en Cristo. Lo que Dios ha unido, que no lo separe el hombre.</p>
      <p><strong>A:</strong> Amén.</p>

      <h3>RITOS COMPLEMENTARIOS</h3>
      <p><em>Asamblea sentada</em></p>

      <h4>BENDICIÓN E IMPOSICIÓN DE ANILLOS</h4>
      <p><strong>Manera A</strong></p>
      <p><strong>P:</strong> Que el Señor bendiga estos anillos, que os intercambiaréis como signo de amor y fidelidad.</p>
      <p><strong>A:</strong> Amén.</p>
      <p><strong>Novio:</strong> N..., recibe este anillo como señal de mi amor y fidelidad. (si es católico:) En el nombre del Padre, del Hijo y del Espíritu Santo.</p>
      <p><strong>Novia:</strong> N..., recibe este anillo como señal de mi amor y fidelidad. (si es católica:) En el nombre del Padre, del Hijo y del Espíritu Santo.</p>

      <p><strong>Manera B</strong></p>
      <p><strong>P:</strong> Señor, bendice estos anillos. Que quienes los llevan permanezcan unidos en fidelidad; vivan en paz según tu voluntad; se amen y se respeten mutuamente. Que siempre vivan en el amor mutuo. Por Cristo, nuestro Señor.</p>
      <p><strong>A:</strong> Amén.</p>

      <h4>APERTURA DEL VELO</h4>
      <p><strong>P:</strong> Que os miréis siempre con rostro lleno de amor. Que el vínculo de amor que habéis ratificado en esta celebración sea fuente de verdadera felicidad.</p>

      <h4>ENTREGA DE LA SAGRADA ESCRITURA, CRUZ Y ROSARIO</h4>
      <p><strong>Padres:</strong> Queridos hijos, recibid la Sagrada Escritura, la Cruz y el Rosario como viático para el camino del matrimonio. Tanto en la alegría como en la tristeza, usadlos como se debe. El Señor acompañará siempre vuestros pasos. Nuestra oración os acompaña siempre.</p>
      <p><strong>Novios:</strong> Gracias.</p>

      <h4>ORACIÓN DE LOS FIELES</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Queridos hermanos y hermanas, el Señor se ha dignado perfeccionar y santificar el amor de N... y N..., por eso, recordando el don de bondad y amor especial que han recibido, presentémoslos al Señor con estas oraciones.</p>
      <p><strong>L:</strong> Para que N... y N..., recién unidos en santo matrimonio, sean siempre bendecidos con salud de alma y cuerpo. Roguemos al Señor.</p>
      <p><strong>A:</strong> Señor, escúchanos.</p>
      <p><strong>L:</strong> Para que el Señor, que bendijo las bodas de Caná con su presencia, guarde siempre a esta pareja para que sea fiel a su promesa. Roguemos al Señor.</p>
      <p><strong>A:</strong> Señor, escúchanos.</p>
      <p><strong>L:</strong> Para que su amor dé fruto y sea perfecto; que puedan apoyarse mutuamente en paz y ayudarse, y como cristianos, sean testigos del Evangelio. Roguemos al Señor.</p>
      <p><strong>A:</strong> Señor, escúchanos.</p>
      <p><strong>P:</strong> Señor, envía tu Espíritu de amor sobre esta feliz pareja, para que sean un solo corazón y una sola alma. No permitas que nada perturbe su felicidad, porque Tú los has bendecido. No permitas que se separen, porque Tú los has unido. Por Cristo, nuestro Señor.</p>
      <p><strong>A:</strong> Amén.</p>

      <h3>LITURGIA EUCARÍSTICA</h3>

      <h4>PROCESIÓN DE OFRENDAS</h4>
      <p><em>Asamblea sentada</em></p>
      <p>Los novios llevan el pan y el vino, acompañados por otros oferentes.</p>

      <h4>ORACIÓN SOBRE LAS OFRENDAS</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Orad, hermanos, para que este sacrificio sea agradable a Dios Padre todopoderoso.</p>
      <p><strong>A:</strong> El Señor reciba de tus manos este sacrificio para alabanza y gloria de su nombre, para nuestro bien y el de toda su santa Iglesia.</p>
      <p><strong>P:</strong> Señor, acepta el sacrificio que ofrecemos por esta santa alianza matrimonial. Tú hiciste posible su realización; que Tú también guíes sabiamente su desarrollo. Por Cristo, nuestro Señor.</p>

      <h4>PLEGARIA EUCARÍSTICA</h4>
      <p><em>Asamblea de rodillas/de pie</em></p>

      <p><strong>Preface del Matrimonio</strong></p>
      <p><strong>P:</strong> En verdad es justo y necesario, es nuestro deber y salvación darte gracias siempre y en todo lugar, Señor, Padre santo, Dios todopoderoso y eterno: Tú has tejido la alianza matrimonial con lazo de concordia y vínculo indisoluble, para que la fecundidad santa de las parejas aumente el número de tus hijos adoptivos. Por eso, con los ángeles y todos los santos, cantamos el himno de tu gloria:</p>
      <p><strong>A:</strong> Santo, Santo, Santo, Señor Dios del universo...</p>

      <h4>BENDICIÓN NUPCIAL</h4>
      <p><em>Asamblea de pie, novios de rodillas</em></p>
      <p><strong>P:</strong> Queridos hermanos y hermanas, oremos humildemente para que el Señor derrame su bendición sobre estos siervos suyos que se han unido en Cristo.</p>
      <p><em>Silencio</em></p>
      <p><strong>P:</strong> Dios nuestro, con tu poder has creado todas las cosas de la nada. Después de establecer el universo y crear al hombre a tu imagen, le diste una mujer como ayuda inseparable. Ya no son dos, sino una sola carne, y enseñaste que lo que has unido nunca debe ser separado.</p>
      <p>Dios, has santificado la unión matrimonial con misterio tan excelso, que en la alianza conyugal prefiguras el sacramento de la unión de Cristo con su Iglesia.</p>
      <p>Dios, mira con bondad a estos siervos tuyos que, al contraer matrimonio, esperan tu bendición y protección. Derrama sobre ellos el don del Espíritu Santo, para que sean fieles en el vínculo conyugal por el amor que has infundido en sus corazones.</p>
      <p>Llena el corazón de N..., la esposa, con la gracia del amor y la paz. Que siga el ejemplo de las mujeres santas alabadas en la Escritura. Que el corazón de su esposo descanse en ella y sea aceptada como compañera digna. Que lo acompañe con respeto y lo ame siempre, con el amor de Cristo que ama a su Iglesia.</p>
      <p>Te rogamos, Señor, que estos siervos tuyos permanezcan en la fe y en el cumplimiento de tu ley. Que unidos como esposos sean estimados por la perfección de su vida. Que, fortalecidos por el Evangelio, sean buenos testigos de Cristo ante todos. [Que tengan hijos, sean padres ejemplares y vean a sus nietos.] Finalmente, que lleguen a la vejez y entren en la vida de los santos en el reino de los cielos. Por Cristo, nuestro Señor.</p>
      <p><strong>A:</strong> Amén.</p>

      <h4>SEÑAL DE PAZ</h4>
      <p><em>Asamblea y novios de pie</em></p>
      <p><strong>P:</strong> La paz del Señor esté siempre con vosotros.</p>
      <p><strong>A:</strong> Y con tu espíritu.</p>

      <h4>COMUNIÓN</h4>
      <p><strong>Antífona de Comunión A</strong> — Efesios 5:25-27</p>
      <p><em>Cristo amó a la Iglesia y se entregó a sí mismo por ella, y la purificó para hacerla santa.</em></p>

      <p><strong>Antífona de Comunión B</strong> — Juan 13:34</p>
      <p><em>Un mandamiento nuevo os doy: que os améis los unos a los otros como yo os he amado, dice el Señor.</em></p>

      <p><strong>Antífona de Comunión C</strong> — Salmo 34:2,9</p>
      <p><em>Bendeciré al Señor en todo tiempo, su alabanza estará siempre en mi boca. Gustad y ved qué bueno es el Señor; dichoso el que se refugia en él.</em></p>

      <h4>ORACIÓN DESPUÉS DE LA COMUNIÓN</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Oremos. Señor, hemos participado en la mesa de tu banquete. Te rogamos que quienes han sido unidos por el sacramento del matrimonio permanezcan siempre unidos a ti y anuncien tu nombre a todos. Por Cristo, nuestro Señor.</p>
      <p><strong>A:</strong> Amén.</p>

      <h3>RITO DE CONCLUSIÓN</h3>

      <h4>BENDICIÓN SOLEMNE</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Hermanos, terminemos esta celebración pidiendo la bendición del Señor.</p>
      <p><em>Silencio</em></p>
      <p><strong>P:</strong> Que Dios Padre eterno os conserve en el amor y la concordia, para que la paz de Cristo more siempre en vosotros y en vuestro hogar.</p>
      <p><strong>A:</strong> Amén.</p>
      <p><strong>P:</strong> Que seáis bendecidos con descendencia, recibáis consuelo de amigos y conocidos, y viváis en paz con todos.</p>
      <p><strong>A:</strong> Amén.</p>
      <p><strong>P:</strong> Que seáis testigos del amor de Dios en el mundo, generosos con los que sufren y necesitan, para que ellos os reciban con gratitud en la morada eterna de Dios.</p>
      <p><strong>A:</strong> Amén.</p>
      <p><strong>P:</strong> Y que todos vosotros, aquí presentes, seáis bendecidos por Dios todopoderoso: † Padre, Hijo y Espíritu Santo.</p>
      <p><strong>A:</strong> Amén.</p>

      <h4>DESPEDIDA</h4>
      <p><em>Asamblea de pie</em></p>
      <p><strong>P:</strong> Queridos hermanos, la Eucaristía y el Matrimonio de N... y N... han concluido.</p>
      <p><strong>A:</strong> Demos gracias a Dios.</p>
      <p><strong>P:</strong> Id en paz y dad testimonio del amor de Dios.</p>
      <p><strong>A:</strong> Amén.</p>

      <h4>ORACIÓN A LA VIRGEN MARÍA O A LA SAGRADA FAMILIA</h4>

      <p><strong>Manera A: Oración a la Virgen María</strong></p>
      <p><strong>Novio:</strong> Santa María, Madre de Jesús y Madre nuestra amada, hoy es un día muy feliz para nosotros. Hemos prometido fidelidad mutua y queremos recorrer juntos el camino de la vida como esposos. En este momento tan significativo, te pedimos también tu bendición, Madre nuestra.</p>
      <p><strong>Novia:</strong> Santa María, intercede por nosotros para que nuestro amor sea fuerte en las alegrías y dificultades del matrimonio. Que podamos formar un hogar próspero y una familia feliz. Buena Madre, intercede por nosotros ante tu Hijo, nuestro Señor Jesucristo.</p>
      <p><strong>Ambos:</strong> Dios te salve, María, llena eres de gracia...</p>

      <p><strong>Manera B: Oración a la Sagrada Familia de Nazaret</strong></p>
      <p><strong>Ambos:</strong> San José y Santa María, vosotros sois la pareja fiel que se amó mutuamente. Por vuestro valor y entrega nació en el mundo vuestro Hijo, Jesucristo, nuestro Señor. Con Jesús, vuestra santa familia de Nazaret la hemos conocido y es modelo para nuestro hogar.</p>
      <p>Jesús, María y José, acompañadnos siempre a nosotros, que acabamos de confirmar nuestro amor en el matrimonio. Iluminadnos con el ejemplo de vuestra santa familia y guiadnos por el camino de la paz. Que Dios Padre nos haga una familia santa. Alabado seas, Jesús, luz gloriosa de Dios Padre. Alabada seas, María, Madre y Virgen pura. Alabado seas, José, padre adoptivo fiel. Alabado sea el nombre de Jesús, María y José, por siempre. Amén.</p>

      <h4>FIRMA DEL ACTA MATRIMONIAL</h4>
      <p>Los novios, los testigos y el sacerdote firman el acta matrimonial en una mesa preparada ante la asamblea, no sobre el altar.</p>

      <h4>PROCESIÓN DE SALIDA</h4>
      <p><em>Asamblea de pie</em></p>
      <p>El sacerdote y los ministros veneran el altar y salen hacia la sacristía. Los novios y su familia salen de la iglesia, acompañados por cánticos.</p>

      <p class="small-note">— La Santa Misa se ofrece en español —</p>
    `
  };

  // ===== DOM REFS =====
  const langBtns = document.querySelectorAll('.lang-btn');
  const openPaduanBtn = document.getElementById('openPaduanBtn');
  const modal = document.getElementById('paduanModal');
  const closeModalBtn = document.getElementById('closePaduanModal');
  const modalBody = document.getElementById('paduanModalBody');
  const modalLangId = document.getElementById('modalLangId');
  const modalLangEs = document.getElementById('modalLangEs');
  const modalTitle = document.getElementById('modalTitle');
  const rsvpLink1 = document.getElementById('rsvpLink1');
  const rsvpLink2 = document.getElementById('rsvpLink2');

  // ===== KONFIGURASI NOMOR WHATSAPP =====
  // Ganti dengan nomor WhatsApp yang dituju (gunakan kode negara, tanpa tanda +)
  const WA_NUMBER_1 = '13168696987';  // Nomor Frankie
  const WA_NUMBER_2 = '6281353011386';  // Nomor Secil

  // ===== FUNGSI SET BAHASA UNDANGAN =====
  function setInvitationLanguage(lang) {
    const data = langData[lang];
    if (!data) return;
    document.getElementById('heroTitle').textContent = data.heroTitle;
    document.getElementById('heroSub').textContent = data.heroSub;
    document.getElementById('quoteText').textContent = data.quoteText;
    document.getElementById('locLabel').innerHTML = '<i class="fas fa-map-pin" style="margin-right:4px;"></i> ' + data.locLabel;
    document.getElementById('locValue').textContent = data.locValue;
    document.getElementById('locSub').innerHTML = '<i class="fas fa-map-marker-alt" style="margin-right:4px;color:#9f8978;"></i> ' + data.locSub;
    document.getElementById('dateLabel').innerHTML = '<i class="far fa-clock" style="margin-right:4px;"></i> ' + data.dateLabel;
    document.getElementById('dateValue').innerHTML = '<span class="date-highlight">' + data.dateValue + '</span><span style="display:block;font-size:1.2rem;font-weight:600;margin-top:2px;"><i class="far fa-clock" style="font-weight:300;margin-right:8px;color:#7d6856;"></i> <span id="timeText">' + data.timeText + '</span></span>';
    document.getElementById('mapLabelText').textContent = data.mapLabel;
    document.getElementById('rsvpText1').textContent = data.rsvpText1;
    document.getElementById('rsvpText2').textContent = data.rsvpText2;
    document.getElementById('footerText').textContent = data.footerText;
    document.getElementById('footerChurch').textContent = data.footerChurch;
    document.getElementById('paduanBtnLabel').textContent = data.paduanBtnLabel;

    // Update WhatsApp links dengan pesan sesuai bahasa
    const message = data.waMessage;
    rsvpLink1.href = `https://wa.me/${WA_NUMBER_1}?text=${encodeURIComponent(message)}`;
    rsvpLink2.href = `https://wa.me/${WA_NUMBER_2}?text=${encodeURIComponent(message)}`;

    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // ===== FUNGSI SET PADUAN DI MODAL =====
  function setModalPaduan(lang) {
    let content = '';
    let title = '';
    if (lang === 'id') {
      content = paduanData.id;
      title = '📖 Tata Perayaan Perkawinan dalam Misa (Lengkap)';
    } else if (lang === 'es') {
      content = paduanData.es;
      title = '📖 Guía de la Celebración del Matrimonio (Completa)';
    }
    modalBody.innerHTML = content;
    modalTitle.textContent = title;
    document.querySelectorAll('.lang-picker button').forEach(b => {
      b.classList.toggle('active', b.dataset.modalLang === lang);
    });
  }

  // ===== EVENT: Buka Modal =====
  openPaduanBtn.addEventListener('click', function() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setModalPaduan('id');
    document.querySelectorAll('.lang-picker button').forEach(b => {
      b.classList.toggle('active', b.dataset.modalLang === 'id');
    });
  });

  // ===== EVENT: Tutup Modal =====
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // ===== EVENT: Pilihan Bahasa di Modal =====
  modalLangId.addEventListener('click', function() {
    setModalPaduan('id');
  });
  modalLangEs.addEventListener('click', function() {
    setModalPaduan('es');
  });

  // ===== EVENT: Language Toggle Undangan =====
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      setInvitationLanguage(lang);
    });
  });

  // ===== INISIALISASI =====
  setInvitationLanguage('id');
  setModalPaduan('id');
})();