import {
    PrismaClient
} from '@prisma/client'
import {
    resolve
} from 'path'

const prisma = new PrismaClient()

export const config = {
    api: {
        externalResolver: true,
    },
}

export default async function handle(req, res) {
    try {
        const postId = req.query.id

        if (req.method === 'GET') {
            handleGET(postId, res)
        } else if (req.method === 'DELETE') {
            handleDELETE(postId, res)
        }
    } catch (e) {
        res.status(500);
        res.json({
            error: "Sorry unable to complete the request",
        });
    }
}

// GET /api/post/:id
async function handleGET(postId, res) {
    const mweapon = await prisma.meleeWeapon.findOne({
        where: {
            id: Number(postId)
        },
        include: {
            author: true
        },
    })
    res.json(mweapon)
}

// DELETE /api/post/:id
async function handleDELETE(postId, res) {
    const mweapon = await prisma.meleeWeapon.delete({
        where: {
            id: Number(postId)
        },
    })
    res.json(mweapon);

}