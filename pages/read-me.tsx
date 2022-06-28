import { NextPage } from 'next';
import Layout from '../widgets/Layout';
import Navbar from '../widgets/Navbar';

const ReadMePage: NextPage = () => {
  return (
    <>
      <Navbar bgImageName='hero-3.jpg'>
        <div className='text-white p-6'>
          <h1 className='text-4xl text-center md:text-5xl mb-4 font-medium tracking-wide'>
            More Than Just
          </h1>
          <h2 className='font-bold text-center text-5xl'>Textile</h2>
          <div className='absolute left-6 sm:left-24 lg:left-64 bottom-8'>
            <p className='font-light mt-10 mr-9 max-w-sm'>
              Our Team visit to the Life Project in Bantar Gebang, donating clothes, and toys.
            </p>

            <p className='font-light mt-5'>Oct 2, 2022</p>
          </div>
        </div>
      </Navbar>

      <Layout>
        <section className='mb-12'>
          <h2 className='font-medium text-3xl md:text-4xl mt-20 mb-10 md:max-w-4xl mx-auto'>
            Opening new doors through textile waste
          </h2>
        </section>

        <section className='mb-48 font-light max-w-4xl mx-auto leading-7 flex-col space-y-12 md:space-y-6'>
          <p>
            We assure you that your donations will not be in vain. Donations handed to us by you
            will start a positive ripple effect that will impact many lives. Starting with Bantar
            Gebang’s very own Life Project, here children will receive free education in hopes of
            getting them a better life outside of the slums. A portion of the donation you give us
            will be going towards these children along with financial support that’s been produced
            through our charity sale, which can only function through your donations.
          </p>

          <p>
            Even through our charity sale the clothes you give us will be able to provide people
            with different social standings with more confidence and pride to face different
            opportunities ahead.
          </p>

          <p>
            For The Better (FTB) schedules outings to Bantar Gebang to actually connect with the
            children and the community around the slums, and we invite you to join us! So that you
            can witness first hand the impact you created in making their life better day by day.
          </p>

          <p>
            We are currently a small group of dedicated professionals with one mind in spreading
            positivity. However we have high hopes of opening more doors as we grow and mature into
            a organization with your support :)
          </p>
        </section>
      </Layout>
    </>
  );
};

export default ReadMePage;
