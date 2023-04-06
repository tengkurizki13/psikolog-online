const dataPemesanan = [];

function create(pemesanan) {
  const id = dataPemesanan.length === 0 ? dataPemesanan.length + 1 : dataPemesanan[dataPemesanan.length - 1].id + 1;
  
  dataPemesanan.push(new Pemesanan(id, ...Object.values(pemesanan)));
}

function edit(pemesanan) {
  const data = dataPemesanan.find(pesanan => pesanan.id === pemesanan.id);
  const index = dataPemesanan.indexOf(data);

  dataPemesanan.splice(index, 1, new Pemesanan(...Object.values(pemesanan)));
}
