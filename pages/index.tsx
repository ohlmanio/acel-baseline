import Head from 'next/head'
import Calculator from '../components/Calculator'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACEL - A Calculator for Every Language - Typescript, Next.js, React</title>
        <meta name="description" content="A demonstration calculator written in Typescript with React and Next.js which you can acutally use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Calculator />
    </div>
  )
}
