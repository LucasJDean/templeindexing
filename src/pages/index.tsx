import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "World." });

  return (
    <>
      <Head>
        <title>The Temple Of Indexing</title>
        <meta name="description" content="Making crowd source indexing fun!" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="navbar bg-stone-950">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="/" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link
        href="/posts/search-post.js"
        target="_blank"
      >  
      <li><a>Search</a></li>
      </Link>
      <Link
        href="/posts/leader-post.js"
      >
      <li><a>Leaderboard</a></li>
      </Link>
      <Link
        href="/"
        target="_blank"
      > 
      <li><a>Info</a></li>
      </Link>
      <Link
        href="/posts/lucas-post.js"
        target="_blank"
      >
      <li><a>Lucas</a></li>
      </Link>
      </ul>
    </div>
  </div>
  <Link
  href="/"
  target="_blank">
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl text-white">The Temple Of Indexing</a>
  </div>
  </Link>
</div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#505250] to-[#CBD3C1]">
        <div className="container flex flex-col items-center justify-center gap-12 px-7 py17 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray sm:text-[5rem]">
            Were Making It <span className="text-black">F͟u͟n</span> Again.
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/posts/about-post"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">About →</h3>
              <div className="text-lg">
                Learn more about how this started.
              </div>
            </Link>
          </div>  
          <p className="text-2xl text-black">
            {hello.data ? hello.data.greeting : "Loading..."}
          </p>
        </div>
      </main>
    </>
  );
}
