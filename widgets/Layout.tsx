import Head from 'next/head';
import Navbar from './Navbar';

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <main className='min-h-screen max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto mb-8'>{children}</main>
      {/* <footer>Dummy Footer</footer> */}
    </div>
  );
}
