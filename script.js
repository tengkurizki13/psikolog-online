

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
                                  data-id="${psikologArray[i].id}"
                                >
                                  Pilih Psikolog
                                </button>
                                </div>
                                </div>`;
}
