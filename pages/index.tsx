import type { NextPage } from 'next';
import Button from '../components/shared/Button';
import Layout from '../widgets/Layout';
import Navbar from '../widgets/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar bgImageName='hero-1.jpg'>
        <div className='text-white text-center'>
          <h2 className='font-medium text-xl mb-10'>Textile Sustainability</h2>
          <h1 className='text-6xl mb-14 font-semibold tracking-wide'>Starts With You</h1>
          <Button className='px-12 py-5 text-base' onClick={() => {}}>
            Learn More
          </Button>
        </div>
      </Navbar>
      <Layout>Hehe</Layout>
    </>
  );
};

export default Home;
