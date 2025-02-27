import { cookies } from 'next/headers';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@/lib/supabase/server';
import { checkUser } from '@/lib/supabase/queries';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let user = undefined;
  const supabase = await createClient();

  if (req.method === 'GET') {
    const body = req...

    user = await checkUser(supabase, name, email);
  }

  res.status(200).json({ user });
}
