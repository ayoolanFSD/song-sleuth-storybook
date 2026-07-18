import type { Meta, StoryObj } from "@storybook/react";
import LinkedAccountItem from "./LinkedAccountItem";
import { FaGoogle, FaFacebook, FaSpotify } from "react-icons/fa";

const meta: Meta<typeof LinkedAccountItem> = {
  title: "Features/UserAccount/LinkedAccountItem",
  component: LinkedAccountItem,
};

export default meta;
type Story = StoryObj<typeof LinkedAccountItem>;

export const GoogleLinked: Story = {
  args: {
    icon: <FaGoogle />,
    name: "Google",
    isLinked: true,
    onLink: () => alert("Link Google"),
    onRemove: () => alert("Remove Google"),
  },
};

export const FacebookNotLinked: Story = {
  args: {
    icon: <FaFacebook />,
    name: "Facebook",
    isLinked: false,
    onLink: () => alert("Link Facebook"),
    onRemove: () => alert("Remove Facebook"),
  },
};

export const SpotifyLinked: Story = {
  args: {
    icon: <FaSpotify />,
    name: "Spotify",
    isLinked: true,
    onLink: () => alert("Link Spotify"),
    onRemove: () => alert("Remove Spotify"),
  },
};
