import Head from 'next/head';
import Signin from '@/components/Signin';
import { getURL } from '@/utils/helpers';


export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign-in page for Bioverse app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={getURL("/favicon.ico")} />
      </Head>
      <div className="w-full bg-200">
        <Signin />
      </div>
    </>
  )
}