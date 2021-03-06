import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { resolveAny } from "dns";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ["query"] });
    try {
        const protectors = await prisma.protector.findMany();
        res.status(200);
        res.json({ protectors });
    } catch (e) {
        res.status(500);
        res.json({ error: "Unable to fetch protector" });
    } finally {
        await prisma.$disconnect();
    }
}
