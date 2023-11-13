// import LeftNav from "@/components/LeftNav";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function PrivatePagesLayout({ children }) {
  const session = await getServerSession(authOption);
  if (session) redirect("/dashboard");

  return <>{children}</>;
}
