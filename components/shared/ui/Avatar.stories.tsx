import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source for the avatar. If not provided, shows a FaUserCircle icon.',
    },
    alt: {
      control: 'text',
      defaultValue: 'User avatar',
    },
    size: {
      control: { type: 'number', min: 24, max: 128, step: 4 },
      defaultValue: 40,
    },
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'John Doe',
    size: 56,
  },
};

export const PlaceholderIcon: Story = {
  args: {
    src: '',
    size: 56,
  },
};
