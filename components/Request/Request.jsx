import { Formik } from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector}from 'react-redux';
import { requestBook } from '../../store/actions/bookAction';



const Request = ({infoBook}) => {
  const dispatch = useDispatch();
  const {loading, msgSuccess, msgError} = useSelector(state =>state.ui);

return (
  <Formik
      initialValues={{ name: ""  , lastname:""}}
      onSubmit={async (values, {resetForm}) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const v = JSON.stringify(values, null, 2);
        const val = JSON.parse(v);

        dispatch(requestBook(val.name, val.lastname, infoBook.title_book, infoBook.isbn_book))
        setTimeout(() => {
            resetForm();
        }, 2000);
      }}

    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Campo Requerido"),
      lastname: Yup.string()
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
            <div className="lg:h-screen bg-gray-300 ">
              <div className="container mx-auto flex justify-center items-center h-full">
                <div className="lg:w-4/6 w-full">
                  <h2 className="text-lg lg:text-3xl text-blue-500 font-bold text-center animated slideInRight">Crear Solitud de Prestamo</h2>
                  <div className="w-full overflow-hidden">
                    <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 animated slideInLeft" onSubmit={handleSubmit}>
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/5 lg:pr-5 flex items-center">
                          <div>
                            <p className="italic">"No olvide completar la informacion"</p>
                            <img src="/gifs/book.gif" alt=""/>
                          </div>
                        </div>
                        <div className="w-full lg:w-4/5">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Nombre 
                              </label>
                              <input
                              name="name"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              open={open}
                              className={
                                errors.name && touched.name ? 
                                "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-red-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" : "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              } 
                              type="text" placeholder="Nombre"/>
                              {errors.name && touched.name && (
                              <div className="text-red-700 text-xs">{errors.name}</div>
                            )}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Apellido
                              </label>
                              <input
                              name="lastname"
                              id="lastname"
                              value={values.lastname}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.lastname && touched.lastname ? 
                                "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-red-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" : "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              } 
                              type="text" placeholder="Apellido"/>
                              {errors.lastname && touched.name && (
                                <div className="text-red-700 text-xs">{errors.lastname}</div>
                              )}
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
                              Enviar Solicitud
                            </button>
                        </span>
                      </div>
                        </div>
                      </div>
                    </form> 
                  </div>
                </div>
              </div>
              {
                (msgError || msgSuccess) && (
                  <div className="overflow-hidden">
                    <div className={
                    msgError ? 'flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 absolute right-0 animated bounceInUp z-20' : 'flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 absolute right-0 animated bounceInUp z-20'
                  }
                  style={{'top': '90%'}}
                  role="alert">
                      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                      <p>{msgError || msgSuccess}</p>
                    </div>
                  </div>
                )
              }
            </div>
        )
      }
    }
  </Formik>
)
}

export default Request;