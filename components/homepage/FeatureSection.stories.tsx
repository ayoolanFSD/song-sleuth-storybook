import type { Meta, StoryObj } from "@storybook/react";
import FeatureSection from "./FeatureSection";

const meta: Meta<typeof FeatureSection> = {
  title: "Marketing/FeatureSection",
  component: FeatureSection,
};

export default meta;
type Story = StoryObj<typeof FeatureSection>;

export const ImageLeft: Story = {
  args: {
    headline: "For Music Lovers of All Kinds",
    text: "Whether you’re a DJ, a record collector, oran audiophile, Song Sleuth is perfect for anyone who values music ownership. Expand your collection of vinyl, CDs, or even tapes with ease!",
    imageUrl: "/images/violinist.jpg",
    imageLeft: true,
  },
};

export const ImageRight: Story = {
  args: {
    headline: "Effortless Purchasing",
    text: "Simply load your playlist, and with just one clickon the provided vendor link, you can purchase your desired tracks. It’s that straightforward!",
    imageUrl: "/images/purchase.jpg",
    imageLeft: false,
  },
};
