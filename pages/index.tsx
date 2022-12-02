import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-red-50">
      <Head>
        <title>ACEL - A Calculator for Every Language - Typescript, Next.js, React</title>
        <meta name="description" content="A demonstration calculator written in Typescript with React and Next.js which you can acutally use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
