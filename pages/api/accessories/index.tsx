import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { resolveAny } from "dns";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ["query"] });
    try {
        const accessories = await prisma.accessory.findMany();
        res.status(200);
        res.json({ accessories });
    } catch (e) {
        res.status(500);
        res.json({ error: "Unable to fetch accessories" });
    } finally {
        await prisma.$disconnect();
    }
}
