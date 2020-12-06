import { Formik } from "formik";
import * as Yup from "yup";
import {useEffect, useState} from 'react'
import {useDispatch, useSelector}from 'react-redux';
import { getCategory } from '../../store/actions/categoryAction';
import {editBook} from '../../store/actions/bookAction';
import InputMask from 'react-input-mask' ;




const EditBook = (props) => {
  const { _id, title_book, isbn_book, editorial, autor, category, date_publication} = props.bookInfo;
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();
  const { categories } =  useSelector(state =>state.category);
  const {loading} = useSelector(state =>state.ui);

  useEffect(() => {
    dispatch(getCategory());
  }, [])


return (
  <Formik
      initialValues={{ title: title_book  , isbn: isbn_book, editor:autor, editorial:editorial, datePublication:date_publication , category:category ? category._id : ''}}
      onSubmit={async (values, {resetForm}) => {
        if(!values.title && !values.isbn && !values.editor && !values.editorial && !values.datePublication && !values.category) {
          document.querySelector("#error").style.display= 'block'
          setTimeout(() => {
              resetForm();
              document.querySelector("#error").style.display= 'none'
          }, 4000);
        } else {
          await new Promise(resolve => setTimeout(resolve, 500));
          const v = JSON.stringify(values, null, 2);
          const val = JSON.parse(v);
          dispatch(editBook(_id, val.title, val.isbn, val.editor, val.editorial, val.datePublication, val.category))
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
                    <h2 className="text-lg lg:text-3xl text-blue-500 font-bold text-center animated slideInRight mb-2">Editar Libro</h2>
                    <p id="error" className="text-red-500 text-center text-base font-extrabold hidden mb-2 animated fadeIn">Ningun dato se ha editado</p>
                      <div className="flex flex-col">
                        <div className="w-full">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Titulo de Libro
                              </label>
                              <input
                              name="title"
                              id="title"
                              value={values.title}
                              onChange={handleChange}
                              open={open}                
                              onBlur={handleBlur}
                              className="ppearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              type="text" 
                              placeholder={title_book}/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Codigo de Libro
                              </label>
                              <input
                              name="isbn"
                              id="isbn"
                              value={values.isbn}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              type="text" 
                              placeholder={isbn_book}/>
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Editor del Libro
                              </label>
                              <input
                              name="editor"
                              id="editor"
                              value={values.editor}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="ppearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              type="text" 
                              placeholder={autor}
                              />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Editorial de Libro
                              </label>
                              <input
                              name="editorial"
                              id="editorial"
                              value={values.editorial}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="ppearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              type="text" 
                              placeholder={editorial}/>
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Fecha de Publicación de Libro
                              </label>
                              <InputMask 
                                name="datePublication"
                                id="datePublication"
                                value={values.datePublication}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                mask="9999-99-99"
                                alwaysShowMask={false}
                                type="text"
                                placeholder={date_publication}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                              />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Categoria de Libro
                              </label>
                              <div className="relative">
                                <select 
                                  name="category"
                                  id="category"
                                  value={values.category}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                  <option value={category ? category._id : '' }>{category ? category.name_category : 'Seleccione una nueva categoria'}</option>
                                  {
                                    categories.map( (opt, index) => (
                                    <option key={index} value={opt._id}>{opt.name_category}</option>
                                    ))
                                  }
                                  
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                              </div>
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
                              Editar
                            </button>
                        </span>
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

export default EditBook;