import { Navbar, Page } from 'konsta/react'
import Head from 'next/head'
import { Features, Header, Nav, Products, Footer } from '../components'
export default function Home() {
  return (
    <Page>
      <Head>
        <title>PaLoad</title>
      </Head>
      <Nav />
      <Header />
      <Features />
      <Products />
      <Footer />
    </Page>
  )
}