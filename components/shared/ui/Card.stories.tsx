import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    viewLabel: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image: 'https://placehold.co/256x192',
    title: 'Playlist Title',
    viewLabel: 'View',
  },
};