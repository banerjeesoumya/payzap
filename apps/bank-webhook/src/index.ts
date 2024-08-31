import express from "express"
import db from "@repo/db/client"
const app = express();

app.post("/hdfc", async (req, res) => {
    const paymentInformation : {
        token: string;
        userId: string
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.id,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch (e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing the webhook server"
        })
    }
})

app.listen(3003);