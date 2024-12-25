import LoginPage from "@/components/LoginPage";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  if (session) {
    return session;
  }
}

export default async function Page() {
  const session = await getUser();
  if (session) {
    redirect("/");
  } else {
    return <LoginPage />;
  }
}
