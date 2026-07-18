// src/components/shared/ui/Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

// Example arrow icon (replace with your actual icon if needed)
const ArrowIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="red" />
  </svg>
)

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined', 'social', 'arrow'],
    },
    children: { control: 'text' },
    icon: { control: false }, // We'll handle icons in specific stories
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
}

export const Social: Story = {
  args: {
    children: 'Continue with Google',
    variant: 'social',
    icon: <img src="images/spotify-logo.svg" alt="Google" width={20} height={20} />,
  },
}

export const Arrow: Story = {
  args: {
    children: 'Link your Spotify account',
    variant: 'arrow',
    // The Button component renders the arrow icon itself for the 'arrow' variant,
    // but if you want to pass it as a prop, you can do so here:
    // icon: ArrowIcon,
  },
}
