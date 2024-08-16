"use client"

import { RecoilRoot } from "recoil"

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <RecoilRoot>
            <body>
                {children}
            </body>
        </RecoilRoot>
    )
}