export default function initAnimacaoScroll() {
  const section = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {
    section.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      }
    });
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}
