pagechange('working-btn', 'working');
pagechange('not-working-btn', 'not-working');
pagechange('hirotaka-btn', 'hirotaka')

function pagechange(Ele, EleId) {
  const Element = document.getElementsByClassName(Ele);
  for (let i = 0; i <Element.length; i++) {
    Element[i].onclick = function() {
      const ElementId = document.getElementById(EleId);
      ElementId.scrollIntoView();
       
      ElementId.animate([{
        opacity: '0',
        paddingTop: '30%',
      },{
        opacity: '1',
        paddingTop: '0'
      }],{
        duration: 500
      });
    }
  }
}