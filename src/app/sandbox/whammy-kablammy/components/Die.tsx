'use client'

import {
    useState,
    useEffect,
    useMemo,
    SetStateAction,
    Dispatch,
    useRef,
} from 'react'
import Image from 'next/image'
import './Die.css'
import { randomKey } from '../utils/random'

type DieModel = {
    onRollComplete: (lastRoll: DieSide) => void
}

export enum DieSide {
    BOOM = 'boom',
    BOMB = 'bomb',
    FUSE = 'fuse',
}
const FACE_IMAGES = {
    [DieSide.BOMB]: '/img/bomb.svg',
    [DieSide.FUSE]: '/img/fuse.svg',
    [DieSide.BOOM]: '/img/boom-2.svg',
}

export const getFace = (face: DieSide) => FACE_IMAGES[face]

export function Die({ onRollComplete }: DieModel) {
    const faces = useMemo(() => FACE_IMAGES, [])
    const sideRef = useRef<DieSide>()
    const [side, setSide] = useState<DieSide>()
    const [isRolling, setIsRolling] = useState(false)

    useEffect(() => {
        sideRef.current = side
    }, [side])

    const roll = useMemo(
        () => () => {
            setIsRolling(true)
            let intervalId: NodeJS.Timeout
            let timeoutId: NodeJS.Timeout
            console.log('rolling', { side })
            intervalId = setInterval(() => {
                const side = randomKey(faces as object)
                setSide(side)
                console.log({ side: sideRef })
            }, 100)
            timeoutId = setTimeout(async () => {
                setIsRolling(false)
                clearTimeout(timeoutId)
                clearInterval(intervalId)
                console.log('done rolling', { side: sideRef.current })
                sideRef.current && (await onRollComplete(sideRef.current))
            }, 3000)
        },
        [side, faces, onRollComplete]
    )

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'middle',
                    height: '250px',
                }}
            >
                {!side ? (
                    <Image
                        src={faces.bomb}
                        alt={DieSide.BOMB}
                        width={200}
                        height={200}
                        key={DieSide.BOMB}
                        style={{}}
                    />
                ) : (
                    Object.entries(faces).map((i) => {
                        const [name, img] = i
                        return (
                            side === name && (
                                <Image
                                    src={img}
                                    alt={name}
                                    width={200}
                                    height={200}
                                    key={name}
                                    style={{}}
                                />
                            )
                        )
                    })
                )}
            </div>
            <button className="btn" onClick={roll} disabled={isRolling}>
                Roll The Die
            </button>
        </>
    )
}
