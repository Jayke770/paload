import Head from "next/head"
import { Card, Page, Button } from "konsta/react"
import { FcGoogle } from 'react-icons/fc'
import { getSession, signIn } from 'next-auth/react'
export default function Auth() {
    return (
        <Page className="flex justify-center items-center">
            <Head>
                <title>Get Started with PaLoad</title>
            </Head>
            <Card
                header={
                    <span className="text-lg font-semibold text-deep-purple-accent-400">Create or Login your account</span>
                }
                className="!rounded-lg !shadow-deep-purple-400/50 w-full md:w-96 border-[0.1px] border-deep-purple-400/50">
                <div className="p-5">
                    <Button
                        clear
                        rounded
                        large
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
                        <div className="flex flex-row items-center justify-start gap-3">
                            <FcGoogle className="w-5 h-5" />
                            <span>Continue with Google</span>
                        </div>
                    </Button>
                </div>
            </Card>
        </Page>
    )
}
export async function getServerSideProps(ctx) {
    const user = await getSession(ctx)
    if (user) {
        return {
            props: {},
            redirect: {
                destination: 'dashboard'
            }
        }
    } else {
        return {
            props: {}
        }
    }
}