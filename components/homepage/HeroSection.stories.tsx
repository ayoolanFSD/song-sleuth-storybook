import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Marketing/HeroSection",
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    headlinePart1: "Unlock the power of music ownership",
    headlinePart2: "with Song Sleuth!",
    subheadline: "Our web app empowers Spotify users to effortlessly purchase tracks from their playlists.",
    ctaLabel: "Link your Spotify account",
    onCtaClick: () => alert("CTA clicked!"),
    // imageUrl: "images/turntable.jpg",
    backgroundImageUrl: "images/turntable.jpg" 
  },
};
