'use client'
/**
 *
 * TYPES
 *
 * Board {
 *  state: {
 *    currentPlayer: Player
 *    isOver: bool
 * }
 *  players : Player[]
 *  die: Die
 *  bomb: Bomb
 * }
 *
 * Player {
 *  id: string
 *  name: string
 *  age: int
 *  isTurn: bool
 *  isAlive: bool
 *  hasBomb: bool
 * }
 *
 * Bomb {
 *  isDetonated: bool
 * }
 *
 * Die {
 *  sides: string[]
 *  activeSide: int
 * }
 */

import type { NextPage } from 'next'
import { Board } from './components/Board'
import { PlayerModel } from './components/Player'
import { useEffect, useState } from 'react'

const players: PlayerModel[] = [
    {
        id: 1,
        name: 'Dad',
        age: 46,
    },
    {
        id: 2,
        name: 'Teo',
        age: 12,
    },
    {
        id: 3,
        name: 'Max',
        age: 14,
    },
    {
        id: 4,
        name: 'Ella',
        age: 16,
    },
    {
        id: 5,
        name: 'Mom',
        age: 45,
    },
]

const Game: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <section className="service section" id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Whammy Kablammy</h2>
                        {isLoading ? (
                            <h2>Setting up the board...</h2>
                        ) : (
                            <Board players={players} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game
