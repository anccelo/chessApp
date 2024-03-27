export default class ChessCase {
    // 1. Typage des propiétés d'une case du chessboard
    id: string
    color: string;
    x: string;
    y: number;


    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        id: string,
        color: "white",
        x: string,
        y: number

    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.id = id
        this.color = color;
        this.x = x;
        this.y = y;

    }
}