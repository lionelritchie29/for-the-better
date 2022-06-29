import { NextPage } from 'next';
import { Data } from '../../models/Data';
import Layout from '../../widgets/Layout';
import Navbar from '../../widgets/Navbar';
import DiagramImg from '../../public/assets/diagram.png';
import Image from 'next/image';
import FeatureAccordion from '../../components/what-we-do/FeatureAccordion';
import axios, { AxiosResponse } from 'axios';

const ReadMePage: NextPage<{ data: Data }> = ({ data }) => {
  return (
    <>
      <Navbar bgImageName='hero-4.jpg'>
        <div className='text-white p-6'>
          <h1 className='text-5xl text-center md:text-6xl mb-4 font-medium tracking-wide'>
            What We Do
          </h1>
          <p className='mt-4'>
            Textile and plastic waste sipping through the earth in Bantar Gebang
          </p>
        </div>
      </Navbar>

      <Layout data={data}>
        <section className='mb-12 max-w-4xl mx-auto'>
          <h2 className='font-medium mt-16 mb-6 text-lg'>Our Mission</h2>
          <p className='font-light leading-7'>
            We are a team of dedicated individuals who are hell bent into creating an ecosystem
            where we can prolong the life of used fabrics ranging from fashion, old rags, and even
            Industrial fabric waste. We are inspired to make recycling textile so easy that it would
            be sewn into a habit throughout our lives.
          </p>
        </section>

        <section className='mb-24 flex flex-col-reverse md:flex-row items-center'>
          <div className='w-full md:w-1/4'>
            <FeatureAccordion />
          </div>
          <div className='w-full md:w-3/4 md:ml-8'>
            <Image src={DiagramImg} alt='Lifecycle Diagram' width={1200} height={800} />
          </div>
        </section>

        <section className='mb-24 max-w-4xl mx-auto'>
          <h2 className='font-medium text-3xl md:text-4xl mt-20'>
            &rdquo;For the dream of yesterday is the hope of today and the reality of
            tomorrow.&rdquo;
          </h2>
          <span className='block mt-10 font-light'>Robert H. Goddard</span>
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

export default ReadMePage;
