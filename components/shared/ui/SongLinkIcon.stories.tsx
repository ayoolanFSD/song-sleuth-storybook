import type { Meta, StoryObj } from '@storybook/react';
import SongLinkIcon from './SongLinkIcon';

export default {
  title: 'UI/SongLinkIcon',
  component: SongLinkIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['discogs', 'amazon', 'beatport', 'apple'],
    },
    url: {
      control: 'text',
    },
    price: {
      control: 'text',
    },
  },
} as Meta<typeof SongLinkIcon>;

type Story = StoryObj<typeof SongLinkIcon>;

export const Discogs: Story = {
  args: {
    variant: 'discogs',
    url: 'https://www.discogs.com/',
    price: '£2.00',
  },
};

export const Amazon: Story = {
  args: {
    variant: 'amazon',
    url: 'https://www.amazon.com/',
    price: '£3.00',
  },
};

export const Beatport: Story = {
  args: {
    variant: 'beatport',
    url: 'https://www.beatport.com/',
    price: '£1.99',
  },
};

export const Apple: Story = {
  args: {
    variant: 'apple',
    url: 'https://music.apple.com/',
    price: '£1.49',
  },
};
