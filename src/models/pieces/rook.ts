import { Game } from '../game'
import { Move } from '../move'
import { PieceColor, pieceLetter } from '../types'
import { Piece } from './piece'

export class Rook extends Piece {
    private pieceLetter: pieceLetter = 'R'

    constructor(color: PieceColor) {
        super('rook', color)
    }

    possibleMoves(startSquareNb: number, game: Game): Move[] {
        const moves = this.createMovesForRepeatedOffsets(
            startSquareNb,
            [
                { file: 1, rank: 0 },
                { file: 0, rank: 1 },
                { file: 0, rank: -1 },
                { file: -1, rank: 0 },
            ],
            game, this.pieceLetter
        )

        const isQueenSquare = (this.color === 'white' ? 0 : 56) === startSquareNb
        const isKingSquare = (this.color === 'white' ? 7 : 63) === startSquareNb
        if (isQueenSquare || isKingSquare) {
            moves.forEach((move) => {
                move.endBoard.canCastle[this.color][isQueenSquare ? 'queenSide' : 'kingSide'] = false
            })
        }

        return moves
    }
}
