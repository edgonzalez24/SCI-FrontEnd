import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import Add_Book from '../../components/Book/add_book';

const AddBook = ({auth}) => {

  return (
    <>
      <Head>
        <title>Library APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth.token ? (
          <>
            <Add_Book/>  
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

AddBook.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(AddBook);