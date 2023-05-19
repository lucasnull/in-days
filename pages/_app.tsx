import React from "react";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { Open_Sans } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "../styles/_globals.scss";
import { Analytics } from "../components/Analytics";
const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Analytics />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <RecoilRoot>
        <div className={openSans.className}>
          <ToastContainer />
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </React.Fragment>
  );
}
