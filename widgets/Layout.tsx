import Head from 'next/head';
import Footer from '../components/shared/Footer';
import Navbar from './Navbar';

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <main className='max-w-7xl px-6 md:px-8 mx-auto mb-8'>{children}</main>
      <Footer />
    </div>
  );
}
