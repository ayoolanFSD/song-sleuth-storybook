import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import SongTitleCell from './SongTitleCell';
import SongLinkIcon from './SongLinkIcon';
import { FaRegClock } from "react-icons/fa";

export default {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: [
      '#',
      'Title',
      'Album',
      'Links',
      <FaRegClock key="clock" title="Time" className="inline-block" />,
    ],
    data: [
      [
        '1',
        <SongTitleCell
          key="title1"
          coverUrl="https://placehold.co/48x48"
          title="Play It Safe for sure play it safe please"
          artist="Julia Wolf"
        />,
        "Play It Safe",
        <div key="links1" className="flex">
          <SongLinkIcon variant="discogs" url="https://www.discogs.com/" price="£1.10" />
          <SongLinkIcon variant="amazon" url="https://www.amazon.com/" price="£2.00" />
          <SongLinkIcon variant="beatport" url="https://www.beatport.com/" price="£1.45" />
          <SongLinkIcon variant="apple" url="https://music.apple.com/" price="£0.99" />
        </div>,
        "2:12",
      ],
      [
        '2',
        <SongTitleCell
          key="title2"
          coverUrl="https://placehold.co/48x48"
          title="Free Spirit"
          artist="Julia Wolf"
        />,
        "Free Spirit",
        <div key="links2" className="flex">
          <SongLinkIcon variant="discogs" url="https://www.discogs.com/"  price="£1.80"/>
          <SongLinkIcon variant="amazon" url="https://www.amazon.com/"  price="£1.40"/>
        </div>,
        "3:02",
      ],
    ],
  },
};
