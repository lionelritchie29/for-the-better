// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../models/Data';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    const result: AxiosResponse<Data> = await axios.get(
      process.env.NEXT_PUBLIC_API_ENDPOINT as string,
    );
    res.status(200).json(result.data);
  }
}
