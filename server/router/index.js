import superjson from 'superjson'
//
import { createRouter } from './context';
import { protectedQuestionRouter } from './protected-question-router';


export const appRouter = createRouter()
    .transformer(superjson)
    .merge('question.', protectedQuestionRouter)