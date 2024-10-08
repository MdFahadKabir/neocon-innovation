import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";

import Main from "./main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Neocon technologies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" type="icon" href="/favicon.ico" /> */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
