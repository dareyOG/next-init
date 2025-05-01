'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' }
];

function AuthLinks() {
  const pathName = usePathname();
  //   console.log(activeLink);

  return (
    <>
      {navLinks.map(link => {
        const isActive =
          pathName === link.href || (pathName.startsWith(link.href) && pathName !== '/');

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default AuthLinks;
