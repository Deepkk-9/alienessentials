import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Alien Essentials</title>
        <meta name="description" content="Beyond Code, Beyond Borders: Alien Essentials for Dev Innovators to Shop." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      This is Alien Essentials

      <div className="mx-4 bg-slate-500 bg">This is me </div>

    </>
  );
}
