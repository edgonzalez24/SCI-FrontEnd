import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import Add_Category from '../../components/Category/add_category';

const AddInventory = ({auth}) => {

  return (
    <>
      <Head>
        <title>Categoria - SCI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth.token ? (
          <>
            <Add_Category/>  
          </>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

AddInventory.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(AddInventory);