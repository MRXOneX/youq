import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    if (req.method !== 'POST') {
        return req.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const comment = req.body

        const savedComment = await prisma.comment.create({
            data: {
                text: comment.text,
                question: { connect: { id: comment.questionId } },
                author: { connect: { email: comment.author.email } }
            }
        })

        const updatedQuestion = await prisma.question.update({
            where: {
                id: comment.questionId
            },
            data: {
                comments: {
                    push: savedComment
                }
            }
        })
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}