import { resolve } from 'styled-jsx/css'
import { z } from 'zod'
//
import { createRouter } from './context'




export const questionRouter = createRouter()
    .query('getAll', {
        async resolve({ ctx }) {
            return await ctx.prisma.question.findMany({
                include: {
                    author: true,
                    answers: true
                }
            })
        }
    })
    .mutation('getSearch', {
        input: z
            .object({
                search: z.string()
            }),
        async resolve({ ctx, input }) {
            console.log(input)
            return await ctx.prisma.question.findMany({
                where: {
                    text: {
                        search: input.search
                    }
                },
                include: {
                    author: true,
                    answers: true
                }
            })
        }
    })
    .query('getOne', {
        input: z
            .object({
                id: z.number()
            }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.question.findUnique({
                where: {
                    id: input.id,
                },
                include: {
                    answers: {
                        include: {
                            author: true
                        }
                    },
                    comments: {
                        include: {
                            author: true
                        }
                    },
                    author: true
                }
            })
        }
    })