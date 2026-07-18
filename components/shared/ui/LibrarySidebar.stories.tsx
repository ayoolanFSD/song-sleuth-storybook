import type { Meta, StoryObj } from "@storybook/react";
import LibrarySidebar from "./LibrarySidebar";

type LibraryItem = {
  id: string;
  title: string;
  type: "playlist";
  name: string;
  image: string;
};

const sampleItems: LibraryItem[] = [
  {
    id: "1",
    title: "Deep Fried Sessions",
    type: "playlist",
    name: "Nick Tayo Travis",
    image: "https://placehold.co/40x40",
  },
  {
    id: "2",
    title: "Deep Fried Sessions",
    type: "playlist",
    name: "Nick Tayo Travis",
    image: "https://placehold.co/40x40",
  },
  {
    id: "3",
    title: "Deep Fried Sessions",
    type: "playlist",
    name: "Nick Tayo Travis",
    image: "https://placehold.co/40x40",
  },
  {
    id: "4",
    title: "Another Deep Fried Session",
    type: "playlist",
    name: "Nick Tayo Travis",
    image: "https://placehold.co/40x40",
  },
  {
    id: "5",
    title: "More Deep Fried Sessions",
    type: "playlist",
    name: "Nick Tayo Travis",
    image: "https://placehold.co/40x40",
  },
];

export default {
  title: "UI/LibrarySidebar",
  component: LibrarySidebar,
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "selected" },
    activeId: { control: "text" },
    loading: { control: "boolean" },
  },
} as Meta<typeof LibrarySidebar>;

type Story = StoryObj<typeof LibrarySidebar>;

export const Default: Story = {
  args: {
    items: sampleItems,
    activeId: "2",
    loading: false,
  },
};
