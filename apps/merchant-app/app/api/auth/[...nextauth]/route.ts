import NextAuth from "next-auth/next";
import { authOptions } from "../../../../lib/auth";
import { AuthOptions } from "next-auth";

const handler = NextAuth(authOptions as AuthOptions);

export {handler as GET, handler as POST}