import type { NextPage } from 'next';
import Button from '../components/shared/Button';
import Layout from '../widgets/Layout';
import Navbar from '../widgets/Navbar';
import HomeOne from '../public/assets/home-1.jpg';
import HomeTwo from '../public/assets/home-2.jpg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Navbar bgImageName='hero-1.jpg'>
        <div className='text-white text-center'>
          <h2 className='font-medium text-lg md:text-xl mb-10'>Textile Sustainability</h2>
          <h1 className='text-5xl md:text-6xl mb-14 font-semibold tracking-wide'>
            Starts With You
          </h1>
          <Button className='px-12 py-5 text-base' onClick={() => {}}>
            Learn More
          </Button>
        </div>
      </Navbar>

      <Layout>
        <section className='text-center mb-20 md:mb-40'>
          <h2 className='font-medium text-3xl md:text-4xl mt-20 mb-10'>
            We’re on a mission to reduce textile waste.
          </h2>
          <p className='font-light max-w-4xl mx-auto leading-7'>
            Some of the Earth&rsquo;s greatest landscapes are threatened by the increase of waste
            produced by manufacturers, fast fashion, and even ourselves. We aim to protect these
            areas from unnecessary textile waste, but we cannot achieve our goals alone. Find out
            how you can help.
          </p>
        </section>

        <section className='flex flex-col md:flex-row mb-28 md:mb-32'>
          <div className='w-full md:w-1/2'>
            <Image
              src={HomeOne}
              className='object-cover'
              alt='organization illustration'
              width={600}
              height={550}
            />
          </div>

          <div className='w-full md:w-1/2 flex flex-col items-center justify-center text-center'>
            <h2 className='font-medium text-3xl mt-2 md:mt-0 md:text-4xl mb-7'>Our Organization</h2>
            <p className='font-light px-2 md:px-20 mb-6'>
              Find out about the projects we’re working on to bring textile sustainability come to
              life.
            </p>
            <Button className='px-10 py-5' onClick={() => {}}>
              Learn more
            </Button>
          </div>
        </section>

        <section className='flex flex-col-reverse md:flex-row mb-32'>
          <div className='w-full md:w-1/2 flex flex-col items-center justify-center text-center'>
            <h2 className='font-medium mt-2 text-3xl md:text-4xl mb-7'>Take Action</h2>
            <p className='font-light px-2 md:px-20 mb-6'>
              Ready to take the next step? You can become a contributor to our cause, or participate
              yourself.
            </p>
            <Button className='px-10 py-5' onClick={() => {}}>
              Find Out How
            </Button>
          </div>

          <div className='w-full md:w-1/2'>
            <Image
              src={HomeTwo}
              className='object-cover'
              alt='find out how illustration'
              width={600}
              height={550}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
