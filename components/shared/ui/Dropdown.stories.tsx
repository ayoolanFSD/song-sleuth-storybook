import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Profile',
    items: [
      { label: 'Account', onClick: () => alert('Account') },
      { label: 'Playlists', onClick: () => alert('Playlists') },
      { label: 'Log out', onClick: () => alert('Log out') },
    ],
  },
};
