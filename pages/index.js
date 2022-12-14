import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>

      <Header />

      <main>
        <Hero />
      </main>
    </>
  )
}
