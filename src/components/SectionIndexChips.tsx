// components/SectionIndexChips.tsx
import React from "react";

export type TocSection = { id: string; label: string };

export default function SectionIndexChips({
  sections,
  ariaLabel = "On this page",
  className = "",
}: {
  sections: TocSection[];
  ariaLabel?: string;
  className?: string;
}) {
  // Hidden on ≥lg by default; wraps neatly on small screens, no side-scroll
  return (
    <nav aria-label={ariaLabel} className={`lg:hidden px-4 sm:px-6 lg:px-8 mt-6 ${className}`}>
      <ul className="mx-auto max-w-7xl flex flex-wrap justify-center gap-x-2 gap-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="inline-block whitespace-nowrap rounded-full border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
