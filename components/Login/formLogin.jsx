import { Formik } from "formik";
import * as Yup from "yup";
import {useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import {Login} from '../../store/actions/authAction'
import {useDispatch, useSelector} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';


const formLogin= () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const {loading} = useSelector(state =>state.ui);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <Formik

    initialValues={{ email: ""  , password:"",}}
      onSubmit={async (values, {resetForm}) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const v = JSON.stringify(values, null, 2);
        const val = JSON.parse(v)
        dispatch(Login(val.email, val.password))
        setTimeout(() => {
            resetForm();
        }, 2000);
      }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Invalid format")
        .required("Campo Requerido"),
      password: Yup.string()
        .min(5, "Your password is too short")
        .required("Campo Requerido"),
    })}
    >
      {
      props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <div className="w-full flex justify-center">
            <form className="w-full lg:max-w-md" onSubmit={handleSubmit} noValidate autoComplete="off">
              <div className="mb-8 flex flex-col">
              <label htmlFor="" className="text-white font-bold">Correo Electronico</label>
              <TextField
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border-2 h-10 px-2 focus:outline-none border-gray-500 pt-1 font-bold nimbus w-full text-white " />
              </div>
              <div className="mb-4">
              <label htmlFor="" className="text-white font-bold"> Password</label>
                <Input
                  id="standard-adornment-password"
                  type={passwordShown ? 'text' : 'password'}
                  className="w-full text-white"
                  name="password"
                  value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisiblity }
                        onMouseDown={togglePasswordVisiblity }
                        className="focus:outline-none text-white"
                      >
                        {passwordShown ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="my-5">
                <span className="flex justify-center ">
                  <button
                    type="submit"
                    className="w-64 grovana-round bg-transparent text-lg hover:bg-transparent h-10 text-white border border-white cursor-pointer rounded-md inline-flex items-center justify-center font-bold focus:outline-none">
                    {
                      (loading) && (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white focus:outline-none"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        )
                    }
                      Acceder
                    </button>
                </span>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  )
}

export default formLogin;

