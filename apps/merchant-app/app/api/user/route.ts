import { NextResponse } from "next/server"
import  PrismaClient  from "@repo/db/client";

const client = PrismaClient;

export const GET = async () => {
    const existing = await client.user.findUnique({
        where: {
            email: "asd",
            name: "adsads"
        }
    })
    if (existing) {
        return NextResponse.json({
            message: "hi there"
        })
    } else {
        return NextResponse.json({
            message: "Please create an account"
        })
    }
}