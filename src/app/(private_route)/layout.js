// import LeftNav from "@/components/LeftNav";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import { signOut } from "next-auth/react";

export default async function PrivatePagesLayout({ children }) {
  const session = await getServerSession(authOption);

  const isAdmin = session?.user?.role === "admin";

  if (!session) redirect("/");

  if (!isAdmin) {
    redirect("/unauthorize");
  }

  return (
    <section>
      <Header />
      <div className="flex flex-col pt-16 bg-[#F0F2F5] text-[#3c4043]">
        <Navbar />
        <div className="flex justify-center px-5 w-full mt-3">{children}</div>
      </div>
    </section>
  );
}
