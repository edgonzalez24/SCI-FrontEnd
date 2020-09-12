import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';
import { useRouter } from 'next/router'

const Layout =(props) => {
  const {children} = props;
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Library APP</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
    </Head>
    {
      (
        router.route !== '/registro' && router.route !== '/login'
      ) && (<Navbar/>)
    }
    {children}
    {
      (
        router.route !== '/registro' && router.route !== '/login'
      ) && (<Footer/>)
    }
    </>
  )
}
export default Layout;
