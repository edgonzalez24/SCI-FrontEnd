import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AllCategory from '../../components/Category/AllCategory';

const All_Category = ({auth}) => {

  return (
    <>
      <Head>
        <title>Categoria - SCI</title>
      </Head>
      {
        auth.token ? (<AllCategory/>) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

All_Category.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(All_Category);