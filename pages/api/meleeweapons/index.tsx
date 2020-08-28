import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import { resolveAny } from "dns";

export default async function(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient({log: ["query"]})
    try {
        const meleeweapons = await prisma.meleeWeapon.findMany();
        res.status(200);
        res.json({meleeweapons});

    } catch(e) {
        res.status(500);
        res.json({error: "Unable to fetch sightings"});
    } finally {
        await prisma.$disconnect();    
    }
}