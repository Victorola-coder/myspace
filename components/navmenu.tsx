import Image from 'next/image';
import Link from 'next/link';

export default function Navmenu() {
  return (
    <div className='text-white flex flex-row items-center justify-between bg-blue-600 p-3'>
      <Link href='/'>
        <div className='flex flex-row gap-2 items-center'>
          <Image src='/logo.svg' width={50} height={50} alt='logo' />
          <span>MySpace</span>
        </div>
      </Link>

      <ul className='flex flex-row items-center gap-2.5'>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>
        </li>
      </ul>
    </div>
  );
}
