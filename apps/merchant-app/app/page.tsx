"use client"

import { useBalance } from "@repo/store/useBalance";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  console.log("Reached here")
  const session = useSession();
  const balance = useBalance();
  return (
    <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      Hello from Merchant App
      hi there {balance}
    </div>
  )
} 