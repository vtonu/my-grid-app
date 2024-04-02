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
      name: 'Quality',
      teams: 'Air Force',
      discordtag: 'Quality#1234',
      id: 155,
      kills: 354,
      deaths: 234,
      kd: 1.6,
      wins: 345,
      losses: 2322,
      ping: 44,
    },
    {
      status: 'Online',
      name: 'Apache Gunship',
      teams: 'None',
      discordtag: 'Apache#1234',
      id: 13,
      kills: 4354,
      deaths: 1234,
      kd: 3.9,
      wins: 1345,
      losses: 422,
      ping: 14,
    },
    {
      status: 'Online',
      name: 'Bodhi',
      teams: 'Admin',
      discordtag: 'Bodhi#1233',
      id: 44,
      kills: 1234,
      deaths: 72,
      kd: 3.2,
      wins: 123,
      losses: 1256,
      ping: 33,
    },
    {
      status: 'Online',
      name: 'Mikeeeeez',
      teams: 'Air Force',
      discordtag: 'Mike#1523',
      id: 674,
      kills: 122,
      deaths: 12,
      kd: 2.2,
      wins: 53,
      losses: 56,
      ping: 93,
    },
    {
      status: 'Online',
      name: 'GTA6Fan',
      teams: 'President',
      discordtag: 'gta6gta#1111',
      id: 23,
      kills: 112,
      deaths: 156,
      kd: 3.6,
      wins: 33,
      losses: 56,
      ping: 82,
    },
    {
      status: 'Away',
      name: 'Jack Daniels',
      teams: 'Secret Service',
      discordtag: 'Jack#2342',
      id: 24,
      kills: 234,
      deaths: 672,
      kd: 1.2,
      wins: 23,
      losses: 256,
      ping: 133,
    },
    {
      status: 'Away',
      name: 'bobykkkk',
      teams: 'None',
      discordtag: 'bobb#1219',
      id: 154,
      kills: 23,
      deaths: 67,
      kd: 2.22,
      wins: 3,
      losses: 56,
      ping: 33,
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
