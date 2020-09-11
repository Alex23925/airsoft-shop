import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    try {
        const { meleeweapon: meleeweaponData } = req.body;
        const newmeleeweapon = await prisma.meleeWeapon.create({
            data: {
                img: meleeweaponData.img,
                name: meleeweaponData.name,
                price: meleeweaponData.price,
                quantity: meleeweaponData.quantity,
                attack: meleeweaponData.attack,
                accuracy: meleeweaponData.accuracy,
                effect: meleeweaponData.effect,
                multiplier: meleeweaponData.multiplier,
                info: meleeweaponData.info,
            },
        });

        res.status(201);
        res.json({
            newmeleeweapon,
        });
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to save melee weapon to database",
        });
    } finally {
        await prisma.$disconnect();
    }
}
