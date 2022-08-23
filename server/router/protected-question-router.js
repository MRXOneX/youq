import { resolve } from 'styled-jsx/css';
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
            questionId: z.number()
        }),
        async resolve({ ctx, input }) {
            return await ctx.prisma.comment.create({
                data: {
                    text: input.text,
                    question: { connect: { id: input.questionId } },
                    author: { connect: { id: ctx?.session?.user?.id } }
                }
            })
        }
    })
    .mutation('create_comment_to_answer', {
        input: z.object({
            text: z.string(),
            answerId: z.number()
        }),
        async resolve({ ctx, input }) {
            console.log(input)
            return await ctx.prisma.comment.create({
                data: {
                    text: input.text,
                    answer: { connect: { id: input.answerId } },
                    author: { connect: { id: ctx?.session?.user?.id } }
                }
            })
        }
    })

    .mutation('rating_question', {
        input: z.object({
            isRating: z.boolean(),
            questionId: z.number()
        }),
        async resolve({ ctx, input }) {
            // let updateQuestion
            // const updateRating = async (userRating, questionRating) => {
            //     await ctx.prisma.user.update({
            //         where: {
            //             id: ctx?.session?.user?.id
            //         },
            //         data: {
            //             rating: userRating
            //         }
            //     })
            //     updateQuestion = await ctx.prisma.question.update({
            //         where: {
            //             id: input.questionId
            //         },
            //         data: {
            //             rating: questionRating
            //         }
            //     })
            // }


            // const question = await ctx.prisma.question.findUnique({
            //     where: {
            //         id: input.questionId
            //     }
            // })
            // const user = await ctx.prisma.user.findUnique({
            //     where: {
            //         id: ctx?.session?.user?.id
            //     }
            // })


            // const findRating = await ctx.prisma.rating.findFirst({
            //     where: {
            //         authorId: ctx?.session?.user?.id,
            //         questionId: input.questionId
            //     }
            // })
            // if (findRating) {
            //     if (findRating && findRating.rating !== input.isRating) {
            //         const ratingUser = input.isRating ? user.rating + 1 : user.rating - 1
            //         const ratingQuestion = input.isRating ? question.rating + 1 : question.rating - 1
            //         await updateRating(ratingUser, ratingQuestion)
            //     }
            // } else {
            //     const rating = await ctx.prisma.rating.create({
            //         data: {
            //             rating: input.isRating,
            //             author: { connect: { id: ctx?.session?.user?.id } },
            //             question: { connect: { id: input.questionId } }
            //         }
            //     })
    
            //     if (rating) {
            //         const ratingUser = rating.rating ? user.rating + 1 : user.rating - 1
            //         const ratingQuestion = rating.rating ? question.rating + 1 : question.rating - 1
    
            //         await updateRating(ratingUser, ratingQuestion)
            //     }
            // }

            // return updateQuestion
        }
    })