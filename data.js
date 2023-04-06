const psikologArray = [
  {
    id: 1,
    name: "Dr. Maya",
    specialization: "Psikologi Klinis",
    description: "Dr. Maya adalah seorang psikolog klinis dengan pengalaman lebih dari 10 tahun dalam membantu pasien mengatasi masalah kesehatan mental."
  },
  {
    id: 2,
    name: "Dr. Rian",
    specialization: "Psikologi Pendidikan",
    description: "Dr. Rian adalah seorang ahli psikologi pendidikan yang telah berkontribusi dalam pengembangan kurikulum pendidikan di beberapa universitas ternama."
  },
  {
    id: 3,
    name: "Dr. Dina",
    specialization: "Psikologi Organisasi",
    description: "Dr. Dina adalah seorang pakar psikologi organisasi yang terkenal dengan pendekatannya yang inovatif dan efektif dalam meningkatkan kinerja tim."
  },
  {
    id: 4,
    name: "Dr. Budi",
    specialization: "Psikologi Forensik",
    description: "Dr. Budi adalah seorang ahli psikologi forensik yang telah banyak membantu dalam penyelidikan dan penyelesaian kasus-kasus kriminal."
  },
  {
    id: 5,
    name: "Dr. Wati",
    specialization: "Psikologi Perkembangan",
    description: "Dr. Wati adalah seorang ahli psikologi perkembangan anak dan remaja yang telah berkontribusi dalam pengembangan program pendidikan anak dan remaja yang efektif."
  },
  {
    id: 6,
    name: "Dr. Rina",
    specialization: "Psikologi Sosial",
    description: "Dr. Rina adalah seorang pakar psikologi sosial yang telah banyak membantu dalam menangani masalah sosial dan memperbaiki hubungan antar individu dan kelompok."
  },
  {
    id: 7,
    name: "Dr. Ika",
    specialization: "Psikologi Konseling",
    description: "Dr. Ika adalah seorang ahli psikologi konseling yang terkenal dengan kemampuannya dalam membantu pasien meraih kebahagiaan dan keseimbangan emosional."
  }
];

const Pemesanan = function (id, namaPasien, usia, hari, sesi, keluhan, psikologId) {
  this.id = id;
  this.namaPasien = namaPasien;
  this.usia = usia;
  this.hari = hari;
  this.sesi = sesi;
  this.keluhan = keluhan;
  this.psikologId = psikologId;
}

