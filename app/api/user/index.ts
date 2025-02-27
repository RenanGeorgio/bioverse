import { cookies } from 'next/headers';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AppUser } from '@/contexts/types';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | AppUser>
) {
  const cookieStore = await cookies();

  if (req.method === 'GET') {
    const hasCookie = cookieStore.has('user');

    if (hasCookie) {
      const user = cookieStore.get('user');
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(200);
      }
    } else {
      return res.status(200);
    }
  } else if (req.method === 'POST') {
    const user = req.body;

    if (!user) {
      return res.status(200); // mudar codigo de retorno
    }

    cookieStore.set({
      name: 'user',
      value: JSON.stringify(user)
    });

    return res.status(200);
  } else if (req.method === 'DELETE') {
    cookieStore.delete('user');
    return res.status(200);
  }
}
