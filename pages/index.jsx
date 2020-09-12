import Head from 'next/head';
import Carousel from '../components/Home/carousel'
export default function Home() {
  return (
    <>
      <Head>
        <title>Library APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel/>
    </>
  )
}
