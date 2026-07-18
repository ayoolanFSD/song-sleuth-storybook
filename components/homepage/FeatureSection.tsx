import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Container from "../shared/ui/Container";

const meragenFont = localFont({
  src: '../../styles/fonts/meragen.ttf',
});

type FeatureSectionProps = {
  headline: string;
  text: string;
  imageUrl: string;
  imageLeft?: boolean;
};

export default function FeatureSection({
  headline,
  text,
  imageUrl,
  imageLeft = false,
}: FeatureSectionProps) {
  return (
    <section
      className={`flex flex-col ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } min-h-[600px] w-full`}
    >
      {/* Image column */}
      <div className="relative flex-1 min-h-[300px] md:min-h-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>
      {/* Text column */}
      <div className="flex-1 flex md:items-center md:justify-center py-10 md:py-36">
        <div className="md:max-w-lg px-6">
          <h2 className={`text-2xl md:text-5xl font-bold mb-6 md:leading-snug ${meragenFont.className}`}>{headline}</h2>
          <p className="text-base md:text-xl text-gray-700">{text}</p>
        </div>
      </div>
    </section>
  );
}
