import Head from 'next/head';
import Carousel from '../components/Home/carousel'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home - SCI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel/>
    </>
  )
}
