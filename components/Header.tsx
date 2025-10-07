// Step 1: Add this directive to make it a Client Component
"use client";

import Link from 'next/link';
// Step 2: Import 'usePathname' from 'next/navigation' instead
import { usePathname } from 'next/navigation';

const Header = () => {
  // Step 2: Use the usePathname hook to get the current path
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-40 w-full bg-[#0a192f]/80 backdrop-blur-sm">
      <nav className="container flex max-w-4xl items-baseline justify-between text-slate-300">
        <Link
          href="/"
          className={`font-heading-xl space-sm font-bold ${pathname === '/' ? 'text-[#64ffda]' : ''}`}
        >
          M
        </Link>
        <ul className="flex font-mono font-heading-sm">
          <li>
            <Link
              href="/about"
              // Compare with the 'pathname' variable now
              className={`hover:text-[#64ffda] space-sm ${pathname === '/about' ? 'text-[#64ffda]' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={`hover:text-[#64ffda] space-sm ${pathname === '/timeline' ? 'text-[#64ffda]' : ''}`}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className={`hover:text-[#64ffda] space-sm ${pathname === '/works' ? 'text-[#64ffda]' : ''}`}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`hover:text-[#64ffda] space-sm ${pathname === '/skills' ? 'text-[#64ffda]' : ''}`}
            >
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
