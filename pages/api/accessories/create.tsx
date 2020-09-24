import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    try {
        const { accessory: accessoryData } = req.body;
        const newaccessory = await prisma.accessory.create({
            data: {
                img: accessoryData.img,
                name: accessoryData.name,
                price: accessoryData.price,
                quantity: accessoryData.quantity,
                effect: accessoryData.effect,
                multiplier: accessoryData.multiplier,
                info: accessoryData.info,
            },
        });

        res.status(201);
        res.json({
            newaccessory,
        });
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to save accessory to database",
        });
    } finally {
        await prisma.$disconnect();
    }
}
