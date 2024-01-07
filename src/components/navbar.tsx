'use client';

import Link from 'next/link';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import {useSession, signIn, signOut} from 'next-auth/react'

const menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function NavBar() {
  const pathName = usePathname();
  const { data: session } = useSession()

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Instagram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map(({href, icon, clickedIcon}) => 
          <li key={href}>
            <Link href={href}>
              {pathName === href ? clickedIcon : icon}
            </Link>
          </li>)}
          {session ? (
            <ColorButton text='Sign Out' onClick={() => signOut()} />
          ) : (
            <ColorButton text='Sign In' onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </div>
  )
}