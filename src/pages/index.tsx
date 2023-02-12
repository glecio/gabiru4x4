import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Pagina index</title>
    </Head>
    <main>
      <h1>Inicial</h1>
    </main>
    </>
  )
}
