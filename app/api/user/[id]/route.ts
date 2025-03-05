import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { checkUser } from '@/lib/supabase/queries';
//import { AppUser } from '@/contexts/types';


export async function GET(req: NextRequest) {
  let user = undefined;
  const supabase = await createClient();

  const searchParams = req.nextUrl.searchParams;
  const email: string | null = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: "Missing parameter" }, { status: 404 });
  }

  const path: string[] = req.nextUrl.pathname.split('/');
  const name = path[path.length - 1];

  user = await checkUser(supabase, name, email);

  if (!user) {
    return NextResponse.json({ error: "User not exists" }, { status: 401 });
  } else {
    return NextResponse.json(
      { message: "Success", user: user },
      { status: 200 }
    );
  }
}