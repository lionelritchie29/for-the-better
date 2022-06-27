import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo.png';
import Button from '../components/shared/Button';
import Head from 'next/head';

type Props = {
  children: any;
  bgImageName: string;
};

export default function Navbar({ children, bgImageName }: Props) {
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
        className='px-9 py-7 relative'
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('assets/${bgImageName}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
        <section className='flex justify-between text-white'>
          <div>
            <Image src={Logo} alt='logo' width={310} height={125} />
          </div>

          <ul className='flex space-x-5 items-center text-white font-normal text-base'>
            {links.map((link) => (
              <li key={link.path}>
                <Link className='py-1' href={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}

            <Button className='' onClick={() => {}}>
              Take Action
            </Button>
          </ul>
        </section>

        <section className='min-h-[28rem] flex items-center justify-center z-20'>
          {children}
        </section>
      </nav>
    </>
  );
}
