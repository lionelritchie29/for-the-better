import { NextPage } from 'next';
import Layout from '../widgets/Layout';
import Navbar from '../widgets/Navbar';

const ContactPage: NextPage = () => {
  return (
    <>
      <Navbar bgImageName='hero-2.jpg'>
        <div className='text-white text-center'>
          <h1 className='text-5xl md:text-6xl mb-14 font-medium tracking-wide'>Contact</h1>
        </div>
      </Navbar>

      <Layout>
        <section className='mb-12'>
          <h2 className='font-medium text-3xl md:text-4xl mt-20 mb-10'>Call or visit us today.</h2>
        </section>

        <section className='mb-12 font-light max-w-4xl mx-auto leading-7'>
          <p>
            Jl. RS Mata Aini No.5, RW.5, unit 1502, Kuningan, Karet, Kecamatan Setiabudi, Kota
            Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
          </p>
          <p>+62 857-1797-5770</p>
          <p className='mt-6'>Monday – Friday: 8AM – 5PM</p>
          <p>Saturday: 9AM – 5PM</p>
          <p>Sunday: Closed</p>
        </section>

        <section className='mb-24 font-light max-w-4xl mx-auto leading-7'>
          <h3 className='font-semibold mb-4'>Email</h3>
          <p>General Inquiries</p>
          <p>Forthebetter.id@gmail.com</p>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
