import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='#f4f4f4' />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
