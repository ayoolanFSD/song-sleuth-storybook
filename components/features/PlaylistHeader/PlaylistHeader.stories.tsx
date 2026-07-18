// PlaylistHeader.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import PlaylistHeader from "./PlaylistHeader";

const meta: Meta<typeof PlaylistHeader> = {
  title: "Features/Playlist/PlaylistHeader",
  component: PlaylistHeader,
  tags: ["autodocs"], // helps ensure show code
};

export default meta;
type Story = StoryObj<typeof PlaylistHeader>;

export const FourImages: Story = {
  args: {
    name: "Chill Vibes",
    coverImages: [
      "https://placehold.co/112x112?text=1",
      "https://placehold.co/112x112?text=2",
      "https://placehold.co/112x112?text=3",
      "https://placehold.co/112x112?text=4",
    ],
    user: {
      name: "Username",
      avatarUrl: "https://placehold.co/32x32?text=U",
    },
    songCount: 322,
    duration: "16hr",
  },
};
