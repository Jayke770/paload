import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar"
import { App } from 'konsta/react'
import { SessionProvider } from 'next-auth/react'
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <App theme='material' safeAreas dark>
        <NextNProgress
          color="#651fff"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true} />
        <Component {...pageProps} />
      </App>
    </SessionProvider>
  )
}