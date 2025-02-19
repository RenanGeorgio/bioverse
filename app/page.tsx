import Head from 'next/head';
import { Auth } from '@supabase/auth-ui-react';
import { User } from '@supabase/supabase-js';
import { SupabaseClient } from '@supabase/supabase-js';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@/lib/supabase/server';
//import { supabase } from '@/lib/initSupabase';
import QuestionList from '@/components/QuestionList';

import '@/styles/app.css';

interface Props {
  supabase: SupabaseClient;
  client: User | undefined | null;
  children?: React.ReactNode
}


function Home({ supabase, client }: Props) {
  return (
    <>
      <Head>
        <title>Bioverse App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full bg-200">
        {!client ? (
          <div className="min-w-full min-h-screen flex items-center justify-center">
            <div className="w-full h-full flex justify-center items-center p-4">
              <div className="w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base">
                <span className="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center">
                  Login
                </span>
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
              </div>
            </div>
          </div>
        ) : (
          <div
            className="w-full h-full flex flex-col justify-center items-center p-4"
            style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
          >
            <QuestionList user={client} />
            <button
              className="btn-black w-full mt-12"
              onClick={async () => {
                const { error } = await supabase.auth.signOut();

                if (error) {
                  console.log('Error logging out:', error.message);
                }
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
  

export default async function App() {
  const supabase = await createClient();
  
  const {
    data: { user }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } = await supabase.auth.getUser();

  return (
    <Home supabase={supabase} client={user} />
  );
}