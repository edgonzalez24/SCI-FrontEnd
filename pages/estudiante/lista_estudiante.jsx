import Head from 'next/head';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import actions from '../../store/actions';
import AllStudent from '../../components/Student/AllStudent';

const All_Student = ({auth}) => {

  return (
    <>
      <Head>
        <title>Estudiantes - SCI</title>
      </Head>
      {
        auth.token ? (<AllStudent/> ) : (
          <div className="h-screen flex justify-center items-center">
            <p>Porfavor! authentificarse</p>
          </div>
        )
      }
    </>
  )
}

All_Student.getInitialProps = async(ctx) => {
  await initialize(ctx);
}

export default connect(state => state, actions)(All_Student);