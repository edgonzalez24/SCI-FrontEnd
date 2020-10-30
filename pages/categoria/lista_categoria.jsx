import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import All_Category from '../../components/Category/all_category';

const ListCategory = ({auth}) => {

  return (
    <>
      <Head>
        <title>Library APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth.token ? (
          <>
            <All_Category/>  
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

ListCategory.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(ListCategory);