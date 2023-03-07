Deux joueurs s'affrontent. Ils doivent remplir chacun à leur tour une case de la grille avec le symbole qui leur est attribué : O ou X. Le gagnant est celui qui arrive à aligner trois symboles identiques, horizontalement, verticalement ou en diagonale.  
Le tic-tac-toe, aussi appelé « morpion » en France et « OXO » en Belgique, est un jeu de réflexion très simple qui se pratique entre deux joueurs . Placés devant une grille comportant neuf cases disposées sur trois lignes et trois colonnes, les opposants remplissent à tour de rôle l’une des cases vides de la grille en y apposant le symbole qui leur est attribué, soit un X ou un O.

Le gagnant du jeu est celui qui parvient le premier à aligner trois symboles identiques, horizontalement, verticalement ou en diagonale.  

Par abus de langage, appelons X le premier joueur et O son adversaire. Puisqu’une grille de tic-tac-toe comporte neuf cases, X dispose de neuf choix au premier tour et O peut envisager huit réponses possibles. Au second tour, X a sept choix et O en a six, etc. 

Pour compter le nombre de parties possibles, la façon la plus simple consiste à argumenter en fonction du nombre N de coups nécessaires pour qu’un joueur soit déclaré vainqueur ou qu’il y ait partie nulle. Il est clair que N ne peut varier qu’entre 5 et 9, car il faut au minimum trois X et deux O pour que le premier joueur soit déclaré vainqueur.

Les calculs requis sont présentés en encadré et résumés dans la première colonne du tableau 1. La seconde colonne donne quant à elle le nombre de parties possibles lorsque l’on tient compte des symétries. En effet, deux parties peuvent être considérées comme équivalentes si leur déroulement est le même, au prix de rotations ou de réflexions.

Ceci complique passablement les calculs, qui ne sont pas présentés ici, mais pour le premier coup, par exemple, on réalise rapidement que X n’a pas neuf choix mais bien trois : jouer au milieu, jouer sur une case adjacente au centre, ou alors jouer dans un coin.

On ne s’étonne pas, dès lors, que les nombres figurant dans la deuxième colonne soient environ neuf fois plus petits que ceux de la première colonne. Si le ratio n’est pas exactement égal à 9, cela vient du fait qu’il y a plusieurs manières de définir l’équivalence de deux parties par symétrie. On peut montrer par énumération qu’à l’issue d’une partie il y a 138 configurations possibles de X et de O, une fois les symétries prises en compte. De celles-ci, 91 sont favorables à X, 44 sont favorables à O et les 3 autres correspondent à des matchs nuls.

Les images des differents états de l'interface sont représenté dans le fichier screenshoot