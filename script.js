const doctors = [
    {
      name: 'Dokter Shioriko Mifune',
      specialization: 'Spesialis penyemangat disaat rasa sendiri',
      schedule: 'Senin - Kamis',
      price: 'Rp 1.000.000',
      imgSrc: 'https://i.idol.st/u/card/icon/482SR-Mifune-Shioriko-%E8%89%B2%E3%81%8C%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%84%E3%81%8F%E3%82%93%E3%81%A7%E3%81%99-Just-Believe-wummIG.png'
    },
    {
      name: 'Dokter Riko Sakurauchi',
      specialization: 'Spesialis untuk yang menjadi korban NTR',
      schedule: 'Senin - Jumat',
      price: 'Rp 800.000',
      imgSrc: 'https://i.idol.st/u/card/icon/749SR-Sakurauchi-Riko-%E6%82%A9%E3%82%93%E3%81%A7%E3%82%8B%E6%83%B3%E3%81%84%E3%82%92%E3%81%9D%E3%81%AE%E3%81%BE%E3%81%BE%E6%AD%8C%E3%81%AB-Mirai-no-Bokura-wa-Shitteru-yo-QDpXuA.png'
    },
    {
      name: 'Dokter Honoka Kousaka',
      specialization: 'Spesialis penyemangat disaat banyak tekanan',
      schedule: 'Sabtu - Minggu',
      price: 'Rp 1.500.000',
      imgSrc: 'https://i.idol.st/u/card/icon/698UR-Kousaka-Honoka-%E7%A7%81-%E3%81%8A%E5%8C%BB%E8%80%85%E3%81%95%E3%82%93%E3%81%A0%E3%81%8B%E3%82%89-The-Miracle-Specialist-04cmdt.png'
    },
    {
      name: 'Dokter Umi Sonoda',
      specialization: 'Spesialis menahan rasa sakit hati',
      schedule: 'Kamis - Minggu',
      price: 'Rp 500.000',
      imgSrc: 'https://i.idol.st/u/card/icon/887SR-Sonoda-Umi-%E3%81%95%E3%81%82-%E5%8F%AC%E3%81%97%E4%B8%8A%E3%81%8C%E3%81%A3%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84-HEART-to-HEART-gpl9TI.png'
    }
  ];
  
  const cardsContainer = document.querySelector(".cards");

  for (let i = 0; i < doctors.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    
    const profile = document.createElement("div");
    profile.className = "profile";
    
    const img = document.createElement("img");
    img.src = doctors[i].imgSrc;
    
    const name = document.createElement("p");
    name.textContent = doctors[i].name;
    
    const specialty = document.createElement("p");
    specialty.textContent = doctors[i].specialization;
    
    const schedule = document.createElement("span");
    schedule.textContent = doctors[i].schedule;
    
    const price = document.createElement("span");
    price.textContent = doctors[i].price;
    
    const btn = document.createElement("p");
    btn.textContent = "Daftar sekarang";
    
    profile.appendChild(img);
    profile.appendChild(name);
    profile.appendChild(specialty);
    profile.appendChild(schedule);
    profile.appendChild(price);
    profile.appendChild(btn);
    
    card.appendChild(profile);
    console.log(card.appendChild(profile))
    cardsContainer.appendChild(card);
}