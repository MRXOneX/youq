import superjson from 'superjson'
//
import { createRouter } from './context';

//  protected routes
import { protectedQuestionRouter } from './protected-question-router';
//  routes
import { questionRouter } from './question';
import { profileRouter } from './profile';




export const appRouter = createRouter()
    .transformer(superjson)
    .merge('question_protected.', protectedQuestionRouter)
    .merge('question.', questionRouter)

    .merge('profile.', profileRouter)