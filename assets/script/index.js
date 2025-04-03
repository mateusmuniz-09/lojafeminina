const cards = document.querySelectorAll(".product-card, .bag-card");
const modal = document.querySelector(".modal");
const overlayModal = document.querySelector(".overlay-modal");
const fecharModal = document.querySelector(".fecharModal");

/* --------fechar modal----- */
overlayModal.addEventListener("click", function () {
  modal.classList.remove("visivel");
  overlayModal.classList.remove("ativo");
});
fecharModal.addEventListener("click", function () {
  modal.classList.remove("visivel");
  overlayModal.classList.remove("ativo");
});

cards.forEach((card) =>
  card.addEventListener("click", function (event) {
    const cardParent = event.target.closest(".product-button");
    if (cardParent) {
      modal.classList.add("visivel");
      overlayModal.classList.add("ativo");
      const cardTitlle = card.querySelector(".product-title").textContent;
      const cardPrice = card.querySelector(".product-price").textContent;
      const cardImage = card.querySelector("img").src;
      atualizarModal(cardTitlle, cardPrice, cardImage);
    }
  })
);

function atualizarModal(cardTitlle, cardPrice, cardImage) {
  const modelPrice = document.querySelector(".modal-price");
  const modelTitle = document.querySelector(".modal-title");
  const modelImg = document.querySelector(".modal-img");
  console.log(modelPrice);

  modelTitle.textContent = cardTitlle;
  modelPrice.textContent = cardPrice;
  modelImg.src = cardImage;
}
