const LinkButton = function() {
  pagechange('working-btn', 'working');
  pagechange('not-working-btn', 'not-working');
  pagechange('hirotaka-btn', 'hirotaka');

  function pagechange(Ele, EleId) {
    const Element = document.getElementsByClassName(Ele);

    for (let i = 0; i <Element.length; i++) {
      Element[i].onclick = function() {
        const ElementId = document.getElementById(EleId);
        ElementId.scrollIntoView(true);
      }
    }
  }
}
LinkButton();


const scrollAnime = function () {
  const ClassTop = document.getElementsByClassName('js-control');
  ClassTop[0].classList.add('is-active');
  document.getElementById('main').addEventListener("scroll", function () {
    for(let a = 0; a < ClassTop.length; a++) {
      const EleTop = ClassTop[a].getBoundingClientRect().top;
      console.log(EleTop)
      if(EleTop == 0) {
        ClassTop[a].classList.add('is-active');
      }else{
        ClassTop[a].classList.remove('is-active');
      }
    }
  });
}
scrollAnime();
