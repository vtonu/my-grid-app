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
      id: 23,
      amount: 100,
      kills: 4354,
      deaths: 234,
      kd: 18.6,
      wins: 345,
      losses: 2322,
      ping: 44,
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
