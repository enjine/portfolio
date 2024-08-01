import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    fontSize: 60,
                    color: 'black',
                    background: '#000000',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img src="https://dicandia.tech/opengraph-image.png" />
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}
