"use client"

import { RecoilRoot } from "recoil"

export const Providers = ({children}: {children: React.ReactNode}) => {
    console.log("Recoil Root is being rendered")
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}