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
  const {loading, msgError} = useSelector(state =>state.ui);
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
            <form action="#" className="w-full lg:max-w-md" onSubmit={handleSubmit}>
              <div className="mb-8">
              <label htmlFor="" className="text-white">Correo Electronico</label>
              <TextField
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "border-2 border-red-700 h-10 px-2 focus:outline-none pt-1 nimbus w-full text-gray-600"
                      : "border-2 h-10 px-2 focus:outline-none border-gray-500 pt-1 font-bold nimbus w-full text-gray-600 "
                  } />
              </div>
              <div className="mb-4">
              <label htmlFor="" className="text-white"> Password</label>
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
                        className="focus:outline-none"
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

                    className="w-full grovana-round bg-transparent text-lg hover:bg-transparent h-10 text-white border border-white cursor-pointer inline-flex items-center justify-center font-bold focus:outline-none">
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
          </div>
        );
      }}
    </Formik>
  )
}

export default formLogin;

