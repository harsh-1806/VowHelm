import type React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FloatingNav } from './FloatingNav';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'

interface MainLayoutProps {
  children: React.ReactNode;
}

const navItems = [
    {
        name: 'Home',
        link: '/',
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: 'About',
        link: '/about',
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: 'Contact',
        link: '/contact',
        icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <FloatingNav navItems={navItems} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
