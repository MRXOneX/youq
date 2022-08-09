import { z } from 'zod';
//
// import { EventEmitter } from 'events'
//
import { createProtectedRouter } from "./protected-router";


// const ee = new EventEmitter()


export const protectedQuestionRouter = createProtectedRouter()
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
    .query()
    .mutation('create', {
        input: z
            .object({
                text: z.string(),
                authorId: z.string(),
                item: z.string(),
                class: z.string(),
            }),
        async resolve({ ctx, input }) {
            const savedQuestion = await ctx.prisma.question.create({
                data: {
                    text: input.text,
                    item: input.item,
                    author: { connect: { id: input.authorId } },
                    class: input.class,
                }
            })
            return savedQuestion
        }
    })
    .mutation('answer', {
        input: z
            .object({
                
            }),
        async resolve({ ctx, input }) {
            return 'hi'
        }
    })
    .mutation('comment', {
        input: z
            .object({
                text: z.string(),
                questionId: z.number(),
                authorId: z.string()
            }),
        async resolve({ ctx, input }) {
            console.log(input)
            return 'hi'
        }
    })