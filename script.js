
const  CHEVROLET = document.querySelector('#CHEVROLET');


if (titre) {CHEVROLET

  titre.addEventListener('click', () => {
  
    console.log("J'ai cliqué sur le titre !");
    titre.textContent = "Titre cliqué !";
  });
}
tousLesTitresH2.forEach(titre => {
  console.log(titre.textContent);
})

