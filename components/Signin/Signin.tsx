"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase as supabaseClient } from '@/lib/supabase/init';


export default function Signin() {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
        <div className="w-full h-full flex justify-center items-center p-4">
        <div className="w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base">
            <span className="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center">
            Login
            </span>
            <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} theme="dark" />
        </div>
        </div>
    </div>
  );
}