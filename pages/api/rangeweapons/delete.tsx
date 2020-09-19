import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();

    try {
        const { rangeweapon: rangeweaponData } = req.body;
        console.log(rangeweaponData);
        // const delrangeweapon = await prisma.rangeWeapon.delete({
        //     where: {id: rangeweaponData.id}
        // });

        res.json({ success: true });
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to delete range weapon from the database",
        });
    } finally {
        await prisma.$disconnect();
    }
}
