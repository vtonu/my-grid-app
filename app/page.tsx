/* export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Test
      </div>
    </main>
  );
}
 */

import { Payment, columns } from './payments/columns';
import { DataTable } from './payments/data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      status: 'Online',
      name: 'Player One',
      teams: 'None',
      discordtag: 'PlayerOne#1234',
      id: 13,
      kills: 4354,
      deaths: 1234,
      kd: 3.9,
      wins: 1345,
      losses: 422,
      ping: 24,
    },
    {
      status: 'Online',
      name: 'Player Two',
      teams: 'Air Force',
      discordtag: 'PlayerTwo#1267',
      id: 24,
      kills: 122,
      deaths: 112,
      kd: 1.1,
      wins: 53,
      losses: 56,
      ping: 93,
    },
    {
      status: 'Online',
      name: 'Player Three',
      teams: 'Secret Service',
      discordtag: 'PlayerThree#5298',
      id: 33,
      kills: 112,
      deaths: 156,
      kd: 3.1,
      wins: 33,
      losses: 56,
      ping: 82,
    },
    {
      status: 'Online',
      name: 'Player Four',
      teams: 'President',
      discordtag: 'Four#2355',
      id: 74,
      kills: 234,
      deaths: 372,
      kd: 1.2,
      wins: 23,
      losses: 256,
      ping: 133,
    },
    {
      status: 'Away',
      name: 'Player Five',
      teams: 'None',
      discordtag: 'Five#2795',
      id: 154,
      kills: 23,
      deaths: 67,
      kd: 1.3,
      wins: 3,
      losses: 56,
      ping: 33,
    },
    {
      status: 'Online',
      name: 'Player Six',
      teams: 'None',
      discordtag: 'PlayerSix#2564',
      id: 346,
      kills: 223,
      deaths: 127,
      kd: 1.8,
      wins: 33,
      losses: 5,
      ping: 25,
    },
    {
      status: 'Online',
      name: 'Player Seven',
      teams: 'None',
      discordtag: 'PlayerSeven#5214',
      id: 46,
      kills: 23,
      deaths: 27,
      kd: 1,
      wins: 3,
      losses: 2,
      ping: 75,
    },
    {
      status: 'Online',
      name: 'Player Eight',
      teams: 'Air Force',
      discordtag: 'Player8#1212',
      id: 121,
      kills: 223,
      deaths: 227,
      kd: 2.5,
      wins: 333,
      losses: 225,
      ping: 115,
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto p-2 flex justify-center items-center flex-col">
      <h1 className="py-4 text-4xl font-extrabold bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600 via-zinc-300 to-teal-400 text-transparent bg-clip-text">
        Leaderboard
      </h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
