import { z } from 'zod'
//
import { createRouter } from './context'




export const profileRouter = createRouter()
    .query('getOne', {
        input: z
            .object({
                id: z.string()
            }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.user.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    answers: true,
                    comments: true,
                    questions: true
                }
            })
        }
    })