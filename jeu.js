const blocks = [...document.getElementsByClassName("block")]; 
let joueur = document.getElementById("joueur");

// Creation de l'objet qui contient tout les element important de notre jeu
let state = {
  joueurEnCours: 1,
  b1:0, b2:0, b3:0, b4:0, b5:0, b6:0, b7:0, b8:0, b9:0,
};

// j'ai initialisé toute les cases a 0
const resetState = () => {
  joueurEnCours = 1;
  state.b1 = 0; state.b2 = 0; state.b3 = 0; state.b4 = 0; state.b5 = 0; state.b6 = 0; state.b7 = 0; state.b8 = 0; state.b9 = 0;
};
  
//j'etablis les condition d'une victoire
const verifierVictoire = () => {
  if (
    (state.b1 == state.b2 && state.b2 == state.b3 && state.b1 > 0) ||(state.b1 == state.b4 && state.b4 == state.b7 && state.b1 > 0) ||(state.b1 == state.b5 && state.b5 == state.b9 && state.b1 > 0) ||(state.b3 == state.b5 && state.b5 == state.b7 && state.b7 > 0) ||(state.b2 == state.b5 && state.b5 == state.b8 && state.b2 > 0) ||(state.b3 == state.b6 && state.b6 == state.b9 && state.b3 > 0) ||(state.b4 == state.b5 && state.b5 == state.b6 && state.b4 > 0) ||(state.b7 == state.b8 && state.b8 == state.b9 && state.b7 > 0)
  ) {
    console.log("winner !");
    return true;
  } else if (
    state.b1 !== 0 &&state.b2 !== 0 &&state.b3 !== 0 &&state.b4 !== 0 &&state.b5 !== 0 &&state.b6 !== 0 &&state.b7 !== 0 &&state.b8 !== 0 &&state.b9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const jouerBlock = (e) => {
  let idblock = e.target.id;

  
  if (state[idblock] !== 0) return;

  state[idblock] = state.joueurEnCours;

  let isVctoire = verifierVictoire();

  if (isVctoire === true) {
    

    alert("Le gagnant est le joueur " + state.joueurEnCours);



    resetState();
    blocks.forEach((c) => (c.textContent = ""));
  } else if (isVctoire === null) {
    

    alert("Match null RESSAYER!");



    resetState();
    blocks.forEach((c) => (c.textContent = ""));
  } else if (isVctoire === false) {
    
    if (state.joueurEnCours == 1) {
      state.joueurEnCours = 2;
      e.target.textContent = "X";
      joueur.textContent = "2";
    } else {
      state.joueurEnCours = 1;
      e.target.textContent = "O";
      joueur.textContent = "1";
    }
  }
};

blocks.forEach((el) => {
  el.addEventListener("click", jouerBlock);
});

