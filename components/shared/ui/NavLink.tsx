'use client';
import Link from 'next/link';
import NProgress from 'nprogress';
import { ComponentProps } from 'react';
import { usePathname } from 'next/navigation';

type Props = ComponentProps<typeof Link> & {
  showProgress?: boolean;
};

export default function NavLink({ onClick, showProgress = true, ...props }: Props) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      onClick={(e) => {
        const href = props.href.toString();
        if (showProgress && href !== pathname) {
          NProgress.start();
        }
        onClick?.(e);
      }}
    />
  );
}