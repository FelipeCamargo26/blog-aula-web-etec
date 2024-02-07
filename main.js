function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  //Neste const estou selecionando todos as tegs as que começam que te m o href começando com # dentro da classe .js-menu.

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const sectionScroll = document.querySelector(href);

    sectionScroll.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //##Metodo complexo##

    // const topoSection = section.offsetTop
    // window.scrollTo({
    //   top: topoSection,
    //   behavior: "smooth",
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
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
initAnimacaoScroll();
