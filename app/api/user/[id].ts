import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import type { NextApiResponse } from 'next';
import { createClient } from '@/lib/supabase/server';
import { checkUser } from '@/lib/supabase/queries';
import { AppUser } from '@/contexts/types';


type Data = {
  name: string
}

export default async function handler(
  req: NextRequest,
  res: NextApiResponse<Data | AppUser>
) {
  let user = undefined;
  const supabase = await createClient();

  if (req.method === 'GET') {
    const searchParams = req.nextUrl.searchParams;
    const email: string | null = searchParams.get('email');

    if (!email) {
      return res.status(402);
    }

    const path: string[] = req.nextUrl.pathname.split('/');
    const name = path[path.length - 1];

    user = await checkUser(supabase, name, email);
  }

  if (!user) {
    return res.status(402);
  } else {
    return res.status(200).json(user);
  }
}
