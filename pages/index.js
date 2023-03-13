import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Memes from '@/components/Memes'
import fs from 'fs'
import path from 'path'
export default function Home({ memes }) {
  return (
    <>
      <Head>
        <title>TEST WEB</title>
        <meta name="description" content="my web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex items-center justify-center w-full p-20">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
          <a>Vitaj na webe</a>
        </h1>
      </main>

      <Memes memes={memes} />

    </>
  )
}
export function getServerSideProps() {
  let memes = fs.readdirSync(path.join(process.cwd(), "public/memes"))
  return {
    props: {
      memes: memes
    },
  }
}
