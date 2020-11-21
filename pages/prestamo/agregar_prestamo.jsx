import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import Add_lead from '../../components/Leads/Add_lead';

const AddLead = ({auth}) => {

  return (
    <>
      <Head>
        <title>Prestamos - SCI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth.token ? (
          <div className="h-min-screen">
            <Add_lead/>  
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

AddLead.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(AddLead);