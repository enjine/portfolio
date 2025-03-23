import { jest, describe, expect, it, test } from '@jest/globals'

import { GameKeeper } from '@/app/sandbox/whammy-kablammy/utils/GameKeeper'
import { PlayerModel } from '@/app/sandbox/whammy-kablammy/components/Player'
import { DieSide } from '@/app/sandbox/whammy-kablammy/components/Die'
import { randomValue } from '@/app/sandbox/whammy-kablammy/utils/random'

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

describe('GameKeeper', () => {
    const onBombMove = async () => randomValue<PlayerModel>(players)
    describe('game setup', () => {
        const keeper = new GameKeeper(
            players,
            () => console.log('BOMB DETONATED!'),
            onBombMove
        )
        it('accepts and array of players, initializes the roll tracker, and chooses the oldest one to go first', () => {
            expect(keeper.getPlayers()).toEqual(players)

            expect(Object.keys(keeper.getRolls())).toEqual([
                '1',
                '2',
                '3',
                '4',
                '5',
            ])

            expect(keeper.getCurrentPlayer()).toEqual({
                id: 1,
                name: 'Dad',
                age: 46,
            })
        })
    })
    describe('game play', () => {
        const detonateSpy = jest.fn(() => console.log('BOMB DETONATED!'))

        it("tracks each player's sequence of rolls", () => {
            const keeper = new GameKeeper(players, detonateSpy, onBombMove)
            const player = keeper.getCurrentPlayer()
            keeper.setRoll(DieSide.BOMB)
            keeper.setRoll(DieSide.FUSE)
            keeper.setRoll(DieSide.BOMB)
            keeper.setRoll(DieSide.FUSE)
            keeper.setRoll(DieSide.BOOM)
            const rolls = keeper.getRollsForPlayer(player)
            expect(rolls).toEqual([
                DieSide.BOMB,
                DieSide.FUSE,
                DieSide.BOMB,
                DieSide.FUSE,
                DieSide.BOOM,
            ])

            keeper.setCurrentPlayer(players[1])
            keeper.setRoll(DieSide.FUSE)
            keeper.setRoll(DieSide.BOMB)
            keeper.setRoll(DieSide.FUSE)
            const rolls2 = keeper.getRollsForPlayer(players[1])
            expect(rolls2).toEqual([DieSide.FUSE, DieSide.BOMB, DieSide.FUSE])
        })
        it('detonates the bomb when a plyer rolls a fuse for 3 consecutive turns', () => {
            const keeper = new GameKeeper(players, detonateSpy, onBombMove)
            keeper.setCurrentPlayer(players[0])
            keeper.setRoll(DieSide.BOMB)
            keeper.setCurrentPlayer(players[1])
            keeper.setRoll(DieSide.FUSE)
            keeper.setCurrentPlayer(players[2])
            keeper.setRoll(DieSide.BOMB)
            keeper.setCurrentPlayer(players[3])
            keeper.setRoll(DieSide.BOOM)
            keeper.setCurrentPlayer(players[4])
            keeper.setRoll(DieSide.FUSE)
            keeper.setCurrentPlayer(players[0])
            keeper.setRoll(DieSide.BOMB)
            keeper.setCurrentPlayer(players[1])
            keeper.setRoll(DieSide.FUSE)
            keeper.setCurrentPlayer(players[2])
            keeper.setRoll(DieSide.BOMB)
            keeper.setCurrentPlayer(players[3])
            keeper.setRoll(DieSide.BOOM)
            keeper.setCurrentPlayer(players[4])
            keeper.setRoll(DieSide.FUSE)
            keeper.setCurrentPlayer(players[0])
            keeper.setRoll(DieSide.BOMB)
            keeper.setCurrentPlayer(players[1])
            keeper.setRoll(DieSide.FUSE)
            expect(keeper.getRollCount(players[1])).toBe(3)
            expect(keeper.getRollsForPlayer(players[1])).toEqual([
                DieSide.FUSE,
                DieSide.FUSE,
                DieSide.FUSE,
            ])
            expect(detonateSpy).toHaveBeenCalled()
        })
        it('can move the bomb from one player to another', async () => {
            const onBombMove = async () => Promise.resolve(players[2])
            const keeper = new GameKeeper(players, detonateSpy, onBombMove)
            jest.spyOn(keeper, 'setPlayerWithBomb')
            await keeper.setRoll(DieSide.BOMB)
            expect(keeper.setPlayerWithBomb).toHaveBeenCalled()
            expect(keeper.getPlayerWithBomb()).toEqual(players[2])
        })

        it('can set the next player', async () => {
            const onBombMove = async () => Promise.resolve(players[2])
            const keeper = new GameKeeper(players, detonateSpy, onBombMove)
            await keeper.setRoll(DieSide.BOMB)
            keeper.setNextPlayer()
            expect(keeper.getCurrentPlayer()).toEqual(players[1])
            keeper.setNextPlayer()
            expect(keeper.getCurrentPlayer()).toEqual(players[2])
            keeper.setNextPlayer()
            expect(keeper.getCurrentPlayer()).toEqual(players[3])
            keeper.setNextPlayer()
            expect(keeper.getCurrentPlayer()).toEqual(players[4])
            keeper.setNextPlayer()
            expect(keeper.getCurrentPlayer()).toEqual(players[0])
            keeper.setNextPlayer()
            expect(keeper.getCurrentPlayer()).toEqual(players[1])
        })
    })
})
