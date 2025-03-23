import { PlayerModel } from '../components/Player'

export const sortPlayers = (players: PlayerModel[]) =>
    players.sort((a, b) => {
        return b.age - a.age
    })
