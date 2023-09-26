import { SidebarLink, SidebarContent } from '../../types';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const sidebar: SidebarContent[] = [
  {
    links: [
      { title: 'Sponsorship', href: '/Sponsorship' },
      { title: 'Contacts', href: '/Contacts' },
    ],
    dropdowns: [
      {
        title: 'EFMP',
        links: [
          { title: 'EFMP Medical', href: 'EFMP/Medical' },
          { title: 'EFMP Assignment', href: 'EFMP/Assignment' },
          { title: 'EFMP Family Support', href: 'EFMP/FamilySupport' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { title: 'Base Resources', href: '/resource' },
          { title: 'Local Resources', href: '/resources' },
        ],
      },
    ],
  },
];
