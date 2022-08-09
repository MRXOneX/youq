import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
    if (req.method !== 'POST') {
        return req.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const answer = req.body

        const savedAnswer = await prisma.answer.create({
            data: {
                text: answer.text,
                question: { connect: { id: answer.questionId } },
                author: { connect: { email: answer.author.email } }
            }
        })

        const updatedQuestion = await prisma.question.update({
            where: {
                id: comment.questionId
            },
            data: {
                answers: {
                    push: savedAnswer
                }
            }
        })
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}