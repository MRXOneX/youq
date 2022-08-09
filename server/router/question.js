import { createRouter } from './context'

export const questionRouter = createRouter()
    .query('getAll', {
        async resolve({ ctx }) {
            return 'await ctx.prisma.question.findMany()'
        }
    })