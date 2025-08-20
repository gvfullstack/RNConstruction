// components/SectionIndexSidebar.tsx
import React from "react";
import type { TocSection } from "./SectionIndexChips";

export default function SectionIndexSidebar({
  sections,
  title = "On this page",
  className = "",
}: {
  sections: TocSection[];
  title?: string;
  className?: string;
}) {
  return (
    <aside className={`hidden lg:block lg:col-span-3 ${className}`}>
      <div className="sticky top-24 rounded-xl border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-[#B21F24]">{title}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-gray-700 hover:text-[#B21F24]">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
