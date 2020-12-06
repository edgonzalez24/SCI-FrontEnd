import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AddBook from '../../components/Book/AddBook';

const Add_Book = ({auth}) => {
  return (
    <>
      <Head>
        <title>Libros - SCI</title>
      </Head>
      {
        auth.token ? (<AddBook/>) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

Add_Book.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(Add_Book);