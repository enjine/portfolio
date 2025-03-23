'use client'

import { useState } from 'react'
import Image from 'next/image'

type BombModel = {
    isDetonated: boolean
}

export const Bomb = ({ isDetonated }: BombModel) => {
    const images = {
        detonated: '/img/bomb-exploded.svg',
        normal: '/img/bomb-normal.svg',
    }
    const [imgSrc, setImgSrc] = useState(
        isDetonated ? images.detonated : images.normal
    )

    return (
        <div>
            <Image src={imgSrc} alt="Le Boomb" width={300} height={300} />
        </div>
    )
}
