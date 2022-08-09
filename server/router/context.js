import * as trpc from '@trpc/server'
import { unstable_getServerSession as getServerSession } from 'next-auth'

import { authOptions as nextAuthOptions } from '../../pages/api/auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const createContext = async (opts) => {
    const req = opts?.req
    const res = opts?.res
    

    const session = req && res && (await getServerSession(req, res, nextAuthOptions))


    return {
        req,
        res,
        session,
        prisma
    }

}

export const createRouter = () => trpc.router()