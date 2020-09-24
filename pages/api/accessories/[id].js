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
    const accessory = await prisma.accessory.findOne({
        where: {
            id: Number(postId)
        },
        include: {
            author: true
        },
    })
    res.json(accessory)
}

// DELETE /api/post/:id
async function handleDELETE(postId, res) {
    const accessory = await prisma.accessory.delete({
        where: {
            id: Number(postId)
        },
    })
    res.json(accessory);

}