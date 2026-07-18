import type { Meta, StoryObj } from '@storybook/react';
import { useState } from "react";
import Input from './Input';
import { FaSearch, FaEye, FaEyeSlash } from "react-icons/fa";

export default {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      control: 'radio',
      options: ['full', 'md'],
      defaultValue: 'md',
    },
    icon: {
      control: false,
      description: 'Optional icon component to display on the left',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Type here...',
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
    rounded: 'md',
  },
};

export const WithSearchIcon: Story = {
  args: {
    placeholder: 'Filter songs',
    icon: <FaSearch size={18} />,
    rounded: 'full',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Filter playlists',
    icon: <FaSearch size={18} />,
    rounded: 'full',
    className: 'bg-gray-900 text-white border-gray-700 placeholder-gray-400',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Password: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <Input
        {...args}
        type={show ? "text" : "password"}
        rightIcon={
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShow((v) => !v)}
            className="focus:outline-none text-gray-500 hover:text-gray-700"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        }
      />
    );
  },
  args: {
    placeholder: "•••••••",
    rounded: "md",
  },
};