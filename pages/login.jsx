import React, {useState} from 'react';
import FormLogin from '../components/Login/formLogin';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,

  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
    backgroundColor: "none",
    width: '100%'
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));
const Login = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const {msgError} = useSelector(state =>state.ui);
  const handleChange = () => {
    setOpen(!open);
    setClose(!close)
  };
  return (
    <>
    <Head>
      <title>Login - SCI</title>
    </Head>
    <div className="w-full relative">
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 w-full container mx-auto">
          <div className="w-full justify-center flex items-center relative h-screen sidebar container mx-auto px-5">
          <div className="flex justify-center items-center w-full lg:max-w-md">
            { (close) &&
              (<button type="button" className="bg-transparent absolute hover:border-white border-2 text-white font-bold py-2 px-8 rounded-full focus:outline-none flex" onClick={handleChange}>Iniciar Sesión<svg className="animate-bounce w-6 h-6 ml-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> </button>)
            }
            <Grow in={open}>
                <Paper elevation={4} className={classes.paper}>
                <FormLogin/>
              </Paper>
            </Grow>
          </div>
        </div>
        </div>
        <div className="lg:w-1/2 w-full h-screen">
          <div className="w-full h-screen">
            <img src="/gifs/animationBooks.gif" alt="Animation" className="w-ful h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
    {
      (msgError ) && (
        <div className="overflow-hidden">
          <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 absolute right-0 animated bounceInUp z-20"
            style={{'top': '90%'}}
            role="alert">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>{msgError}</p>
          </div>
        </div>
      )
    }
    </>
  );
}

export default Login;
