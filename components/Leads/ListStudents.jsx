import {useEffect, useState} from 'react'
import {useDispatch, useSelector}from 'react-redux';
import { getStudents, searchStudent } from '../../store/actions/studentAction';
import Skeleton from '../customsPreloader/skeleton';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';

const ListStudents = ({students, pages, getStudents, selectedStudent}) => {
  const dispatch = useDispatch();
  const {loading, msgSuccess, msgError} = useSelector(state =>state.ui);

  const [valueSearch, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (valueSearch) {
      if (event.key === 'Enter') {
        dispatch(searchStudent(valueSearch))
        setTimeout(() => {
          setValue('')
        }, 1000);
      }
    }
  }
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event,value) => {
    setCurrentPage(value);
    getStudents(value);
  };
  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div className="animated fadeIn">
      <div className="w-full h-min-screen">
      <div className="w-full">
        <div className="flex justify-end">
          <div id="search_input_container" className="w-full lg:w-1/3 mt-6 bg-input rounded-lg flex flex-row mb-4 relative items-center border border-blue-200 ">
            <input
              value={valueSearch}
              type="text"
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              className="h-10 sm:h-10 md:h-12 w-full placeholder-gray-60 pl-4 bg-gray-200 rounded-lg focus:text-gray-cuenta-b focus:outline-none focus:bg-white focus:placeholder-opacity-0 transition duration-500 ease-in-out"
              placeholder="Buscar estudiante"
            />
            <button
              id="search_btn"
              className="h-12 w-10 mx-auto absolute inset-y-0 right-0 focus:outline-none"
            >
                <img src="/icons/search.svg" alt="icon-search" onClick={handleChange} />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="w-full">
          <h2 className="text-lg lg:text-3xl text-blue-500 font-bold text-center">Lista de estudiantes</h2>
          {
            (students.length > 0) ? (
              <div className="w-full">
                <div className="bg-white shadow-lg rounded-lg">
                {
                  (loading) ? (<Skeleton/>) : (
                    <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Número
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Nombre del Estudiante
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Género
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Grado Escolar
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Docente Responsable
                              </th>
                              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                              </th>
                            </tr>
                          </thead>
                          {
                            students.map( (student, index) => (
                              <tbody 
                              key={index}
                              className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                { `${student.name} ${student.lastname}` }
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {student.genre}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {student.academic_degree}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {student.teacher}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap text-center text-base leading-5 font-medium">
                                {
                                  (!student.loanStatus) ? (
                                    <button
                                      className="text-white bg-blue-500 hover:text-blue-500 hover:bg-transparent focus:outline-none border border-blue-500 px-4 py-2 rounded-md transition duration-500 ease-in-out"
                                      onClick={() => selectedStudent(student._id)}
                                    >
                                      Añadir
                                    </button>
                                  ) : (
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                      Tiene un prestamo
                                    </span>
                                  )
                                }
                              </td>
                            </tr>
                          </tbody>
                            ))
                          }
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                  )
                }
            </div>
          </div>
        
            ) : (
              <h2 className="text-lg italic text-blue-500 text-center animated slideInLeft">No se ha encontrado ningún registro</h2>
            ) 
          }
        </div>
        {
          (msgError || msgSuccess) && (
            <div
              id="alertMsg"
              className="overflow-hidden">
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
        <div className="mt-5 w-full flex justify-center">
          <Pagination count={pages} defaultPage={1} className="focus:outline-none" onChange={handleChangePage} />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  students: state.student.students,
  pages: state.student.pages,
});

const mapDispatchToProps = (dispatch) => ({
  getStudents: (currentPage) => dispatch(getStudents(currentPage))
});

export default connect(mapStateToProps, mapDispatchToProps) (ListStudents);