export default function initModal() {
  const btnfechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (btnfechar && containerModal) {
    function toggleModal() {
      containerModal.classList.toggle('ativo');
    }

    setTimeout(toggleModal, 1000);
    btnfechar.addEventListener('click', toggleModal);

    function cliqueForaModal(e) {
      if (e.target === this) {
        toggleModal(e);
      }
    }

    containerModal.addEventListener('click', cliqueForaModal);
  }
}
