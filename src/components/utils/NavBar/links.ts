export const links = [
  {
    label: 'News',
    href: '/news',
    isActive: true,
  },
  {
    label: 'Conference',
    href: '',
    isActive: false,
    children: [
      {
        label: 'Conference Schedule',
        href: '/schedule',
        isActive: true,
      },
      {
        label: 'Access Guide',
        href: '/access-guide',
        isActive: true,
      },
      {
        label: 'Catering Guide',
        href: '/catering-guide',
        isActive: true,
      },
    ],
  },
  {
    label: 'Sprint',
    href: '',
    isActive: false,
    children: [
      {
        label: 'Sprint Day',
        href: '/sprint',
        isActive: true,
      },
    ],
  },
  {
    label: 'Organizers',
    href: '',
    isActive: false,
    children: [
      {
        label: 'Organizations',
        href: '/organizers',
        isActive: true,
      },
      {
        label: 'Volunteers',
        href: '/volunteers',
        isActive: true,
      },
    ],
  },
  {
    label: 'Sponsorships',
    href: '',
    isActive: false,
    children: [
      {
        label: 'Sponsors',
        href: '/sponsorships',
        isActive: true,
      },
      {
        label: 'Patrons',
        href: '/sponsorships/patrons',
        isActive: true,
      },
      {
        label: 'Opportunities',
        href: '/sponsorships/opportunities',
        isActive: true,
      },
    ],
  },
  {
    label: 'About',
    href: '',
    isActive: false,
    children: [
      {
        label: 'About Us',
        href: '/about',
        isActive: true,
      },
    ],
  },
  {
    label: 'Supporting Organizations',
    href: '/supporting-organizations',
    isActive: true,
  },
];
