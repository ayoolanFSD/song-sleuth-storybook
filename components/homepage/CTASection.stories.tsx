import type { Meta, StoryObj } from "@storybook/react";
import CTASection from "./CTASection";

const meta: Meta<typeof CTASection> = {
  title: "Marketing/CTASection",
  component: CTASection,
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    headline: "Ready to own your music?",
    text: "Link your Spotify account now and start building your music library with Song Sleuth!",
    ctaLabel: "Link your Spotify account",
    onCtaClick: () => alert("CTA clicked!"),
  },
};
