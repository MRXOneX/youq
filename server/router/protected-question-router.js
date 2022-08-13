import { z } from 'zod';
//
// import { EventEmitter } from 'events'
//
import { createProtectedRouter } from "./protected-router";


// const ee = new EventEmitter()


export const protectedQuestionRouter = createProtectedRouter()
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
    // .mutation('create_rating', {
    //     input,
    //     async resolve({ ctx, input }) {

    //     }
    // })
    .mutation('create_answer', {
        input: z.object({
            text: z.string(),
            questionId: z.number(),
            authorId: z.string()
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.answer.create({
                data: {
                    text: input.text,
                    question: { connect: { id: input.questionId } },
                    author: { connect: { id: input.authorId } }
                }
            })
        }
    })
    .mutation('create_comment', {
        input: z.object({
            text: z.string(),
            questionId: z.number(),
            authorId: z.string()
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.comment.create({
                data: {
                    text: input.text,
                    question: { connect: { id: input.questionId } },
                    author: { connect: { id: input.authorId } }
                }
            })
        }
    })
    .mutation('create_comment_to_answer', {
        input: z.object({
            text: z.string(),
            answerId: z.number(),
            authorId: z.string()
        }),
        async resolve({ ctx, input }) {
            console.log(input)
            return await ctx.prisma.comment.create({
                data: {
                    text: input.text,
                    answer: { connect: { id: input.answerId } },
                    author: { connect: { id: input.authorId } }
                }
            })
        }
    })