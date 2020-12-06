import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const Layout =({ children, isAuthenticated }) => {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Library APP</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      <link rel="shortcut icon" href="/ico.png" type="image/x-icon"/>
    </Head>
    <Navbar/>
    {children}
    {
      (router.route !== '/registro' && router.route !== '/login') && (<Footer/>)
    }
    </>
  )
}
const mapStateToProps = (state) => (
  {isAuthenticated: !!state.auth.token}
);
export default connect(mapStateToProps, actions)(Layout);

