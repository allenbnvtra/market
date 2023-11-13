"use client";
import { signOut } from "next-auth/react";

const SignOut = ({ title }) => {
  return (
    <div>
      <button
        className="px-4 py-1 bg-red-600 rounded-md text-white hover:bg-red-700"
        onClick={() => signOut()}
      >
        {title}
      </button>
    </div>
  );
};

export default SignOut;
