import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full bg-[#0a192f]/80 backdrop-blur-sm">
      <nav className="container flex max-w-4xl items-baseline justify-between text-slate-300">
        <Link href="/" className="font-heading-xl space-sm font-bold text-[#64ffda] hover:opacity-80">
          Maru
        </Link>
        <ul className="flex font-mono font-heading-sm">
          <li><Link href="/about" className="hover:text-[#64ffda] space-sm">About</Link></li>
          <li><Link href="/timeline" className="hover:text-[#64ffda] space-sm">Timeline</Link></li>
          <li><Link href="/works" className="hover:text-[#64ffda] space-sm">Works</Link></li>
          <li><Link href="/skills" className="hover:text-[#64ffda] space-sm">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
