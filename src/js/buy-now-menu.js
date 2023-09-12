(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='8']"),
    closeModalBtn: document.querySelector("[data-modal-close='8']"),
    modal: document.querySelector("[data-modal='8']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
