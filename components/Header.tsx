import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full bg-[#0a192f]/80 backdrop-blur-sm">
      <nav className="container mx-auto flex max-w-4xl items-baseline justify-between p-4 text-slate-300">
        <Link href="/" className="text-xl font-bold text-[#64ffda] hover:opacity-80 md:text-4xl lg:text-5xl">
          MyPortfolio
        </Link>
        <ul className="flex space-x-4 font-mono text-sm md:space-x-6">
          <li><Link href="/about" className="hover:text-[#64ffda]">About</Link></li>
          <li><Link href="/timeline" className="hover:text-[#64ffda]">Timeline</Link></li>
          <li><Link href="/works" className="hover:text-[#64ffda]">Works</Link></li>
          <li><Link href="/skills" className="hover:text-[#64ffda]">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
