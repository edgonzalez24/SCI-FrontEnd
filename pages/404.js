import Head from 'next/head';
const Custom404 = () => {
  return( 
    <>
    <Head>
      <title>No Econtrado</title>
    </Head>
    <div className="container mx-auto w-full h-screen flex justify-center items-center">
      <img src="/images/404.jpg" alt="image"/>
    </div>
    </>
  )
};

export default Custom404;