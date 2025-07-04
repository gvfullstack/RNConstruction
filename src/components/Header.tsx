'use client';

import Link from 'next/link';
import Image from 'next/image';

type Active = 'home' | 'fire-rebuild' | 'about';

interface Props {
  active?: Active;
}

export default function Header({ active = 'home' }: Props) {
  const red = '#B21F24';
  const base = 'hover:text-[#B21F24] transition';
  const highlight = `text-[${red}] font-semibold`;

  return (
    <header className="bg-[#1B1B1B] text-white py-4 md:py-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 gap-4">
        {/* Logo / brand --------------------------------------------------- */}
        <Link href="/" className="flex items-center space-x-3 shrink-0">
          <Image
            src="/rn-construction-logo.jpg"
            alt="RN Construction Logo"
            width={150}
            height={45}
            priority
            className="h-10 w-auto md:h-12"
          />
          <span className="text-2xl md:text-3xl font-bold tracking-tight">RN Construction</span>
        </Link>

        {/* Navigation ----------------------------------------------------- */}
        <nav className="flex-1 flex justify-center md:justify-end space-x-6 text-sm font-medium">
          <Link href="/" className={active === 'home' ? highlight : base}>
            Home
          </Link>
          <Link href="/fire-rebuild" className={active === 'fire-rebuild' ? highlight : base}>
            Fire Rebuild
          </Link>
          <Link href="/about" className={active === 'about' ? highlight : base}>
            About
          </Link>
        </nav>

        {/* Call-now CTA ---------------------------------------------------- */}
        <a
          href="tel:6267609310"
          className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-[#B21F24] text-white text-sm md:text-base
                     font-semibold shadow-md shadow-gray-200/50 hover:brightness-110 transition whitespace-nowrap"
        >
          {/* phone icon on small screens */}
          <svg
            className="h-4 w-4 md:hidden"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.64.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.12a1 1 0 011 1 11.72 11.72 0 00.58 3.64 1 1 0 01-.21 1.11l-2.87 2.87z" />
          </svg>
          {/* full number visible from md-up */}
          <span className="hidden md:inline">Call 626-760-9310</span>
        </a>
      </div>
    </header>
  );
}
