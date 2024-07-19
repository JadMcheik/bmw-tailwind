import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BMW</title>
       
        <link rel="icon" href="/web-page-logo.png" />
      </Head>
      <main >
       

<Navbar/>
<Banner/>
      </main>
    </>
  );
}