import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import actions from '../store/actions';
import Router from 'next/router';

const DashBoard = ({auth}) => {

  return (
    <>
      <Head>
        <title>Library APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth.token ? (
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dignissimos pariatur unde accusamus doloribus sit maxime debitis dolorem voluptatum, cumque quas velit minima animi similique ipsum, qui tenetur veniam quis?
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

DashBoard.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(DashBoard);
