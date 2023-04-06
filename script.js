const psikologOpt = document.querySelector("select#psikologId");
const tbody = document.querySelector("table tbody");
const form = document.querySelector("form#form");

const namaPasien = document.querySelector("#namaPasien");
const usia = document.querySelector("#usia");
const hari = document.querySelector("#hari");
const sesi = document.querySelector("#sesi");
const keluhan = document.querySelector("#keluhan");
const psikologId = document.querySelector("#psikologId");

namaPasien.onchange = function () {
  const messageError = document.querySelector("small#namaPasienError");
  
  if (namaPasien.nextElementSibling === messageError) {
    namaPasien.nextElementSibling.remove();
  }
}

usia.onchange = function () {
  const messageError = document.querySelector("small#usiaError");

  if (usia.nextElementSibling === messageError) {
    usia.nextElementSibling.remove();
  }
}

hari.onchange = function () {
  const messageError = document.querySelector("small#hariError");

  if (hari.nextElementSibling === messageError) {
    hari.nextElementSibling.remove();
  }
}

sesi.onchange = function () {
  const messageError = document.querySelector("small#sesiError");

  if (sesi.nextElementSibling === messageError) {
    sesi.nextElementSibling.remove();
  }
}

keluhan.onchange = function () {
  const messageError = document.querySelector("small#keluhanError");

  if (keluhan.nextElementSibling === messageError) {
    keluhan.nextElementSibling.remove();
  }
}

psikologId.onchange = function () {
  const messageError = document.querySelector("small#psikologIdError");

  if (psikologId.nextElementSibling === messageError) {
    psikologId.nextElementSibling.remove();
  }
}

dataPemesanan.push(new Pemesanan(1, "Alvin", 23, "Senin", "Pagi", "Sering Cape", 7));
dataPemesanan.push(new Pemesanan(2, "Rizki", 23, "Senin", "Pagi", "Coba keluhan", 2));
dataPemesanan.push(new Pemesanan(3, "Ferdy", 23, "Senin", "Pagi", "Coba keluhan", 3));
dataPemesanan.push(new Pemesanan(4, "Agha", 23, "Senin", "Pagi", "Coba keluhan", 4));
dataPemesanan.push(new Pemesanan(5, "Agha", 23, "Senin", "Pagi", "Coba keluhan", 5));

tbody.innerHTML = generateOrder();

function generateOrder() {
  let str = "";

  dataPemesanan.forEach(({ id, namaPasien, usia, hari, sesi, keluhan, psikologId }, i) => {
    str += `<tr>
            <td>${i + 1}</td>
            <td>${namaPasien}</td>
            <td>${usia}</td>
            <td>${hari}</td>
            <td>${sesi}</td>
            <td>${keluhan}</td>
            <td>${psikologArray.find(({ id }) => id === psikologId).name}</td>
            <td>
              <button id="edit" data-id="${id}">Edit</button>
              <button id="delete" data-id="${id}">Delete</button>
            </td>
          </tr>`
  });

  return str;
}


psikologArray.forEach(psikolog => {
  const option = document.createElement("option");
  const text = document.createTextNode(psikolog.name);

  option.value = psikolog.id;
  option.append(text);

  psikologOpt.append(option);
})

function validasiError() {
  let condition = false;
  
  if (!namaPasien.value) {
    const small = document.createElement("small");
    small.style = "color: red;";
    small.innerHTML = "nama tidak boleh kosong";
    small.id = "namaPasienError"
    namaPasien.after(small);
    condition = true;
  }
  
  if (!usia.value) {
    const small = document.createElement("small");
    small.style = "color: red;";
    small.innerHTML = "usia tidak boleh kosong";
    small.id = "usiaError";
    usia.after(small);
    condition = true;
  }

  if (!hari.value) {
    const small = document.createElement("small");
    small.style = "color: red;";
    small.innerHTML = "hari tidak boleh kosong";
    small.id = "hariError";
    hari.after(small);
    condition = true;
  }

  if (!sesi.value) {
    const small = document.createElement("small");
    small.style = "color: red;";
    small.innerHTML = "sesi tidak boleh kosong";
    small.id = "sesiError";
    sesi.after(small);
    condition = true;
  }

  if (!keluhan.value) {
    const small = document.createElement("small");
    small.style = "color: red;";
    small.innerHTML = "keluhan tidak boleh kosong";
    small.id = "keluhanError";
    keluhan.after(small);
    condition = true;
  }

  if (!psikologId.value) {
    const small = document.createElement("small");
    small.style = "color: red;";
    small.innerHTML = "psikolog tidak boleh kosong";
    small.id = "psikologIdError";
    psikologId.after(small);
    condition = true;
  }

  return condition;
}

function resetInput() {
  namaPasien.value = "";
  usia.value = "";
  hari.value = "";
  sesi.value = "";
  keluhan.value = "";
  psikologId.value = "";
}

form.onsubmit = function (event) {
  event.preventDefault();
  if (event.target.classList.contains("tambah-pemesanan")) {
    if (validasiError()) {
      return;
    }
    
    create({
      namaPasien: namaPasien.value,
      usia: parseInt(usia.value),
      hari: hari.value,
      sesi: sesi.value,
      keluhan: keluhan.value,
      psikologId: parseInt(psikologId.value)
    });

    tbody.innerHTML = generateOrder();

    resetInput();
  } else if (event.target.classList.contains("edit-pemesanan")) {
    if (validasiError()) {
      return;
    }
    
    const id = document.querySelector("#id");

    edit({
      id: parseInt(id.value),
      namaPasien: namaPasien.value,
      usia: parseInt(usia.value),
      hari: hari.value,
      sesi: sesi.value,
      keluhan: keluhan.value,
      psikologId: parseInt(psikologId.value)
    });

    tbody.innerHTML = generateOrder();
    
    resetInput();

    form.classList.replace("edit-pemesanan", "tambah-pemesanan");
  }
}

tbody.onclick = function (event) {
  if (event.target.id === "edit") {
    document.querySelector("form#form").classList.replace("tambah-pemesanan", "edit-pemesanan");

    const pesanan = dataPemesanan.find(({ id }) => id === parseInt(event.target.dataset.id));
    namaPasien.value = pesanan.namaPasien;
    usia.value = parseInt(pesanan.usia);
    hari.value = pesanan.hari;
    sesi.value = pesanan.sesi;
    keluhan.value = pesanan.keluhan;
    psikologId.value = parseInt(pesanan.psikologId);

    const input = document.createElement("input");
    input.type = "hidden";
    input.value = pesanan.id;
    input.name = "id";
    input.id = "id";
    namaPasien.previousElementSibling.before(input);
  } else if (event.target.id === "delete") {
    const data = dataPemesanan.find(pemesanan => pemesanan.id === parseInt(event.target.dataset.id));
    const index = dataPemesanan.indexOf(data);

    dataPemesanan.splice(index, 1);
    tbody.innerHTML = generateOrder();
  }
}

form.onreset = function () {
  form.classList.replace("edit-pemesanan", "tambah-pemesanan");
}