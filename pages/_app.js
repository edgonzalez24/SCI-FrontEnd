import "../styles/tailwind.css"
import "../styles/globals.css"
import "../styles/style.scss"
import App from 'next/app';
import Layout from '../components/Layout';
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import {store, persistor} from '../store/store';
import {PersistGate} from 'redux-persist/integration/react'

class MyApp extends App{
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const {Component , pageProps} = this.props

    return (
      <Provider store={store} >
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>

      )
    }
  };
  const makestore = () => store;
  const wrapper = createWrapper(makestore);

  export default wrapper.withRedux(MyApp);
