import { Board } from '../board'
import { Move } from '../move'
import { PieceColor, PossibleMoveOptions } from '../types'
import { Piece } from './piece'

export class Bishop extends Piece {
    constructor(color: PieceColor) {
        super('bishop', color)
    }

    possibleMoves(startSquareNb: number, board: Board, options: PossibleMoveOptions): Move[] {
        return this.createMovesForRepeatedOffsets(
            startSquareNb,
            [
                { file: 1, rank: 1 },
                { file: 1, rank: -1 },
                { file: -1, rank: 1 },
                { file: -1, rank: -1 },
            ],
            board,
            'B',
            options
        )
    }
}
