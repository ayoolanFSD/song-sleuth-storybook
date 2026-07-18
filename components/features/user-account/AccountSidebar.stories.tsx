import type { Meta, StoryObj } from '@storybook/react';
import AccountSidebar from './AccountSidebar';

const user = {
  imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
  name: 'Jane Doe',
};

const meta: Meta<typeof AccountSidebar> = {
  title: 'Features/Account/AccountSidebar',
  component: AccountSidebar,
  tags: ['autodocs'],
  args: {
    user,
    activeKey: 'overview',
    onSelect: () => {},
  },
  parameters: {
    layout: 'fullscreen',
    // Enable dark mode toggle if using storybook-dark-mode addon
    darkMode: true,
    // Enable responsive viewports
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccountSidebar>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Responsive: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
