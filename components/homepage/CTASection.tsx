import React from "react";
import localFont from "next/font/local";
import Button from "../shared/ui/Button";

const meragenFont = localFont({
  src: '../../styles/fonts/meragen.ttf',
});

type CTASectionProps = {
  headline: string;
  text: string;
  ctaLabel: string;
  onCtaClick: () => void;
};

export default function CTASection({ headline, text, ctaLabel, onCtaClick }: CTASectionProps) {
  return (
    <section className="bg-blue-500 text-white text-center px-6 py-10 md:py-36 flex flex-col items-center gap-4">
        <h2 className={`text-2xl md:text-5xl font-bold ${meragenFont.className}`}>{headline}</h2>

        <div className="flex md:max-w-lg flex-wrap justify-center ">
            <p className="text-lg md:text-xl mt-7">{text}</p>
            <Button variant="arrow" hoverBg="#ef4444" hoverText="white" onClick={onCtaClick} className="mt-10">
              {ctaLabel}
            </Button>
        </div>
    </section>
  );
}
