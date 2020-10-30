import { Formik } from "formik";
import * as Yup from "yup";
import {useEffect, useState} from 'react'
import {useDispatch, useSelector}from 'react-redux';
import {editCategory} from '../../store/actions/categoryAction';
import Slide from '@material-ui/core/Slide';
import InputMask from 'react-input-mask' ;



function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}



const Edit_Category = (props) => {
  const { _id, name_category} = props.categoryInfo;
  const [open, setOpen] = React.useState(true);
  const [transition, setTransition] = React.useState(undefined);
  const dispatch = useDispatch();
  const {loading} = useSelector(state =>state.ui);
  const {errorForm, setErrorForm} = useState(false)

  const handleClose = () => {
    setOpen(false);
  };



return (
  <Formik
      initialValues={{ name_category: name_category}}
      onSubmit={async (values, {resetForm}) => {
        if(!values.name_category) {
          document.querySelector("#error").style.display= 'block'
          setTimeout(() => {
              resetForm();
              document.querySelector("#error").style.display= 'none'
          }, 4000);
        } else {
          await new Promise(resolve => setTimeout(resolve, 500));
          const v = JSON.stringify(values, null, 2);
          const val = JSON.parse(v);
          dispatch(editCategory(_id, val.name_category))
          setTimeout(() => {
              resetForm();
          }, 2000);
        }
      }}
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
            <div className="">
              <div className="container mx-auto flex justify-center items-center h-full">
                <div className="w-full">
                  <div className="w-full overflow-hidden">
                    <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <h2 className="text-lg lg:text-3xl text-blue-500 font-bold text-center animated slideInRight mb-2">Editar Categoria</h2>
                    <p id="error" className="text-red-500 text-center text-base font-extrabold hidden mb-2 animated fadeIn">Ningun dato se ha editado</p>
                      <div className="flex flex-col">
                        <div className="w-full">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Titulo de Libro
                              </label>
                              <input
                              name="name_category"
                              id="name_category"
                              value={values.name_category}
                              onChange={handleChange}
                              open={open}                
                              onBlur={handleBlur}
                              className="ppearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              type="text" 
                              placeholder={name_category}/>
                            </div>
                          </div>
                        </div>
                        <div className="my-5">
                        <span className="flex justify-center ">
                          <button
                            type="submit"

                            className="grovana-round bg-blue-500 text-lg hover:bg-transparent hover:text-blue-500 py-2 text-white cursor-pointer inline-flex items-center justify-center font-bold focus:outline-none w-40 border border-blue-500 transition duration-500 ease-in-out">
                              {
                                (loading) && (
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500 focus:outline-none" id="loading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                )
                              }
                              Editar
                            </button>
                        </span>
                      </div>
                      </div>
                    </form> 
                  </div>
                </div>
              </div>
            </div>
        )
      }
    }
  </Formik>
)
}

export default Edit_Category ;