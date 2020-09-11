import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    try {
        const { meleeweapon: meleeweaponData } = req.body;
        console.log(meleeweaponData);
        // const delmeleeweapon = await prisma.meleeWeapon.delete({
        //     where: {id: meleeweaponData.id}
        // });

        res.json({ success: true });
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to delete melee weapon from the database",
        });
    } finally {
        await prisma.$disconnect();
    }
}
