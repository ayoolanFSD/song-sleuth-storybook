import type { Meta, StoryObj } from '@storybook/react';
import ProfileDropdown from './ProfileDropdown';
type ProfileDropdownItem = {
  id: string;
  slug: string;
  name: string;
};

const sampleItems: ProfileDropdownItem[] = [
  {
    id: "1",
    name: "Library",
    slug: "/library",
  },
  {
    id: "1",
    name: "Account",
    slug: "/account",
  }
];

export default {
  title: 'UI/ProfileDropdown',
  component: ProfileDropdown,
  tags: ['autodocs'],
} as Meta<typeof ProfileDropdown>;

type Story = StoryObj<typeof ProfileDropdown>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },};
