# JEU DU TIC TAC TOE.

Documentation de mon TIC TAC TOE

## Documentation des fontes et couleurs

- block : lightgrey   

-  https://fonts.gstatic.com

- font-family: unset

- background-color: whitesmoke ;

  


## En tete  
| style | composante |
| ------ | ------ |
| background-color |  #whitesmoke |
| justify-content | center |
| color | #fbb03b |
| margin | 5rem |

## Pied de page 

```sh
En pied de page, nous avons juste le nom du joueur a qui est le tour
<div id="score">
      <p>C'est maintenant au tour du Joueur <span id="joueur">1</span> de jouer </p> 
```


## Body
| style | composante |
| ------ | ------ |
| background-color | lightgrey |
| border-radius | 5px |
| display | flex |
| cursor | pointer |
| font-size | 3rem |

## Couleurs
| HEX  | DESCRIPTION |
| ---  | --- |
| p | red |


## Principe du jeu

Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|





