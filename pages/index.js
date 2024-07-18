import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Cars from "@/components/Cars";
import SignIn from "@/components/SignIn";
import Footer from "@/components/Footer";
import Signature from "@/components/Signature";



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
      </main>
    </>
  );
}