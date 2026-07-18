import React from "react";
import localFont from "next/font/local";
import Button from "../shared/ui/Button";

const meragenFont = localFont({
  src: '../../styles/fonts/meragen.ttf',
});

type HeroSectionProps = {
  headlinePart1: string; // e.g. "Unlock the power of music ownership"
  headlinePart2?: string; // e.g. "with Song Sleuth!"
  subheadline: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  backgroundImageUrl: string;
};

export default function HeroSection({
  headlinePart1,
  headlinePart2,
  subheadline,
  ctaLabel,
  onCtaClick,
  backgroundImageUrl,
}: HeroSectionProps) {
    // Helper to render line breaks in subheadline
  const renderSubheadline = (text: string) =>
    text.split('\n').map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        {idx < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  return (
    <section
      className={`relative flex flex-col justify-center min-h-[500px] md:min-h-[650px] w-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-3xl px-6 py-16 md:py-0 md:pl-32">
        <h1 className={`text-3xl md:text-5xl font-bold md:leading-tight mb-6 ${meragenFont.className}`}>
          <span className="block text-red-500">{headlinePart1}</span>
          {headlinePart2 && <span className="block text-black">{headlinePart2}</span>}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
            {renderSubheadline(subheadline)}
        </p>
        {ctaLabel && onCtaClick && (
          <Button variant="arrow" hoverBg="#ef4444" hoverText="white" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
