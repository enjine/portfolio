import { DieSide } from '../components/Die'
import { PlayerModel } from '../components/Player'
import { sortPlayers } from './sortPlayers'

type RollModel = Record<PlayerModel['id'], DieSide[]>

export class GameKeeper {
    static players: PlayerModel[]
    static currentPlayer: PlayerModel
    static rolls: RollModel
    onDetonate: () => void
    onBombMove: () => Promise<PlayerModel | null>

    constructor(
        players: PlayerModel[],
        onDetonate: () => void,
        onBombMove: () => Promise<PlayerModel | null>
    ) {
        self.rolls = {}
        self.players = players
        self.players.forEach((p: PlayerModel) => {
            self.rolls[p.id] = []
        })

        this.onDetonate = onDetonate
        this.onBombMove = onBombMove

        this.setCurrentPlayer(sortPlayers(self.players)[0])
    }

    getPlayers(): PlayerModel[] {
        return self.players
    }

    setCurrentPlayer(player: PlayerModel) {
        //console.log('setCurrentPlayer', player)
        self.players = this.getPlayers().map((p: PlayerModel) => {
            p.id === player?.id
                ? { ...p, isCurrent: true }
                : { ...p, isCurrent: false }
            return p
        })
        self.currentPlayer = player
    }

    getCurrentPlayer(): PlayerModel {
        return self.currentPlayer
    }

    setNextPlayer() {
        const currPlyr = this.getCurrentPlayer()
        this.getPlayers().forEach((p, i) => {
            if (p.id === currPlyr.id) {
                const nextIdx = i + 1 <= self.players.length - 1 ? i + 1 : 0
                this.setCurrentPlayer(self.players[nextIdx])
            }
        })
    }

    async setRoll(roll: DieSide): Promise<void> {
        self.rolls[self.currentPlayer.id].push(roll)
        return this.evaluateRoll()
    }

    async evaluateRoll(): Promise<void> {
        const last3Rolls = this.getRollsForPlayer().slice(-3)
        const lastRoll = last3Rolls.slice(-1).pop()
        if (
            last3Rolls.every((r) => r === DieSide.FUSE) ||
            lastRoll === DieSide.BOOM
        ) {
            return Promise.resolve(this.onDetonate())
        }

        if (lastRoll === DieSide.BOMB) {
            return this.onBombMove().then((player) =>
                this.setPlayerWithBomb(player)
            )
        }
    }

    getRolls(): RollModel {
        return self.rolls
    }

    getRollsForPlayer(player?: PlayerModel): DieSide[] {
        const plyr = player || self.currentPlayer
        //console.log('getRollsForPlayer', this.getRolls())
        return self.rolls[plyr.id]
    }

    getRollCount(player?: PlayerModel): number {
        const plyr = player || self.currentPlayer
        return this.getRolls()[plyr.id].length
    }

    setPlayerWithBomb(player: PlayerModel | null) {
        self.players = this.getPlayers().map((p: PlayerModel) => {
            p.id === player?.id
                ? { ...p, hasBomb: true }
                : { ...p, hasBomb: false }
            return p
        })
    }

    getPlayerWithBomb(): PlayerModel | undefined {
        console.log('getPlayerWithBomb', self.players)
        return this.getPlayers().find((p: PlayerModel) => p.hasBomb === true)
    }
}
