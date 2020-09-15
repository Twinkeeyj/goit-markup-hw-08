(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-openl]"),
    closeModalBtn: document.querySelector("[data-modal-closel]"),
    modal: document.querySelector("[data-modall]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
