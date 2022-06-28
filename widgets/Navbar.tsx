import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
import Button from '../components/shared/Button';
import Head from 'next/head';
import { MenuAlt4Icon } from '@heroicons/react/outline';
import DropdownNav from './DropdownNav';
import { useRouter } from 'next/router';

type Props = {
  children: any;
  bgImageName: string;
};

export default function Navbar({ children, bgImageName }: Props) {
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
        <section className='px-9 flex justify-between text-white'>
          <div className='block md:hidden cursor-pointer'>
            <Link href='/' passHref={true}>
              <Image src={Logo} alt='logo' width={165} height={75} />
            </Link>
          </div>

          <div className='hidden md:block cursor-pointer'>
            <Link href='/' passHref={true}>
              <Image src={Logo} alt='logo' width={310} height={125} />
            </Link>
          </div>

          <ul className='hidden md:flex space-x-5 items-center text-white font-normal text-base'>
            {links.map((link) => (
              <li key={link.path}>
                {link.children ? (
                  <DropdownNav link={link} />
                ) : (
                  <Link key={link.title} href={link.path} passHref={true}>
                    {link.path === '/' ? (
                      <div
                        className={`cursor-pointer ${router.pathname === '/' ? 'underline' : ''}`}>
                        {link.title}
                      </div>
                    ) : (
                      <div
                        className={`cursor-pointer ${
                          router.pathname.includes(link.path) &&
                          router.pathname.toLowerCase().includes(link.path.toLowerCase())
                            ? 'underline'
                            : ''
                        }`}>
                        {link.title}
                      </div>
                    )}
                  </Link>
                )}
              </li>
            ))}

            <Button className='' onClick={() => {}}>
              Take Action
            </Button>
          </ul>

          <button className='block md:hidden'>
            <MenuAlt4Icon className='w-8 h-8' />
          </button>
        </section>

        <section className='min-h-[28rem] flex items-center justify-center z-20'>
          {children}
        </section>
      </nav>
    </>
  );
}
