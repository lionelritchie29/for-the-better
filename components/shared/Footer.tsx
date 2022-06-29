import { Data } from '../../models/Data';

export default function Footer({ data }: { data: Data }) {
  return (
    <div className='text-center px-6 py-12 text-white font-light' style={{ background: '#38383B' }}>
      <p>
        {data.address} | {data.phone} | {data.email}
      </p>
    </div>
  );
}
