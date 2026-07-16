export interface Company {
  name: string;
  role: string;
  url: string;
  logo: string;
  current?: boolean;
}

export const companies: Company[] = [
  {
    name: 'ZenBusiness',
    role: 'staff software engineer',
    url: 'https://www.zenbusiness.com',
    logo: '/logos/zenbusiness.png',
    current: true,
  },
  {
    name: 'Baton',
    role: 'lead software engineer, frontend',
    url: 'https://www.baton.com',
    logo: '/logos/baton.png',
  },
  {
    name: 'Sure',
    role: 'senior frontend engineer',
    url: 'https://www.sureapp.com',
    logo: '/logos/sure.png',
  },
  {
    name: 'Happy Money',
    role: 'senior ui engineer → manager, ui engineering',
    url: 'https://www.happymoney.com',
    logo: '/logos/happymoney.png',
  },
  {
    name: 'Bluewater',
    role: 'ui developer',
    url: 'https://www.bluewatertech.com',
    logo: '/logos/bluewater.png',
  },
  {
    name: 'LevelEleven',
    role: 'senior ui developer',
    url: 'https://www.leveleleven.com',
    logo: '/logos/leveleleven.png',
  },
  {
    name: 'Helloworld',
    role: 'interface developer',
    url: 'https://www.helloworld.com',
    logo: '/logos/helloworld.png',
  },
];
