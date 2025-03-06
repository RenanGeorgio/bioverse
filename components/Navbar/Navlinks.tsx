"use client";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/contexts/hooks';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';


export default function Navlinks() {
  const { currentUser } = useUser();
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <>
      <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
        <div className="flex items-center flex-1">
          <Link href="/" className={s.logo} aria-label="Logo">
            <Logo width="64px" height="64px" />
          </Link>
          <nav className="ml-6 space-x-2 lg:block">
            {currentUser && (
              <>
                <Link href="/" className={s.link}>
                  Questions
                </Link>
                <Link href="/account" className={s.link}>
                  Account
                </Link>
              </>
            )}
          </nav>
        </div>
        <div className="flex justify-end space-x-8">
          {currentUser ? (
            <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
              <input type="hidden" name="pathName" value={usePathname()} />
              <button type="submit" className={s.link}>
                Sign out
              </button>
            </form>
          ) : (
            <Link href="/signin" className={s.link}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
}