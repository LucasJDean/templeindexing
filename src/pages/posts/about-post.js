import Head from "next/head";
import Link from "next/link";

export default function AboutPost() {
    return (
        <>
          <Head>
            <title>Lucas Page</title>
            <meta name="description" content="Learn more about us!" />
            <link rel="icon" href="/logo.ico" />
          </Head>
          <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0000FF] to-[#Ffff00]">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            </div>
            <div className="artboard artboard-horizontal phone-3 bg-gray"
          >Crowdsourcing involves obtaining work, information, or opinions from a large group of people who submit their data via the Internet, social media, and smartphone apps. But in our temple we want you to have as much fun as you can while you do this dreadful task!
          </div>
          </main>
        </>
      );
}