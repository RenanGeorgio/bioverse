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

  const hasCookie = cookieStore.has('user');

  if (hasCookie) {
    const user = cookieStore.get('user');
    res.status(200).json({ user });
  } else {
    res.status(200).json({ user: null });
  }
}
