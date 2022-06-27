import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name='description' content='For the Better' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-red-300'>Hehe</main>

      <footer>Footer</footer>
    </div>
  );
};

export default Home;
