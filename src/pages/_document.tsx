import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="mask-icon"
                    href="/meta/safari-pinned-tab.svg"
                    color="#FFFFFF"
                />

                <meta name="msapplication-TileColor" content="#da532c" />
                <meta
                    name="msapplication-config"
                    content="/meta/browserconfig.xml"
                />

                <meta property="og:url" content="https://dicandia.tech" />
                <GoogleTagManager gtmId="GTM-TKBBQ9R" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
            <GoogleAnalytics gaId="G-FBL16WDTTD" />
        </Html>
    )
}
