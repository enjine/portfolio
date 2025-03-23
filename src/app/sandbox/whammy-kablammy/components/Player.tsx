import Image from 'next/image'
import { DieSide } from './Die'

export type PlayerModel = {
    id: number
    name: string
    age: number
    avatar?: string
    isCurrent?: boolean
    isAlive?: boolean
    hasBomb?: boolean
}

export const Player = ({
    id,
    name,
    age,
    avatar,
    isCurrent,
    isAlive = true,
    hasBomb,
}: PlayerModel) => {
    return (
        <div>
            {avatar && <Image src={avatar} alt={name} />}
            <h3
                style={{
                    display: 'flex',
                    alignItems: 'middle',
                }}
            >
                <b
                    style={{
                        textDecoration: isAlive ? 'normal' : 'line-through',
                    }}
                >
                    {isAlive ? '😊 ' : '☠️ '}
                    {name}
                </b>{' '}
                {hasBomb && (
                    <Image
                        src="/img/bomb-normal.svg"
                        width="40"
                        height="40"
                        alt="Beware Le Boomb!!"
                    />
                )}
            </h3>
        </div>
    )
}
