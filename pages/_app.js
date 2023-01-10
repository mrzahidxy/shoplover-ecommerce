import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import WebLayout from "../components/WebLayout";
import UserLayout from "../components/users/UserLayout";

// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(
      <WebLayout>
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      </WebLayout>
    );
  }

  return (
    <>
      <Head>
        <title>Shoplover</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <WebLayout>
        <main>
          <Component {...pageProps} />
        </main>
      </WebLayout>
    </>
  );
}
