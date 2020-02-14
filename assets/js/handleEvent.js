let element = document.querySelector("#rt3");
colors = [
    'red', 'green', 'blue', 'yellow', 'pink', 'purple', 'magenta'
];

function getRandomColor(tableau) {
   const index = Math.floor(Math.random() * (tableau.length + 1));
   return tableau[index];
}
function colorLi(e) {
   e.target.style.color = getRandomColor(colors);
}
let ol = document.querySelector('ol');
const colorer = document.querySelector('#colorer');
colorer.addEventListener('change', () => {
   if (colorer.checked) {
      ol.addEventListener('click', colorLi);
   } else {
      console.log('remove');
      ol.removeEventListener('click',colorLi);
   }
});

element.addEventListener('click', (e) => {
   element.style.color = 'red';
   console.log(e);
});
