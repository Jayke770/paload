import NextAuth from "next-auth"
import Google from 'next-auth/providers/google'
export default NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 15 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    pages: {
        signIn: '/auth'
    }
})