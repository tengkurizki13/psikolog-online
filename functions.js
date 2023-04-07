const cardsContainer = document.querySelector(".cards");
const tbody = document.querySelector("table tbody");
const form = document.querySelector("form#form");
const closeModal = document.querySelector(".close-modal");

const namaPasien = document.querySelector("#namaPasien");
const usia = document.querySelector("#usia");
const hari = document.querySelector("#hari");
const sesi = document.querySelector("#sesi");
const keluhan = document.querySelector("#keluhan");
const psikologId = document.querySelector("#psikologId");

dataPemesanan.push(new Pemesanan(1, "Alvin", 23, "Senin", "Pagi", "Sering Cape", 7));
dataPemesanan.push(new Pemesanan(2, "Rizki", 23, "Senin", "Siang", "Coba keluhan", 2));
dataPemesanan.push(new Pemesanan(3, "Ferdy", 23, "Senin", "Siang", "Coba keluhan", 3));
dataPemesanan.push(new Pemesanan(4, "Agha", 23, "Senin", "Pagi", "Coba keluhan", 4));
dataPemesanan.push(new Pemesanan(5, "Agha", 23, "Senin", "Malam", "Coba keluhan", 5));

function create(pemesanan) {
  const id = dataPemesanan.length === 0 ? dataPemesanan.length + 1 : dataPemesanan[dataPemesanan.length - 1].id + 1;
  
  dataPemesanan.push(new Pemesanan(id, ...Object.values(pemesanan)));
}

function edit(pemesanan) {
  const data = dataPemesanan.find(pesanan => pesanan.id === pemesanan.id);
  const index = dataPemesanan.indexOf(data);

  dataPemesanan.splice(index, 1, new Pemesanan(...Object.values(pemesanan)));
}

function generateOrder() {
  let str = "";

  dataPemesanan.forEach(({ id, namaPasien, usia, hari, sesi, keluhan, psikologId }, i) => {
    str += `<tr>
            <td>${i + 1}</td>
            <td>${namaPasien}</td>
            <td>${usia}</td>
            <td>${hari}</td>
            <td>${sesi}</td>
            <td>${psikologArray.find(({ id }) => id === psikologId).name}</td>
            <td>
              <button id="edit" class="btn btn-warning" data-bs-target="#exampleModal" data-bs-toggle="modal" data-id="${id}">Edit</button>
              <button id="delete" class="btn btn-danger" data-id="${id}">Delete</button>
            </td>
          </tr>`
  });

  return str;
}

function createInvalid(element, message, id) {
  const div = document.createElement("div");
  div.classList.add("invalid-feedback");
  div.id = id;
  div.innerHTML = message;
  element.classList.add("is-invalid");
  element.after(div);
}

function validasiError() {
  let condition = false;
  
  if (!namaPasien.value) {
    createInvalid(namaPasien, "nama tidak boleh kosong", "namaPasienError");
    condition = true;
  }
  
  if (!usia.value) {
    createInvalid(usia, "usia tidak boleh kosong", "usiaError");
    condition = true;
  }

  if (!hari.value) {
    createInvalid(hari, "hari tidak boleh kosong", "hariError");
    condition = true;
  }

  if (!sesi.value) {
    createInvalid(sesi, "sesi tidak boleh kosong", "sesiError");
    condition = true;
  }

  if (!keluhan.value) {
    createInvalid(keluhan, "keluhan tidak boleh kosong", "keluhanError");
    condition = true;
  }

  if (!psikologId.value) {
    createInvalid(psikologId, "psikolog tidak boleh kosong", "psikologError");
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
}