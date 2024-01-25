import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "made Fun" });

  return (
    <>
      <Head>
        <title>Crowd Source Indexing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Crowd <span className="text-[hsl(280,100%,70%)]">Source</span> Indexing
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/posts/info-post"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Infortmation →</h3>
              <div className="text-lg">
                Learn about this website.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/posts/search-post"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Search For Things →</h3>
              <div className="text-lg">
                Search through out database.
              </div>
            </Link>
          </div>
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}
