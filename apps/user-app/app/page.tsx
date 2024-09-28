// "use client"

// import { Appbar } from "@repo/ui/appbar";
import { getServerSession } from "next-auth";
// import { signIn, signOut, useSession } from "next-auth/react";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

// export default function Page(): JSX.Element {
//   const session = useSession();
//   return (
//     <div className="text-2xl">
//       <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
//     </div>
//   );
// }
export default async function Page() {
  const session = await getServerSession(authOptions);
  redirect('/dashboard')
  // if (session?.user) {
  //   redirect('/dashboard')
  // } else {
  //   redirect('/api/auth/signin')
  // }
}