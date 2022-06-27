import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logo.png';
import Button from '../components/shared/Button';

export default function Navbar() {
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
    <nav className='absolute top-0 left-0 w-full bg-gray-700 px-9 py-7 flex justify-between text-white'>
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
    </nav>
  );
}
