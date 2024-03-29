import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";


export default function SearchPost() {
    return (
      <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0000FF] to-[#Ffff00]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] px-1 py10">
            Search <span className="text-blue">The</span> Database
          </h1>
          <input type="text" placeholder="Type to get started" className="input input-bordered w-full max-w-xs" />
        <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Back →</h3>
              <div className="text-lg">
                Go Back.
              </div>
            </Link>
        </main>
        
      </>
    );
  }

