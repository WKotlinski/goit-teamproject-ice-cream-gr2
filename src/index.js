import './css/main.css';
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='buy-now']"),
    closeModalBtn: document.querySelector("[data-modal-close='buy-now']"),
    modal: document.querySelector("[data-modal='buy-now']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='icecream']"),
    closeModalBtn: document.querySelector("[data-modal-close='icecream']"),
    modal: document.querySelector("[data-modal='icecream']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='milkshakes']"),
    closeModalBtn: document.querySelector("[data-modal-close='milkshakes']"),
    modal: document.querySelector("[data-modal='milkshakes']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='ice-coffe']"),
    closeModalBtn: document.querySelector("[data-modal-close='ice-coffe']"),
    modal: document.querySelector("[data-modal='ice-coffe']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='read-more']"),
    closeModalBtn: document.querySelector("[data-modal-close='read-more']"),
    modal: document.querySelector("[data-modal='read-more']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='our-locations']"),
    closeModalBtn: document.querySelector("[data-modal-close='our-locations']"),
    modal: document.querySelector("[data-modal='our-locations']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open='francise']"),
    closeModalBtn: document.querySelector("[data-modal-close='francise']"),
    modal: document.querySelector("[data-modal='francise']"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
