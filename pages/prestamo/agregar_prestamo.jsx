import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AddLead from '../../components/Leads/AddLead';

const Add_Lead = ({auth}) => {

  return (
    <>
      <Head>
        <title>Prestamos - SCI</title>
      </Head>
      {
        auth.token ? (<AddLead/>) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

Add_Lead.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(Add_Lead);