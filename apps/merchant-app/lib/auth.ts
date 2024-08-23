import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client"
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async signIn({ user, account } : {
            user: {
                email: string | null | undefined,
                name: string
            },
            account: {
                provider: "google" | "github"
            }
        }) {
            console.log("Hi SignIn")
            if (!user || !user.email) {
                return false;
            }

            await db.merchant.upsert({
                select: {
                    id: true
                },
                where: {
                    email: user.email
                },
                create: {
                    email: user.email,
                    name: user.name,
                    auth_type: account.provider === "google" ? "Google" : "Github"
                },
                update: {
                    name: user.name,
                    auth_type: account.provider === "google" ? "Google" : "Github"
                }
            });
            return true
        },
    },  
    secret: process.env.NEXTAUTH_SECRET || "secret"
}