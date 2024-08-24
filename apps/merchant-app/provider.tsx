"use client"

import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"

export const Providers = ({children}: {children: React.ReactNode}) => {
    console.log("Recoil Root is being rendered")
    return (
        <RecoilRoot>
            <SessionProvider>
                {children}
            </SessionProvider>
        </RecoilRoot>
    )
}