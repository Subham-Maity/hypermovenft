"use client";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import Footer from "@/app/components/Footer";
import { Web3ReactProvider } from "@web3-react/core";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  return new Web3Provider(provider);
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Web3ReactProvider getLibrary={getLibrary}>
              <Head>
                <title>HyperMove</title>
                <meta name="description" content="HyperMove" />
              </Head>
              <Navbar />
              {children}
              <Footer />
            </Web3ReactProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
