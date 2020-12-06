import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AddStudent from '../../components/Student/AddStudent';

const Add_Student = ({auth}) => {

  return (
    <>
      <Head>
        <title>Estudiantes - SCI</title>
      </Head>
      {
        auth.token ? (<AddStudent/> ) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

Add_Student.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(Add_Student);