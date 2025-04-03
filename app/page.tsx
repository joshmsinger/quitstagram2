"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import SessionWrapper from "./components/SessionWrapper";

function AuthSection() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Quitstagram</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Preserve your memories. Leave Instagram behind.
      </p>

      {session ? (
        <>
          <p className="mb-4">Welcome, {session.user?.name}!</p>
          <button
            className="px-6 py-3 text-lg text-white bg-red-600 rounded-md hover:bg-red-700"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          className="px-6 py-3 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={() => signIn("facebook")}
        >
          Login with Facebook
        </button>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <SessionWrapper>
      <AuthSection />
    </SessionWrapper>
  );
}
