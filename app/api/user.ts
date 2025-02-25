import { cookies } from 'next/headers';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cookieStore = await cookies();

  if (req.method === 'GET') {
    const hasCookie = cookieStore.has('user');

    if (hasCookie) {
      const user = cookieStore.get('user');
      res.status(200).json({ user });
    } else {
      res.status(200).json({ user: null });
    }
  } if else (req.method === 'POST') {
    const user = req.body;
  }
}
