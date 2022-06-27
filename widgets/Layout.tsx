import Head from 'next/head';
import Navbar from './Navbar';

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name='description' content='For the Better' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className='min-h-screen max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto mb-8'>{children}</main>

      {/* <footer>Dummy Footer</footer> */}
    </div>
  );
}
