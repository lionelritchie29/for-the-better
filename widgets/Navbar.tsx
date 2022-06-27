import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logo.png';

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
    <nav className='bg-gray-700 px-9 py-7 flex justify-between text-white'>
      <div>
        <Image src={Logo} alt='logo' width={340} height={135} />
      </div>

      <ul className='flex space-x-4 items-center '>
        {links.map((link) => (
          <li key={link.path}>
            <Link className='py-1' href={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
