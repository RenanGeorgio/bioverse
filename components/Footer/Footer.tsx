import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';


export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 gap-8 py-12 text-white transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
            <Logo width="32px" height="32px" />
            </span>
            <span>Bioverse</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <span>
            &copy; {new Date().getFullYear()} RenanGeorgio, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex items-start col-span-1 text-white lg:col-span-6 lg:justify-end">
          <div className="flex items-center h-10 space-x-6">
            <a
              aria-label="Github Repository"
              href="https://github.com/RenanGeorgio/bioverse"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}