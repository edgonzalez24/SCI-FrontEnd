import React, {useState} from 'react';
import FormLogin from '../components/Login/formLogin';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
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
  const [close, setClose] = useState(true)

  const handleChange = () => {
    setOpen(!open);
    setClose(!close)
  };
  return (
            <div className="w-full relative">
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 w-full container mx-auto">
                  <div className="w-full justify-center flex items-center relative h-screen bg-teal-500 container mx-auto px-5">
                  <div className="flex justify-center items-center w-full lg:max-w-md">
                  { (close) &&
                  (<button type="button" className="bg-teal-500 hover:bg-transparent absolute hover:border-white border-2 text-white font-bold py-2 px-8 rounded-full focus:outline-none flex" onClick={handleChange}>Registrarse <svg className="animate-bounce w-6 h-6 ml-3 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg> </button>)
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
            <img src="/images/register/monster2.gif" alt="monsterAnimation" className="w-ful h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
