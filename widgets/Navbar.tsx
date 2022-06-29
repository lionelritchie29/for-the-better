import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
import Button from '../components/shared/Button';
import Head from 'next/head';
import { ChevronLeftIcon, ChevronRightIcon, MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import DropdownNav from './DropdownNav';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  children: any;
  bgImageName: string;
};

export default function Navbar({ children, bgImageName }: Props) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const bgVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 0 },
    openSubMenu: { x: '-100%', opacity: 1 },
  };

  const bgNextVariants = {
    open: { opacity: 1, x: '100%' },
    closed: { opacity: 0, x: '100%' },
    openSubMenu: { x: 0, opacity: 1 },
  };

  const linkVariants = {
    open: { y: 0 },
    closed: { y: '100%' },
    openSubMenu: { y: 0 },
  };

  const router = useRouter();
  const links = [
    {
      title: 'About',
      path: '/about',
      children: [
        {
          title: 'What We Do',
          path: '/what-we-do',
        },
        {
          title: 'Projects',
          path: '/projects',
        },
      ],
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Read Me',
      path: '/read-me',
    },
  ];

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name='description' content='For the Better' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav
        className='py-7 relative'
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('/assets/${bgImageName}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
        {openMobileMenu && (
          <button
            onClick={() => {
              setOpenMobileMenu(false);
            }}
            className='absolute right-9 top-12 z-40'>
            <XIcon className='w-8 h-8 text-gray-900 font-light' />
          </button>
        )}

        <section className='px-9 flex justify-between text-white'>
          <div className='block md:hidden cursor-pointer z-50'>
            <Link href='/' passHref={true}>
              <Image src={Logo} alt='logo' width={165} height={75} />
            </Link>
          </div>

          <div className='hidden md:block cursor-pointer'>
            <Link href='/' passHref={true}>
              <Image src={Logo} alt='logo' width={310} height={125} />
            </Link>
          </div>

          <ul className='hidden md:flex space-x-6 lg:space-x-8 items-center text-white font-normal text-base'>
            {links.map((link) => (
              <li key={link.path}>
                {link.children ? (
                  <DropdownNav link={link} />
                ) : (
                  <Link key={link.title} href={link.path} passHref={true}>
                    <div
                      className={`cursor-pointer ${
                        router.pathname.includes(link.path) &&
                        router.pathname.toLowerCase().includes(link.path.toLowerCase())
                          ? 'underline'
                          : ''
                      }`}>
                      {link.title}
                    </div>
                  </Link>
                )}
              </li>
            ))}

            <button
              className='px-4 py-2 bg-black border border-white hover:bg-gray-900 rounded-full shadow-xl'
              onClick={() => {
                router.push('take-action');
              }}>
              Take Action
            </button>
          </ul>

          <button
            onClick={() => {
              setOpenMobileMenu(true);
              setIsAnimationComplete(false);
            }}
            className='block md:hidden'>
            <MenuAlt4Icon className='w-8 h-8' />
          </button>

          <motion.div
            onAnimationComplete={(name) => {
              if (name === 'closed') {
                setIsAnimationComplete(true);
              }
            }}
            initial={{ opacity: 0, x: 0 }}
            variants={bgVariants}
            transition={{ duration: 0.5 }}
            animate={
              openMobileMenu && openSubMenu ? 'openSubMenu' : openMobileMenu ? 'open' : 'closed'
            }
            className={`${
              isAnimationComplete ? 'hidden' : 'flex'
            } fixed inset-0 h-screen w-full bg-gray-200 flex items-center justify-center z-30`}>
            <motion.ul
              variants={linkVariants}
              transition={{ duration: 0.5 }}
              animate={
                openMobileMenu && openSubMenu ? 'openSubMenu' : openMobileMenu ? 'open' : 'closed'
              }
              className='flex flex-col space-y-5 relative'>
              {links.map((link) => (
                <li key={link.path} className='flex justify-center'>
                  {link.children ? (
                    <button
                      onClick={() => setOpenSubMenu(true)}
                      className='flex justify-center items-center text-gray-900 text-3xl font-light text-center'>
                      <span
                        className={`block ${
                          router.pathname.includes(link.path) &&
                          router.pathname.toLowerCase().includes(link.path.toLowerCase())
                            ? 'underline'
                            : ''
                        }`}>
                        {link.title}
                      </span>{' '}
                      {link.children && <ChevronRightIcon className='block w-7 h-7' />}
                    </button>
                  ) : (
                    <div
                      onClick={() => router.push(link.path)}
                      className='flex justify-center items-center text-gray-900 text-3xl font-light text-center'>
                      <span
                        className={`block ${
                          router.pathname.includes(link.path) &&
                          router.pathname.toLowerCase().includes(link.path.toLowerCase())
                            ? 'underline'
                            : ''
                        }`}>
                        {link.title}
                      </span>
                    </div>
                  )}
                </li>
              ))}
              <li>
                <button
                  className='px-8 py-4 bg-black border border-white hover:bg-gray-900 rounded-full shadow-xl'
                  onClick={() => {
                    router.push('take-action');
                  }}>
                  Take Action
                </button>
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            onAnimationComplete={(name) => {
              if (name === 'closed') {
                setIsAnimationComplete(true);
              }
            }}
            initial={{ opacity: 0, x: '100%' }}
            variants={bgNextVariants}
            transition={{ duration: 0.5 }}
            animate={
              openMobileMenu && openSubMenu ? 'openSubMenu' : openMobileMenu ? 'open' : 'closed'
            }
            className={`${
              isAnimationComplete ? 'hidden' : 'flex'
            } fixed inset-0 h-screen w-full bg-gray-200 flex items-center justify-center z-30`}>
            <motion.ul
              variants={linkVariants}
              transition={{ duration: 0.5 }}
              animate={
                openMobileMenu && openSubMenu ? 'openSubMenu' : openMobileMenu ? 'open' : 'closed'
              }
              className='flex flex-col space-y-5 relative'>
              <li
                onClick={() => setOpenSubMenu(false)}
                className='flex items-center justify-center text-gray-400 text-3xl font-light text-center'>
                <ChevronLeftIcon className='w-7 h-7' />
                <span>Back</span>
              </li>
              {links
                .find((loc) => loc.path === '/about')!
                .children!.map((link) => (
                  <li key={link.path}>
                    <div
                      onClick={() => router.push(`/about${link.path}`)}
                      className='flex justify-center items-center text-gray-900 text-3xl font-light text-center'>
                      <span
                        className={`block ${
                          router.pathname.includes(link.path) &&
                          router.pathname.toLowerCase().includes(link.path.toLowerCase())
                            ? 'underline'
                            : ''
                        }`}>
                        {link.title}
                      </span>
                    </div>
                  </li>
                ))}
            </motion.ul>
          </motion.div>
        </section>

        <section className='min-h-[40rem] flex items-center justify-center z-20'>
          {children}
        </section>
      </nav>
    </>
  );
}
