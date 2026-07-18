'use client' // If you want to handle active links or interactivity

import ProfileDropdown from '@/components/shared/ui/ProfileDropdown'
// import { useIconColor } from '@/contexts/IconColorContext';

export default function UserNav() {
//   const iconColor = useIconColor() ?? 'black';
  return (
    <nav>
        <ProfileDropdown
            items={[
            {
                id: '1',
                name: 'Library',
                slug: '/library'
            },
            {
                id: '2',
                name: 'Account',
                slug: '/account/overview'
            },
            ]}
            iconColor="black"
        />
    </nav>
  )
}
