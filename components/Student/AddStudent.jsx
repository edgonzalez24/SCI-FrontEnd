import { Formik } from "formik";
import * as Yup from "yup";
import {useEffect} from 'react'
import {useDispatch, useSelector}from 'react-redux';
import { getCategory } from '../../store/actions/categoryAction';
import {addStudent} from '../../store/actions/studentAction';
import Slide from '@material-ui/core/Slide';
import {genreStudent, AcademicDegree, sectionStudent, teachers} from '../../public/global'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}



const Add_Estudent = () => {
  const [open, setOpen] = React.useState(true);
  const [transition, setTransition] = React.useState(undefined);
  const dispatch = useDispatch();
  const {loading, msgSuccess, msgError} = useSelector(state =>state.ui);

  const handleClose = () => {
    setOpen(false);
  };


return (
  <Formik
      initialValues={{ name: ""  , lastname:"", genre:"", academic_degree:"", section:"" , teacher:""}}
      onSubmit={async (values, {resetForm}) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const v = JSON.stringify(values, null, 2);
        const val = JSON.parse(v)
        // document.querySelector("#loading").style.display= 'block'
        dispatch(addStudent(val.name, val.lastname, val.genre, val.academic_degree, val.section, val.teacher))
        setTimeout(() => {
            resetForm();
            // document.querySelector("#loading").style.display= 'none'
        }, 2000);
      }}

    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Campo Requerido"),
      lastname: Yup.string()
        .required('Campo es requerido'),
      genre: Yup.string()
        .required('Campo Requerido'),
      academic_degree: Yup.string()
        .required('Campo Requerido')
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
            <div className="lg:h-screen bg_blue_gray overflow-hidden">
              <div className="container mx-auto flex justify-center items-center h-full">
                <div className="lg:w-4/6 w-full">
                  <h2 className="text-lg lg:text-3xl text-blue-500 font-bold text-center animated slideInRight">Agregar Nuevo Estudiante</h2>
                  <div className="w-full overflow-hidden">
                    <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 animated slideInLeft" onSubmit={handleSubmit}>
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Nombre del Estudiante
                              </label>
                              <input
                              name="name"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              open={open}
                              onBlur={handleBlur}
                              className={
                                errors.name && touched.name ? 
                                "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-red-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" : "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              } 
                              type="text" placeholder="Escriba el nombre del estudiante"/>
                              {errors.name && touched.name && (
                              <div className="text-red-700 text-xs">{errors.name}</div>
                            )}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Apellido del Estudiante
                              </label>
                              <input
                              name="lastname"
                              id="lastname"
                              value={values.lastname}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.lastname && touched.lastname ? 
                                "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-red-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" : "appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"} 
                              
                              type="text" placeholder="Escriba el apellido del estudiante"/>
                              {errors.lastname && touched.lastname && (
                              <div className="text-red-700 text-xs">{errors.lastname}</div>
                            )}
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-b md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  Genero del estudiante
                                </label>
                                <div className="relative">
                                  <select 
                                    name="genre"
                                    id="genre"
                                    value={values.genre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="" >Seleccione un género</option>
                                    {
                                      genreStudent.map( (item, index) => (
                                      <option key={index} value={item.genre}>{item.genre}</option>
                                      ))
                                    }
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                  </div>
                                </div>
                                {errors.genre && touched.genre && (
                                <div className="text-red-700 text-xs">{errors.genre}</div>
                              )}
                              </div>
                              <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                  Grado del estudiante
                                </label>
                                <div className="relative">
                                  <select 
                                    name="academic_degree"
                                    id="academic_degree"
                                    value={values.academic_degree}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="" >Seleccione un grado</option>
                                    {
                                      AcademicDegree.map( (item, index) => (
                                      <option key={index} value={item.degree}>{item.degree}</option>
                                      ))
                                    }
                                    
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                  </div>
                                </div>
                                {errors.academic_degree && touched.academic_degree && (
                                  <div className="text-red-700 text-xs">{errors.academic_degree}</div>
                                )}
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="flex flex-wrap  -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Sección del estudiante
                            </label>
                            <div className="relative">
                                  <select 
                                    name="section"
                                    id="section"
                                    value={values.section}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="" >Seleccione una sección</option>
                                    {
                                      sectionStudent.map( (item, index) => (
                                      <option key={index} value={item.section}>{item.section}</option>
                                      ))
                                    }
                                    
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                  </div>
                                </div>
                            </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Docente a cargo
                            </label>
                            <div className="relative">
                                  <select 
                                    name="teacher"
                                    id="teacher"
                                    value={values.teacher}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="" >Seleccione un docente</option>
                                    {
                                      teachers.map( (item, index) => (
                                      <option key={index} value={item.name}>{item.name}</option>
                                      ))
                                    }
                                    
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                  </div>
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
                                  Añadir
                                </button>
                            </span>
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

export default Add_Estudent ;