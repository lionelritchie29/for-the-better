import Head from 'next/head';
import Footer from '../components/shared/Footer';
import { Data } from '../models/Data';
import Navbar from './Navbar';

type Props = {
  children: any;
  data: Data;
};

export default function Layout({ children, data }: Props) {
  return (
    <div>
      <main className='max-w-6xl px-6 md:px-8 mx-auto mb-8'>{children}</main>
      <Footer data={data} />
    </div>
  );
}
