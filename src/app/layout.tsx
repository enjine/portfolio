import { StrictMode } from 'react'

import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import '../styles/style.css'
import '../styles/blue.css'
import '../styles/theme.css'
import Sidebar from '@/components/sidebar/sidebar'
import Providers from './providers'
import ThemeSwitch from '@/components/panel/ThemeSwitch'
import type { Metadata, Viewport } from 'next'

const TITLE = 'Alessandro Di Candia: Making it Happen'
const DESCRIPTION =
    'Software craftsman illuminating the path to our greatest achievements'

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    robots: { index: false, follow: false },
    openGraph: {
        type: 'website',
        url: 'https://dicandia.tech',
        title: TITLE,
        description: DESCRIPTION,
        siteName: `${TITLE} -- ${DESCRIPTION}`,
        // TODO: make the API endpint dynamic
        //images: [{ url: 'https://dicandia.tech/api/og' }],
    },
}

export const viewport: Viewport = {
    themeColor: '#000000',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning>
            <body>
                <StrictMode>
                    <Providers>
                        <ThemeSwitch />
                        <Sidebar />
                        {children}
                    </Providers>
                    <Analytics />
                </StrictMode>
            </body>
        </html>
    )
}
