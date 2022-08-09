import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    if (req.method !== 'POST') {
        return req.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const question = req.body
        
        console.log(question)
        const savedQuestion = await prisma.question.create({
            data: {
                text: question.text,
                item: question.item,
                class: question.class,
                author: { connect: { id: question.authorId } }
            }
        })
        res.status(200).json(savedQuestion)
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' })
    }
}