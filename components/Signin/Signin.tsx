"use client";

import { useUser } from '@/contexts/hooks';
import Form from './Form';
import { AppUser } from '@/contexts/types';


export default function Signin() {
  const { updateUser } = useUser();

  const submitContent = (name: string, email: string, admin: boolean) => {
    const u: AppUser = {
      name: name,
      email: email,
      id: undefined,
      is_admin: admin,
    };

    updateUser(u);
  }

  return (
    <div className="min-w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex justify-center items-center p-4">
        <Form onSubmit={submitContent} />
      </div>
    </div>
  );
}