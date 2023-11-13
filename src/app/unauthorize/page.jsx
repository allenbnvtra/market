import React from "react";
import SignOut from "@/components/SignOut";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOption);
  if (!session) redirect("/");

  if (session?.user?.role === "admin") redirect("/dashboard");

  return (
    <section className="flex flex-col w-screen h-screen justify-center items-center text-center">
      <div>
        <h1 className="text-4xl font-extrabold mb-3">401: Forbidden</h1>
        <p className="text-lg mb-3">
          You don&apos;t have permission to access this page
        </p>
        <SignOut title="Back to login" />
      </div>
    </section>
  );
};

export default page;
