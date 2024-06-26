'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChartIcon } from '@radix-ui/react-icons';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;

  status: 'Online' | 'Offline' | 'Away';
  name: string;
  kills: number;
  deaths: number;
  kd: number;
  wins: number;
  losses: number;
  teams: string;
  ping: number;
  discordtag: string;
  country: 'US' | 'CA' | 'GB' | 'AU' | 'DE' | 'FR' | 'JP' | 'CN' | 'IN' | 'BR';
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    /* header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }, */
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'kills',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Kills
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'deaths',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Deaths
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'kd',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          K/D
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'wins',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Wins
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'losses',
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            Losses
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'teams',
    header: 'Team',
  },
  {
    accessorKey: 'ping',
    header: 'Ping',
    cell: (context) => (
      <div className="flex items-center">
        <BarChartIcon />
        <span className="ml-2">{context.row.original.ping}ms</span>
      </div>
    ),
  },
  {
    accessorKey: 'discordtag',
    header: 'Discord',
    cell: (context) => (
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-37/256/GTA-Episodes-from-Liberty-City-2-icon.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="ml-2">{context.row.original.discordtag}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (context) => (
      <Badge
        variant="outline"
        style={{
          backgroundColor:
            context.row.original.status === 'Online'
              ? '#32CD32'
              : context.row.original.status === 'Away'
              ? 'orange'
              : 'red',
          color: 'white',
        }}>
        {context.row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: 'country',
    header: 'Country',
    cell: (row) => (
      <div className="flex items-center max-w-[10px]">
        <ReactCountryFlag
          countryCode={row.row.original.country}
          svg
          style={{
            width: '1em',
            height: '1em',
          }}
          title={row.row.original.country}
        />
        <span className="ml-2">{row.row.original.country}</span>
      </div>
    ),
  },
];
