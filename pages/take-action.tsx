import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import Button from '../components/shared/Button';
import { Data } from '../models/Data';
import Layout from '../widgets/Layout';
import Navbar from '../widgets/Navbar';

const TakeActionPage: NextPage<{ data: Data }> = ({ data }) => {
  return (
    <>
      <Navbar bgImageName='hero-2.jpg'>
        <div className='text-white p-6'>
          <h1 className='text-5xl text-center md:text-6xl mb-4 font-semibold tracking-wide'>
            Take Action
          </h1>
        </div>
      </Navbar>

      <Layout data={data}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 md:py-28'>
          <section className='mb-12 max-w-sm mx-auto'>
            <h2 className='font-medium text-center text-3xl md:text-4xl mt-20 md:mt-0 mb-4 md:max-w-4xl mx-auto'>
              Donate
            </h2>
            <p className='font-light leading-7 text-center'>
              Your donation allows us to divert textile from ending up in landfills. Instead we will
              prolong the textile’s life cycle, all while we open new opportunities for those in
              need.
            </p>

            <div className='text-center mt-8'>
              <a href={data.donation_link} target='_blank' rel='noreferrer'>
                <Button className='w-full py-6' onClick={() => {}}>
                  Make a Donation
                </Button>
              </a>
            </div>
          </section>

          <section className='mb-12 max-w-sm mx-auto'>
            <h2 className='font-medium text-center text-3xl md:text-4xl mt-8 md:mt-0 mb-4 md:max-w-4xl mx-auto'>
              Follow us
            </h2>
            <p className='font-light text-center leading-7'>
              Be part of the community by following us on Instagram. We will be post events and
              updates so keep your eyes peeled. Don’t forget to share us with your friends and
              families!
            </p>

            <div className='text-center mt-8'>
              <a href={data.instagram} target='_blank' rel='noreferrer'>
                <Button className='w-full py-6' onClick={() => {}}>
                  Follow us on IG
                </Button>
              </a>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const result: AxiosResponse<Data> = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/data`,
  );
  return {
    props: {
      data: result.data,
    },
  };
};

export default TakeActionPage;
