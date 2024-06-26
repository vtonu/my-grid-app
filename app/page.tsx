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
import { Theme } from '@radix-ui/themes';
import { Flex, Text, Button } from '@radix-ui/themes';

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
      country: 'CA',
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
      country: 'GB',
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
      country: 'DE',
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
      country: 'FR',
    },

    {
      status: 'Online',
      name: 'Player Six',
      teams: 'None',
      discordtag: 'PlayerSix#2564',
      id: 346,
      kills: 223,
      deaths: 127,
      kd: 1.89,
      wins: 33,
      losses: 0,
      ping: 25,
      country: 'BR',
    },
    {
      status: 'Online',
      name: 'Player Seven',
      teams: 'None',
      discordtag: 'PlayerSeven#5214',
      id: 46,
      kills: 23,
      deaths: 27,
      kd: 1.08,
      wins: 500,
      losses: 2,
      ping: 75,
      country: 'US',
    },
    {
      status: 'Online',
      name: 'Player Eight',
      teams: 'Air Force',
      discordtag: 'Player8#1212',
      id: 121,
      kills: 223,
      deaths: 227,
      kd: 2.51,
      wins: 333,
      losses: 225,
      ping: 115,
      country: 'US',
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
      country: 'US',
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();
  return (
    <Theme
      style={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl font-extrabold bg-gradient-to-b from-teal-300 via-teal-400 to-teal-600 text-transparent bg-clip-text">
          LEADERBOARD
        </h1>
        <div className="py-2">
          <Button color="teal" variant="soft" className="cursor-pointer">
            Press 'Z' to close
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </Theme>
  );
}
