import NextAuth from "next-auth/next";

import GithubProvider from 'next-auth/providers/github'

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: '71368b02fd7a5d4f93a2',
            clientSecret: '79f8294473e6e2174b0ba906517c06565efb21b7'
        })
    ]
})