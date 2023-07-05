"use client";
import "./globals.css";
import {Inter} from "next/font/google";
import Navbar from "@/app/components/Navbar";
import {
    ThirdwebProvider,
    coinbaseWallet,
    metamaskWallet,
    walletConnect,
} from "@thirdweb-dev/react";
import Head from "next/head";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ["latin"]});
const activeChain = "ethereum";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThirdwebProvider
            activeChain={activeChain}
            supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
        >
            <Head>
                <title>HyperMove</title>
                <meta name="description" content="HyperMove"/>
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </ThirdwebProvider>
        </body>
        </html>
    );
}
