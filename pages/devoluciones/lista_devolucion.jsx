import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AllReturn from '../../components/Return/AllReturn';

const All_Return = ({auth}) => {

  return (
    <>
      <Head>
        <title>Devoluciones - SCI</title>
      </Head>
      {
        auth.token ? (<AllReturn/>) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

All_Return.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(All_Return);