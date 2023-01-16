import "../styles/globals.css";
import "antd/dist/reset.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import WebLayout from "../components/WebLayout/WebLayout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shoplover</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={inter.className}>
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </main>
    </>
  );
}
