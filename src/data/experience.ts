export interface Company {
  name: string;
  role: string;
  url: string;
}

export const companies: Company[] = [
  {
    name: 'ZenBusiness',
    role: 'Staff Software Engineer',
    url: 'https://www.zenbusiness.com',
  },
  {
    name: 'Baton',
    role: 'Lead Software Engineer, Frontend',
    url: 'https://www.baton.com',
  },
  { name: 'Sure', role: 'Senior Frontend Engineer', url: 'https://www.sureapp.com' },
  {
    name: 'Happy Money',
    role: 'Senior UI Engineer → Manager, UI Engineering',
    url: 'https://www.happymoney.com',
  },
  { name: 'Bluewater', role: 'UI Developer', url: 'https://www.bluewatertech.com' },
  {
    name: 'Leveleleven',
    role: 'Senior UI Developer',
    url: 'https://www.leveleleven.com',
  },
  { name: 'Helloworld', role: 'Interface Developer', url: 'https://www.helloworld.com' },
];
