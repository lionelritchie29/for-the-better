import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  link: { title: string; path: string; children: { title: string; path: string }[] };
};

export default function DropdownNav({ link }: Props) {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOpenDropdown(true);
      }}
      onMouseLeave={() => setOpenDropdown(false)}
      className={`relative tracking-wide text-center cursor-pointer hover:text-white min-w-[3rem] py-4 text-white font ${
        router.pathname.includes(link.path) ? 'underline' : ''
      }`}>
      {link.title}

      <ul
        className={`absolute bg-white border border-gray-200 rounded-md shadow top-12 transition-all duration-300 ${
          openDropdown ? 'block z-10' : 'hidden'
        }`}>
        {link.children
          ?.sort((first, second) => first.title.localeCompare(second.title))
          .map((child) => (
            <li key={child.title} className='w-44 hover:bg-gray-50'>
              <Link href={`${link.path}${child.path}`} passHref={true}>
                <div
                  className={`tracking-wide text-left cursor-pointer p-4 text-gray-600 ${
                    router.pathname.includes(link.path) && router.pathname.includes(child.path)
                      ? 'font-medium underline'
                      : ''
                  }`}>
                  {child.title}
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
