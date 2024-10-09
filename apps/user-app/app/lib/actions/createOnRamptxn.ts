"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(amount : number, provider : string) {
    const session = await getServerSession(authOptions);
    const token = Math.random().toString();
    if(!session?.user || !session?.user.id) {
        return {
            message: "Unauthenticated request. User not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data : {
            status: "Pending",
            startTime: new Date(),
            userId: Number(session?.user.id),
            amount: amount * 100,
            token: token,
            provider
        }
    })
    return {
        message: "Done"
    } 
}