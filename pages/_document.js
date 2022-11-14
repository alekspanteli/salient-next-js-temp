import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html
            className="h-full scroll-smooth bg-white antialiased"
            lang="en"
        >
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <body className="flex h-full flex-col">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}