const psikologArray = [
  {
    id: 1,
    name: "Dr. Maya",
    specialization: "Psikologi Klinis",
    description:
      "Dr. Maya adalah seorang psikolog klinis dengan pengalaman lebih dari 10 tahun dalam membantu pasien mengatasi masalah kesehatan mental.",
    imgSrc:
      "drmaya.png",
  },
  {
    id: 2,
    name: "Dr. Rian",
    specialization: "Psikologi Pendidikan",
    description:
      "Dr. Rian adalah seorang ahli psikologi pendidikan yang telah berkontribusi dalam pengembangan kurikulum pendidikan di beberapa universitas ternama.",
    imgSrc:
      "drrian.png",
  },
  {
    id: 3,
    name: "Dr. Dina",
    specialization: "Psikologi Organisasi",
    description:
      "Dr. Dina adalah seorang pakar psikologi organisasi yang terkenal dengan pendekatannya yang inovatif dan efektif dalam meningkatkan kinerja tim.",
    imgSrc:
      "drdina.png",
  },
  {
    id: 4,
    name: "Dr. Budi",
    specialization: "Psikologi Forensik",
    description:
      "Dr. Budi adalah seorang ahli psikologi forensik yang telah banyak membantu dalam penyelidikan dan penyelesaian kasus-kasus kriminal.",
    imgSrc:
      "drbudi.png",
  },
  {
    id: 5,
    name: "Dr. Wati",
    specialization: "Psikologi Perkembangan",
    description:
      "Dr. Wati adalah seorang ahli psikologi perkembangan anak dan remaja yang telah berkontribusi dalam pengembangan program pendidikan anak dan remaja yang efektif.",
    imgSrc:
      "drwati.png",
  },
  {
    id: 6,
    name: "Dr. Rina",
    specialization: "Psikologi Sosial",
    description:
      "Dr. Rina adalah seorang pakar psikologi sosial yang telah banyak membantu dalam menangani masalah sosial dan memperbaiki hubungan antar individu dan kelompok.",
    imgSrc:
      "drrina.png",
  },
  {
    id: 7,
    name: "Dr. Ika",
    specialization: "Psikologi Konseling",
    description:
      "Dr. Ika adalah seorang ahli psikologi konseling yang terkenal dengan kemampuannya dalam membantu pasien meraih kebahagiaan dan keseimbangan emosional.",
    imgSrc:
      "drika.png",
  },
  {
    id: 7,
    name: "Dr. Susanti",
    specialization: "Psikologi Konseling",
    description:
      "Dr. Susanti adalah seorang ahli psikologi konseling yang terkenal dengan kemampuannya dalam membantu pasien meraih kebahagiaan dan keseimbangan emosional.",
    imgSrc:
      "drsusanti.png",
  },
];

const cardsContainer = document.querySelector(".cards");

console.log(cardsContainer);

for (let i = 0; i < psikologArray.length; i++) {
  cardsContainer.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${psikologArray[i].imgSrc}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${psikologArray[i].name}</h5>
  <p class="card-text">${psikologArray[i].description}</p>
  <button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Pilih Psikolog
</button>
</div>
</div>`;

  // const card = document.createElement("div");
  // card.className = "card";

  // const profile = document.createElement("div");
  // profile.className = "profile";

  // const img = document.createElement("img");
  // img.src = doctors[i].imgSrc;

  // const name = document.createElement("p");
  // name.textContent = doctors[i].name;

  // const specialty = document.createElement("p");
  // specialty.textContent = doctors[i].specialization;

  // const schedule = document.createElement("span");
  // schedule.textContent = doctors[i].schedule;

  // const price = document.createElement("span");
  // price.textContent = doctors[i].price;

  // const btn = document.createElement("p");
  // btn.textContent = "Daftar sekarang";

  // profile.appendChild(img);
  // profile.appendChild(name);
  // profile.appendChild(specialty);
  // profile.appendChild(schedule);
  // profile.appendChild(price);
  // profile.appendChild(btn);

  // card.appendChild(profile);
  // console.log(card.appendChild(profile));
  // cardsContainer.appendChild(card);
}
