import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AllLead from '../../components/Leads/AllLead';

const All_Lead = ({auth}) => {

  return (
    <>
      <Head>
        <title>Prestamos - SCI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth.token ? (<AllLead/>) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

All_Lead.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(All_Lead);