'use client';

import Image from 'next/image';

export default function SimpleHero({
  title,
  sub,
  imageSrc,            // optional background image
  overlay = true,       // dim image for legibility
}: {
  title: string;
  sub: string;
  imageSrc?: string;
  overlay?: boolean;
}) {
  const withImage = Boolean(imageSrc);

  // Colors adapt to background
  const titleColor = withImage ? 'text-white' : 'text-[#1B1B1B]';
  const subColor = withImage ? 'text-white/90' : 'text-[#2C2C2C]/80';

  // Spacing & sizing:
  // - With image: fixed viewport height for impact
  // - Without image: compact vertical padding, no fixed height
  const containerClasses = withImage
    ? 'relative h-[44vh] min-h-[320px] overflow-hidden'
    : 'relative py-6 sm:py-8 overflow-hidden'; // <<< compact

  // Headline size: a touch smaller in compact mode
  const titleSize = withImage ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl';
  const subSize = withImage ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg';

  return (
    <section className={`${containerClasses} flex items-center justify-center`} aria-label={title}>
      {withImage && (
        <>
          <Image
            src={imageSrc!}
            alt="" // decorative background
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-black/40" />}
        </>
      )}

      <div className="relative text-center px-4">
        <h1 className={`${titleColor} ${titleSize} font-extrabold`}>{title}</h1>
        <p className={`${subColor} ${subSize} mt-3 sm:mt-4`}>{sub}</p>
      </div>
    </section>
  );
}
