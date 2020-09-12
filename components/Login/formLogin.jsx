import { Formik } from "formik";
import * as Yup from "yup";
import {useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
// import {AddBrand} from '../../store/actions/auth'
import {useDispatch, useSelector} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';


const formLogin= () => {
  // const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [open, setOpen] = useState(true);
  // const {loading, success, msgError} = useSelector(state =>state.ui);
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
        document.querySelector("#loading").style.display= 'block'
        // dispatch(AddBrand(val.email, val.nameBrand, val.urlWebsite,val.name, val.phone, val.numberStore, val.instagram, val.country, val.password, val.category, val.where_hear))
        setTimeout(() => {
          document.querySelector("#loading").style.display= 'none'
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
              <TextField
                  name="email"
                  id="email"
                  value={values.email}
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "border-2 border-red-700 h-10 px-2 focus:outline-none pt-1 nimbus w-full text-gray-600"
                      : "border-2 h-10 px-2 focus:outline-none border-gray-500 pt-1 font-bold nimbus w-full text-gray-600 "
                  } />
              </div>
              <div className="mb-4">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={passwordShown ? 'text' : 'password'}
                  className="w-full"
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

                    className="w-full grovana-round bg-black text-xs hover:bg-transparent hover:text-black h-10 text-white border border-black cursor-pointer inline-flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white hidden focus:outline-none" id="loading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                      Acceder
                    </button>
                </span>
              </div>
            </form>
            <div>
                  <div className="alert">
                    <Collapse in={open}>
                      <Alert
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                      >
                        Prueba
                      </Alert>
                    </Collapse>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  )
}

export default formLogin;

