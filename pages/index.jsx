import Head from 'next/head';
import Carousel from '../components/Home/carousel'
const Home = () => {
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

export default Home;