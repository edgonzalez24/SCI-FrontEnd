import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AddCategory from '../../components/Category/AddCategory';

const Add_Category = ({auth}) => {

  return (
    <>
      <Head>
        <title>Categoria - SCI</title>
      </Head>
      {
        auth.token ? ( <AddCategory/>) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

Add_Category.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(Add_Category);