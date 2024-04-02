'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  amount: number;
  status: 'Online' | 'Offline';
  name: string;
  kills: number;
  deaths: number;
  kd: number;
  wins: number;
  losses: number;
  teams: string;
  ping: number;
  discordtag: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  /* {
    accessorKey: 'status',
    header: 'ID',
  }, */
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'kills',
    header: 'Kills',
  },
  {
    accessorKey: 'deaths',
    header: 'Deaths',
  },
  {
    accessorKey: 'kd',
    header: 'K/D',
  },
  {
    accessorKey: 'wins',
    header: 'Wins',
  },
  {
    accessorKey: 'losses',
    header: 'Losses',
  },
  {
    accessorKey: 'teams',
    header: 'Team',
  },
  {
    accessorKey: 'ping',
    header: 'Ping',
  },
  {
    accessorKey: 'discordtag',
    header: 'Discord',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];
