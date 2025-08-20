"use client";
export default function SimpleHero({
  title,
  sub,
}: { title: string; sub: string }) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-[#1B1B1B] via-[#2A2A2A] to-[#1B1B1B]">
      <div className="text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold">{title}</h1>
        <p className="text-white/95 text-lg sm:text-2xl mt-4">{sub}</p>
      </div>
    </section>
  );
}
