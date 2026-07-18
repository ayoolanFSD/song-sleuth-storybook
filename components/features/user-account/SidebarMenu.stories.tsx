import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu from './SidebarMenu';
import { FaUser, FaLock, FaBell, FaShieldAlt, FaLink } from 'react-icons/fa';

const menuItems = [
  { key: 'overview', label: 'Account overview', icon: <FaUser /> },
  { key: 'edit-profile', label: 'Edit profile', icon: <FaUser /> },
  { key: 'change-password', label: 'Change password', icon: <FaLock /> },
  { key: 'notification-settings', label: 'Notification settings', icon: <FaBell /> },
  { key: 'privacy-settings', label: 'Privacy settings', icon: <FaShieldAlt /> },
  { key: 'linked-accounts', label: 'Linked accounts', icon: <FaLink /> },
];

const meta: Meta<typeof SidebarMenu> = {
  title: 'Features/Account/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
  args: {
    items: menuItems,
    onSelect: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  args: {
    activeKey: 'overview',
  },
};

export const ChangePasswordActive: Story = {
  args: {
    activeKey: 'change-password',
  },
};

export const NoActive: Story = {
  args: {
    activeKey: undefined,
  },
};
