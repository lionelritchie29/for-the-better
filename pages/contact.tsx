import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { Data } from '../models/Data';
import Layout from '../widgets/Layout';
import Navbar from '../widgets/Navbar';

const ContactPage: NextPage<{ data: Data }> = ({ data }) => {
  return (
    <>
      <Navbar bgImageName='hero-2.jpg'>
        <div className='text-white text-center'>
          <h1 className='text-5xl md:text-6xl mb-14 font-medium tracking-wide'>Contact</h1>
        </div>
      </Navbar>

      <Layout data={data}>
        <section className='mb-12 max-w-4xl mx-auto'>
          <h2 className='font-medium text-3xl md:text-4xl mt-20 mb-10'>Call or visit us today.</h2>
        </section>

        <section className='mb-12 max-w-4xl mx-auto flex flex-col md:flex-row'>
          <div className='md:w-1/2 bg-gray-200 rounded h-72'></div>
          <div className='md:w-1/2 flex items-center justify-center md:px-12 mt-16 md:mt-0'>
            <div className='font-light leading-7'>
              <p>{data.full_address}</p>
              <p>{data.phone}</p>
              <p className='mt-6'>Monday – Friday: 8AM – 5PM</p>
              <p>Saturday: 9AM – 5PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </section>

        <section className='mb-24 font-light max-w-4xl mx-auto leading-7'>
          <h3 className='font-semibold mb-4'>Email</h3>
          <p>General Inquiries</p>
          <p>{data.email}</p>
        </section>
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

export default ContactPage;
