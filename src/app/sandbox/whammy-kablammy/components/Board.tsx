'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Bomb } from './Bomb'
import { Die, DieSide, getFace } from './Die'
import { Player, PlayerModel } from './Player'
import Image from 'next/image'
import { GameKeeper } from '../utils/GameKeeper'

export const Board = ({ players }: { players: PlayerModel[] }) => {
    const gameKeeper = useRef<GameKeeper>()
    const lastRollRef = useRef<DieSide>()
    const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null)
    const [currentPlayerIdx, setCurrentPlayerIdx] = useState<number>(0)
    const [playerWithBomb, setplayerWithBomb] = useState<number | null>(null)
    const [isDetonated, setIsDetonated] = useState(false)
    const [lastRoll, setLastRoll] = useState<DieSide | undefined>()
    const [rollTally, setRollTally] = useState<Record<string, DieSide[]>>({})

    const onDetonate = useCallback(() => setIsDetonated(true), [])
    const onBombMove = useCallback(
        async () => Promise.resolve(currentPlayer),
        [currentPlayer]
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        gameKeeper.current = new GameKeeper(players, onDetonate, onBombMove)
        setCurrentPlayer(gameKeeper.current.getCurrentPlayer())
    }, [])

    const endTurn = () => {
        gameKeeper.current?.setNextPlayer()
        const plyr = gameKeeper.current?.getCurrentPlayer()
        console.log({ plyr, rolls: gameKeeper.current?.getRollsForPlayer() })
        plyr && setCurrentPlayer(plyr)
        setplayerWithBomb()
    }

    const onRollComplete = async (rollResult: DieSide) => {
        await gameKeeper.current?.setRoll(rollResult)
        endTurn()
    }

    return (
        <div className="container">
            <Image
                src="/img/le-boomb.png"
                alt="Le Boomb: By Henri Jean Vanaise"
                width="200"
                height="100"
            />
            <section id="players">
                <section id="currentPlayer">
                    <h3 style={{ fontWeight: 'bold' }}>
                        {' '}
                        Now Rolling: {currentPlayer?.name}
                    </h3>
                </section>
                {players.map((p) => {
                    const rolls = gameKeeper.current?.getRollsForPlayer(p)
                    return (
                        <span key={p.id} style={{ display: 'flex' }}>
                            <Player {...p} key={p.id} /> [
                            {rolls?.map((r) => {
                                return (
                                    <Image
                                        src={`${getFace(r)}`}
                                        alt={r}
                                        width={20}
                                        height={20}
                                        key={r}
                                        style={{
                                            display: 'inline',
                                        }}
                                    />
                                )
                            })}
                            ]
                        </span>
                    )
                })}
            </section>
            <section id="bomb">
                <Bomb isDetonated={isDetonated} />
            </section>
            <section id="die">
                <Die onRollComplete={onRollComplete} />
            </section>
        </div>
    )
}
