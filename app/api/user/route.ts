import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';


export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has('user');

  if (hasCookie) {
    const user = cookieStore.get('user');
    if (user) {
      return NextResponse.json(
        { message: "User finded successfully", user: user },
        { status: 201 }
      );
    }
  }

  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  const user = await req.json();

  if (!user) {
    return NextResponse.json({ error: "Missing parameter" }, { status: 404 });
  }

  const supabase = await createClient();
  
  const { data: anon } = await supabase.auth.signInAnonymously();

  cookieStore.set({
    name: 'user',
    value: JSON.stringify(user)
  });

  const { data, error } = await supabase.auth.updateUser({ email: user?.email })

  return NextResponse.json(
    { message: "User created successfully", data },
    { status: 200 }
  )
}

export async function DELETE(req: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.delete('user');

  return NextResponse.json(
    { message: "User deleted" },
    { status: 204 }
  );
}