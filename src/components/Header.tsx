'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

type Active =
  | 'home'
  | 'about'
  | 'fire-rebuild'
  | 'projects'
  | 'residential'
  | 'commercial'
  | 'multi-family'
  | 'public-works'
  | 'restaurants'
  | 'tenant-improvements'
  | 'disaster-recovery'
  | 'capabilities';

type HeaderProps = {
  active?: Active;
  showTagline?: boolean; // toggle if needed
};

export default function Header({ active, showTagline = true }: HeaderProps) {
  const red = '#B21F24';
  // more comfortable link hit-area
  const base = 'px-1.5 py-1 hover:text-[#B21F24] transition whitespace-nowrap';
  const highlight = `px-1.5 py-1 text-[${red}] font-semibold whitespace-nowrap`;

  // mobile panel
  const [mobileOpen, setMobileOpen] = useState(false);

  // desktop dropdowns with "hover intent" (delay on close)
  const [openSectors, setOpenSectors] = useState(false);
  const [openCapabilities, setOpenCapabilities] = useState(false);
  const sectorsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const capsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = (which: 'sectors' | 'caps') => {
    if (which === 'sectors') {
      if (sectorsTimer.current) clearTimeout(sectorsTimer.current);
      setOpenSectors(true);
    } else {
      if (capsTimer.current) clearTimeout(capsTimer.current);
      setOpenCapabilities(true);
    }
  };

  const closeSoon = (which: 'sectors' | 'caps') => {
    const delay = 140; // ms delay prevents flicker when crossing the boundary
    if (which === 'sectors') {
      sectorsTimer.current = setTimeout(() => setOpenSectors(false), delay);
    } else {
      capsTimer.current = setTimeout(() => setOpenCapabilities(false), delay);
    }
  };

  // shared classes
  const menuItem =
    'block w-full text-left px-4 py-2 text-sm text-[#2C2C2C] hover:bg-gray-100 rounded-md';
  const panel =
    'absolute left-0 top-full w-[min(20rem,90vw)] rounded-lg bg-white shadow-xl ring-1 ring-black/5 p-2';

  /* ── Auto-hide on scroll ─────────────────────────────────────────── */
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const THRESHOLD = 8;     // ignore tiny jitters
    const HIDE_OFFSET = 80;  // don't auto-hide until you've scrolled a bit

    const onScroll = () => {
      const y = window.scrollY || 0;

      // always show near the very top
      if (y < HIDE_OFFSET) {
        setIsHidden(false);
        lastY.current = y;
        return;
      }

      const delta = y - lastY.current;
      if (Math.abs(delta) < THRESHOLD) return;

      // Keep header visible while any menu is open
      const anyMenuOpen = mobileOpen || openSectors || openCapabilities;

      if (!anyMenuOpen) {
        if (delta > 0) setIsHidden(true);   // scrolling down -> hide
        else setIsHidden(false);            // scrolling up   -> show
      }

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen, openSectors, openCapabilities]);

  return (
    <header
      className={`bg-[#1B1B1B] text-white sticky top-0 z-50 shadow-lg
                  transition-transform duration-300 ease-out will-change-transform
                  ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <Image
              src="/rn-construction-logo.jpg"
              alt="RN Construction Logo"
              width={150}
              height={45}
              priority
              className="h-10 w-auto md:h-12"
            />
            {/* <span className="text-2xl md:text-3xl font-bold tracking-tight">
              RN Construction
            </span> */}
          </Link>

          {/* Desktop nav (≥1280px) */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8 2xl:gap-10 ml-8 mr-auto min-w-0">
            <Link href="/" className={active === 'home' ? highlight : base}>
              Home
            </Link>

            {/* Sectors dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openNow('sectors')}
              onMouseLeave={() => closeSoon('sectors')}
            >
              <button
                className={`inline-flex items-center gap-1 ${base}`}
                onClick={() => setOpenSectors((v) => !v)}
                onFocus={() => openNow('sectors')}
                aria-haspopup="true"
                aria-expanded={openSectors}
              >
                <span>Sectors We Serve</span>
                <svg className="h-3.5 w-3.5 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.977a.75.75 0 111.08 1.04l-4.243 4.544a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              <div className={`${panel} ${openSectors ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-1 pb-2 text-[11px] uppercase tracking-wide text-gray-500">
                  Residential & Commercial
                </div>
                <ul className="grid grid-cols-1 gap-1">
                  <li><Link href="/residential" className={menuItem}>Residential
                    <span className="block text-xs text-gray-500">Custom homes, remodels, rebuilds</span></Link></li>
                  <li><Link href="/commercial" className={menuItem}>Commercial
                    <span className="block text-xs text-gray-500">Award-winning commercial construction</span></Link></li>
                  <li><Link href="/multi-family" className={menuItem}>Multi-Family / HOA
                    <span className="block text-xs text-gray-500">Unit turns, common areas, exteriors</span></Link></li>
                  <li className="border-t my-1 border-gray-100" />
                  <li><Link href="/public-works" className={menuItem}>Public Works
                    <span className="block text-xs text-gray-500">Schools, municipal, compliance</span></Link></li>
                  <li><Link href="/restaurants" className={menuItem}>Restaurants
                    <span className="block text-xs text-gray-500">Health dept, ventilation, finishes</span></Link></li>
                  <li><Link href="/tenant-improvements" className={menuItem}>Tenant Improvements
                    <span className="block text-xs text-gray-500">Office, retail, medical/dental</span></Link></li>
                  <li className="border-t my-1 border-gray-100" />
                  <li><Link href="/disaster-recovery" className={menuItem}>Disaster Recovery
                    <span className="block text-xs text-gray-500">Fire/flood rebuild specialists</span></Link></li>
                </ul>
              </div>
            </div>

            {/* Capabilities dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openNow('caps')}
              onMouseLeave={() => closeSoon('caps')}
            >
              <button
                className={`inline-flex items-center gap-1 ${base}`}
                onClick={() => setOpenCapabilities((v) => !v)}
                onFocus={() => openNow('caps')}
                aria-haspopup="true"
                aria-expanded={openCapabilities}
              >
                <span>Capabilities</span>
                <svg className="h-3.5 w-3.5 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.977a.75.75 0 111.08 1.04l-4.243 4.544a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              <div className={`${panel} ${openCapabilities ? 'block' : 'hidden'}`}>
                <ul className="grid grid-cols-1 gap-1">
                  <li><Link href="/capabilities#design-build" className={menuItem}>Design-Build
                    <span className="block text-xs text-gray-500">One team from concept to keys</span></Link></li>
                  <li><Link href="/capabilities#ground-up" className={menuItem}>Ground-Up Construction
                    <span className="block text-xs text-gray-500">New builds & complex phasing</span></Link></li>
                  <li><Link href="/capabilities#remodels" className={menuItem}>Remodels & Additions
                    <span className="block text-xs text-gray-500">Kitchens, baths, whole-home</span></Link></li>
                  <li><Link href="/capabilities#ti" className={menuItem}>Tenant Improvements
                    <span className="block text-xs text-gray-500">Office, retail, healthcare</span></Link></li>
                  <li><Link href="/capabilities#public-works" className={menuItem}>Public Works Delivery
                    <span className="block text-xs text-gray-500">Specs, inspections, prevailing wage</span></Link></li>
                  <li><Link href="/capabilities#outdoor" className={menuItem}>Pools & Outdoor Living
                    <span className="block text-xs text-gray-500">Hardscape, water features, landscaping</span></Link></li>
                  <li><Link href="/capabilities#grading" className={menuItem}>Grading & Earthwork
                    <span className="block text-xs text-gray-500">Excavation, compaction, retaining prep</span></Link></li>
                </ul>
              </div>
            </div>

            <Link href="/projects" className={active === 'projects' ? highlight : base}>
              Projects
            </Link>
            <Link href="/about" className={active === 'about' ? highlight : base}>
              About
            </Link>
          </nav>

          {/* Desktop CTAs (balanced, no vertical divider) */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full
                         border border-white/80 text-white/90 text-sm font-semibold
                         hover:bg-white/10 transition whitespace-nowrap"
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:6267609310"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#B21F24]
                         text-white text-sm font-semibold shadow-md hover:brightness-110 transition whitespace-nowrap"
            >
              Call 626-760-9310
            </a>
          </div>

          {/* Hamburger (<1280px) */}
          <button
            className="xl:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet panel (<1280px) */}
      <div
        className={`xl:hidden border-t border-white/10 bg-[#121212] transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          <MobileItem href="/" label="Home" onClick={() => setMobileOpen(false)} active={active === 'home'} />

          {/* Sectors accordion */}
          <MobileDisclosure
            label="Sectors We Serve"
            items={[
              { href: '/residential', label: 'Residential' },
              { href: '/commercial', label: 'Commercial — Award-Winning' },
              { href: '/multi-family', label: 'Multi-Family / HOA' },
              { href: '/public-works', label: 'Public Works' },
              { href: '/restaurants', label: 'Restaurants' },
              { href: '/tenant-improvements', label: 'Tenant Improvements' },
              { href: '/disaster-recovery', label: 'Disaster Recovery' },
            ]}
            onNavigate={() => setMobileOpen(false)}
          />

          {/* Capabilities accordion */}
          <MobileDisclosure
            label="Capabilities"
            items={[
              { href: '/capabilities#design-build', label: 'Design-Build' },
              { href: '/capabilities#ground-up', label: 'Ground-Up Construction' },
              { href: '/capabilities#remodels', label: 'Remodels & Additions' },
              { href: '/capabilities#ti', label: 'Tenant Improvements' },
              { href: '/capabilities#public-works', label: 'Public Works Delivery' },
              { href: '/capabilities#outdoor', label: 'Pools & Outdoor Living' },
              { href: '/capabilities#grading', label: 'Grading & Earthwork' },
            ]}
            onNavigate={() => setMobileOpen(false)}
          />

          <MobileItem href="/projects" label="Projects" onClick={() => setMobileOpen(false)} active={active === 'projects'} />
          <MobileItem href="/about" label="About" onClick={() => setMobileOpen(false)} active={active === 'about'} />

          {/* Mobile CTAs */}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://outlook.office.com/owa/calendar/RussellNobles@rnconstruction.com/bookings/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full
                         border border-white text-white text-sm font-semibold shadow-md hover:bg-white/10 transition"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consultation
            </a>
            <a
              href="tel:6267609310"
              className="w-full inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#B21F24] text-white
                         text-base font-semibold shadow-md shadow-gray-200/50 hover:brightness-110 transition"
              onClick={() => setMobileOpen(false)}
            >
              Call 626-760-9310
            </a>
          </div>
        </div>
      </div>

      {/* Subheader tagline bar (clean, non-italic) */}
      {showTagline && (
        <div className="bg-[#121212] border-t border-white/10">
          <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
            <p className="py-2 text-center text-sm text-white/75">
              We build for homeowners, businesses, and public agencies:&nbsp;
              <span className="whitespace-nowrap">Residential</span> ·
              <span className="whitespace-nowrap"> Commercial</span> ·
              <span className="whitespace-nowrap"> Public Works</span> ·
              <span className="whitespace-nowrap"> Restaurants</span> ·
              <span className="whitespace-nowrap"> Tenant Improvements</span> ·
              <span className="whitespace-nowrap"> Multifamily/HOA</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

/* ───────────────────── helpers ───────────────────── */

function MobileItem({
  href,
  label,
  onClick,
  active,
}: {
  href: string;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-2 py-2 rounded-md ${active ? 'text-[#B21F24] font-semibold' : 'text-white/90 hover:text-white'}`}
    >
      {label}
    </Link>
  );
}

function MobileDisclosure({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-lg">
      <button
        className="w-full flex items-center justify-between px-3 py-2 text-white/90 hover:text-white"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.977a.75.75 0 111.08 1.04l-4.243 4.544a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </button>
      <div className={`px-2 pb-2 space-y-1 ${open ? 'block' : 'hidden'}`}>
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNavigate}
            className="block px-2 py-2 text-sm text-white/90 hover:text-white rounded-md"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
