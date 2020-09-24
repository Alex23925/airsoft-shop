import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    try {
        const { protector: protectorData } = req.body;
        const newprotector = await prisma.protector.create({
            data: {
                img: protectorData.img,
                name: protectorData.name,
                price: protectorData.price,
                quantity: protectorData.quantity,
                defense: protectorData.defense,
                evasion: protectorData.evasion,
                effect: protectorData.effect,
                info: protectorData.info,
            },
        });

        res.status(201);
        res.json({
            newprotector,
        });
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to save protector to database",
        });
    } finally {
        await prisma.$disconnect();
    }
}
