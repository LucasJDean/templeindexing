import Head from "next/head";
import Link from "next/link";


export default function LucasPost() {
    return (
      <>
        <h1>My page</h1>
        <p>Love how im the only one doing this.</p>
        <h2>
          <Link href="/">Back to home page</Link>
        </h2>
      </>
    );
  }


