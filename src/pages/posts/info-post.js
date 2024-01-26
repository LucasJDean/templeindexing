import Head from "next/head";
import Link from "next/link";


export default function InfoPost() {
  return (
    <>
    <Head>
      <title>Community Page</title>
      <link rel="icon" href="/logo.ico" />
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0000FF] to-[#Ffff00]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] px-1 py10">
          Leaderboard
        </h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Date Joined</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/logo.png" alt="Avatar Tailwind CSS" />
              </div>
            </div>
            <div>
              <div className="font-bold">Terry Davis</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Uploading and Reviewing Documents
          <br/>
          <span className="badge badge-ghost badge-sm">Creator Of Temple OS</span>
        </td>
        <td>Jan 06 2021</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/logo.png" alt="Avatar Tailwind CSS" />
              </div>
            </div>
            <div>
              <div className="font-bold">Vladimir Putin</div>
              <div className="text-sm opacity-50">Ohio</div>
            </div>
          </div>
        </td>
        <td>
        Reviewing Documents
          <br/>
          <span className="badge badge-ghost badge-sm">Being a SIGMA</span>
        </td>
        <td>Feb 07 1994</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/logo.png" alt="Avatar Tailwind CSS" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Everything</span>
        </td>
        <td>Sep 25 1999</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/logo.png" alt="Avatar Tailwind CSS" />
              </div>
            </div>
            <div>
              <div className="font-bold">Nancy Pelosi</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Managing Website
          <br/>
          <span className="badge badge-ghost badge-sm">Admin-Mod</span>
        </td>
        <td>Dec 07 1945</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
        <th>Date Joined</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
      <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Home →</h3>
            <div className="text-lg">
              Go Back.
            </div>
          </Link>
      </main>
      
    </>
  );
}


























