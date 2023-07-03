"use client"
import './globals.css'
import localFont from 'next/font/local'
import {Urbanist} from "next/font/google"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head';

import {
    ThirdwebProvider,
    coinbaseWallet,
    metamaskWallet,
    walletConnect,
    paperWallet,
    magicLink,
    smartWallet
} from "@thirdweb-dev/react"

const primary = localFont({src: '../../public/fonts/aquire.woff2', display: 'swap', variable: '--font-primary'})

const primaryBold = localFont({
    src: '../../public/fonts/aquire-bold.woff2',
    display: 'swap',
    variable: '--font-primary-bold'
})

const secondary = Urbanist({display: 'swap', variable: '--font-secondary', subsets: ['latin-ext']})
const activeChain = "ethereum"



export default function RootLayout({children}) {
    return (
        <html lang="en" className={` ${primary.className} ${primaryBold.className}`}>
        <Head>
            <meta name="title" content="Example Page Title" />
            <meta name="description" content="This is an example page description." />
            <title>Example Page</title>
        </Head>
        <body>
        <ThirdwebProvider activeChain={activeChain}
                          supportedWallets={[
                              metamaskWallet(),
                              coinbaseWallet(),
                              walletConnect(),

                          ]}

        >

            <Navbar/>
            {children}
            <Footer/>
        </ThirdwebProvider>
        </body>
        </html>
    )
}
