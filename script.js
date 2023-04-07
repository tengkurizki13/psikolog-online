for (let i = 0; i < psikologArray.length; i++) {
  cardsContainer.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="${psikologArray[i].imgSrc}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${psikologArray[i].name}</h5>
                                  <p class="card-text">${psikologArray[i].description}</p>
                                  <button
                                  type="button"
                                  class="btn btn-primary psikolog"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  data-id="${psikologArray[i].id}"
                                >
                                  Pilih Psikolog
                                </button>
                                </div>
                                </div>`;
}

cardsContainer.onclick = function (event) {
  if (event.target.classList.contains("psikolog")) {
    const psikologNameInput = document.querySelector("input#name");
    const psikologIdInput = document.querySelector("input#psikologId");
    const psikolog = psikologArray.find(({id}) => id === parseInt(event.target.dataset.id));

    psikologNameInput.value = psikolog.name;
    psikologIdInput.value = psikolog.id;
  }
}

namaPasien.onchange = function () {
  const messageError = document.querySelector("#namaPasienError");
  
  if (namaPasien.nextElementSibling === messageError && messageError !== null) {
    namaPasien.nextElementSibling.remove();
    namaPasien.classList.remove("is-invalid");
  }
}

usia.onchange = function () {
  const messageError = document.querySelector("#usiaError");

  if (usia.nextElementSibling === messageError) {
    usia.nextElementSibling.remove();
    usia.classList.remove("is-invalid");
  }
}

hari.onchange = function () {
  const messageError = document.querySelector("#hariError");

  if (hari.nextElementSibling === messageError) {
    hari.nextElementSibling.remove();
    hari.classList.remove("is-invalid");
  }
}

sesi.onchange = function () {
  const messageError = document.querySelector("#sesiError");

  if (sesi.nextElementSibling === messageError) {
    sesi.nextElementSibling.remove();
    sesi.classList.remove("is-invalid");
  }
}

keluhan.onchange = function () {
  const messageError = document.querySelector("#keluhanError");

  if (keluhan.nextElementSibling === messageError) {
    keluhan.nextElementSibling.remove();
    keluhan.classList.remove("is-invalid");
  }
}

psikologId.onchange = function () {
  const messageError = document.querySelector("#psikologIdError");

  if (psikologId.nextElementSibling === messageError) {
    psikologId.nextElementSibling.remove();
    psikologId.classList.remove("is-invalid");
  }
}

closeModal.onclick = function () {
  const invalidFeedbacks = document.querySelectorAll(".invalid-feedback");

  invalidFeedbacks.forEach(el => {
    el.remove();
  })

  namaPasien.classList.remove("is-invalid");
  usia.classList.remove("is-invalid");
  hari.classList.remove("is-invalid");
  sesi.classList.remove("is-invalid");
  keluhan.classList.remove("is-invalid");
}

tbody.innerHTML = generateOrder();

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
    const psikologInput = document.querySelector("input#name");
    const psikolog = psikologArray.find(({id}) => id === pesanan.psikologId);
    psikologInput.value = psikolog.name;

    const input = document.createElement("input");
    input.type = "hidden";
    input.value = pesanan.id;
    input.name = "id";
    input.id = "id";
    namaPasien.after(input);
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