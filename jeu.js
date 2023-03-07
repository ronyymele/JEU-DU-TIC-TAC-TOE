const blocks = [...document.getElementsByClassName("block")]; 
let joueur = document.getElementById("joueur");

// Creation de l'objet qui contient tout les element important de notre jeu
let etat = {
  joueurEnCours: 1,
  b1:0, b2:0, b3:0, b4:0, b5:0, b6:0, b7:0, b8:0, b9:0,
};

// j'ai initialisé toute les cases a 0
const resetetat = () => {
  joueurEnCours = 1;
  etat.b1 = 0; etat.b2 = 0; etat.b3 = 0; etat.b4 = 0; etat.b5 = 0; etat.b6 = 0; etat.b7 = 0; etat.b8 = 0; etat.b9 = 0;
};
  
//j'etablis les condition d'une victoire
const siVictoire = () => {
  if (
    (etat.b1 == etat.b2 && etat.b2 == etat.b3 && etat.b1 > 0) ||(etat.b1 == etat.b4 && etat.b4 == etat.b7 && etat.b1 > 0) ||(etat.b1 == etat.b5 && etat.b5 == etat.b9 && etat.b1 > 0) ||(etat.b3 == etat.b5 && etat.b5 == etat.b7 && etat.b7 > 0) ||(etat.b2 == etat.b5 && etat.b5 == etat.b8 && etat.b2 > 0) ||(etat.b3 == etat.b6 && etat.b6 == etat.b9 && etat.b3 > 0) ||(etat.b4 == etat.b5 && etat.b5 == etat.b6 && etat.b4 > 0) ||(etat.b7 == etat.b8 && etat.b8 == etat.b9 && etat.b7 > 0)
  ) {
    console.log("winner !");
    return true;
  } else if (
    etat.b1 !== 0 &&etat.b2 !== 0 &&etat.b3 !== 0 &&etat.b4 !== 0 &&etat.b5 !== 0 &&etat.b6 !== 0 &&etat.b7 !== 0 &&etat.b8 !== 0 &&etat.b9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const jouerBlock = (e) => {
  let idblock = e.target.id;

  
  if (etat[idblock] !== 0) return;

  etat[idblock] = etat.joueurEnCours;

  let isVctoire = siVictoire();

  if (isVctoire === true) {
    
     // cette commande indique quel est le joueur qui a gagné
    alert("FELICITATION Le gagnant est le joueur " + etat.joueurEnCours);



    resetetat();
    blocks.forEach((c) => (c.textContent = ""));
  } else if (isVctoire === null) {
    

    alert("Match null RESSAYER!");



    resetetat();
    blocks.forEach((c) => (c.textContent = ""));
  } else if (isVctoire === false) {
    
    if (etat.joueurEnCours == 1) {
      etat.joueurEnCours = 2;
      e.target.textContent = "X";
      joueur.textContent = "2";
    } else {
      etat.joueurEnCours = 1;
      e.target.textContent = "O";
      joueur.textContent = "1";
    }
  }
};

blocks.forEach((el) => {
  el.addEventListener("click", jouerBlock);
});

