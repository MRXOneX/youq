import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    if (req.method !== 'POST') {
        return req.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const question = req.body
        
        const savedQuestion = await prisma.question.create({
            data: question
        })
        res.status(200).json(savedQuestion)
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' })
    }
}