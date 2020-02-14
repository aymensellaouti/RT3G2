// let a = document.querySelector('a');
//
// alert(a.href);
//
// const newLink = prompt('veuillez donner la page de votre cv : ');
//
// a.href = newLink;
ol = document.querySelector("#listeVilles");
listeVilles = '';
villes = ['Tunis', 'Djerba', 'Kairouan', 'Sfax'];

// setTimeout(
//     () => {
//         villes.forEach(
//              (ville) => {
//                 listeVilles += `<li>${ville}</li>`
//             })
//         ol.innerHTML = listeVilles;
//     }, 2500
// );
i = 0;
indiceInterval = setInterval(
    () => {
      listeVilles += `<li>${villes[i++]}</li>`;
      ol.innerHTML = listeVilles;
      if(i === villes.length) {clearInterval(indiceInterval)}
    }, 1500
);
