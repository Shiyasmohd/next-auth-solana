'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function IndexPage() {

  const session = useSession()

  useEffect(() => {
    console.log({ session })
  }, [session])

  return (
    <>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{' '}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </>
  );
}
