import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { Data } from '../../models/Data';
import Layout from '../../widgets/Layout';
import Navbar from '../../widgets/Navbar';

type Props = {
  data: Data;
};

const ReadMePage: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Navbar bgImageName='home-1.jpg'>
        <div className='text-white p-6'>
          <h1 className='text-4xl text-center md:text-5xl mb-4 font-medium tracking-wide'>
            Projects
          </h1>
        </div>
      </Navbar>

      <Layout data={data}>
        <section className='mb-12'>
          <h2 className='font-medium text-3xl md:text-4xl mt-20 md:mt-36 mb-20 md:mb-32'>
            Here&rsquo;s just a small sampling of what we have jump started since October 2021
          </h2>
        </section>

        <section className='flex flex-col space-y-16 mb-32'>
          {data.projects.map((project, idx) => (
            <div key={project.id}>
              <img
                className='object-cover mx-auto w-full'
                src={project.image}
                alt={project.title}
              />
              <h2 className='font-medium text-2xl md:text-3xl mt-3'>{project.title}</h2>

              <div className='font-light'>
                {(project.location || project.when) && (
                  <p className='mt-5'>
                    {project.location}, {project.when}
                  </p>
                )}

                <p className='mt-4'>{project.content}</p>
              </div>

              {idx !== data.projects.length - 1 && (
                <div className='border-b border-gray-200 mt-12'></div>
              )}
            </div>
          ))}
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
