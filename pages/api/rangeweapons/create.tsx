import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    try {
        const { rangeweapon: rangeweaponData } = req.body;
        const newrangeweapon = await prisma.rangeWeapon.create({
            data: {
                img: rangeweaponData.img,
                name: rangeweaponData.name,
                price: rangeweaponData.price,
                quantity: rangeweaponData.quantity,
                attack: rangeweaponData.attack,
                accuracy: rangeweaponData.accuracy,
                effect: rangeweaponData.effect,
                multiplier: rangeweaponData.multiplier,
                info: rangeweaponData.info,
            },
        });

        res.status(201);
        res.json({
            newrangeweapon,
        });
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to save range weapon to database",
        });
    } finally {
        await prisma.$disconnect();
    }
}
