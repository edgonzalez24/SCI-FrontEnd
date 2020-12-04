import {useState} from 'react';
import List_Book from './List_Book';
import List_Students from './List_Students';
import {useDispatch, useSelector}from 'react-redux';
import {addLoan} from '../../store/actions/loanAction'

const Register_Leans = () => {
  const dispatch = useDispatch();
  //Const
  const check_blue = '/icons/check.svg';
  const check_gray = '/icons/check_gray.svg';
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const date = `${day}-${month}-${year}`;
  const {loading, msgSuccess, msgError} = useSelector(state =>state.ui);


  // State
  const [tabSelect, setTabSelect] = useState(0);
  const [dataLoan, setDataLoan] = useState({
    idStudent: '',
    idBook: ''
  });
  const [message,setMessage] = useState('Oop! no ha seleccionado un Estudiante o un Libro')

  // Methods
  const changeTab = (value) => {
    setTabSelect(value)
  }
  const selectedStudent = (value) => {
    setDataLoan((prevState) => ({
      ...prevState,
      idStudent: value,
    }))
    setTabSelect(tabSelect + 1)
  }
  const selectedBook = (value) => {
    setDataLoan((prevState) => ({
      ...prevState,
      idBook: value
    }));
    setTabSelect(tabSelect + 1)
  }

  const sendData = () => {
    if(dataLoan.idStudent !== '' && dataLoan.idBook !== '') {
      dispatch(addLoan(dataLoan.idStudent, dataLoan.idBook, date));
      setDataLoan({
        idBook: '',
        idStudent: ''
      });
      setMessage('Se han hecho su registro');
    } else {
      alert('Error')
    }
  }

  const styles = 'bg-blue-500 absolute m-auto top-0 lg:top-auto bottom-0 left-0 animated bounceInRight';

  return (
    <div className="m-5 h-screen">
      <div className="mt-10 w-3/4">
        <div className="w-full flex relative lg:pb-4">
          <div
            className="w-1/3 cursor-pointer flex items-center"
            onClick={ () => changeTab(0)}
            >
            <img
              src={tabSelect === 0 ? check_blue : check_blue}
              alt="icon-check"
              className="mr-1"
            />
            <p
              className="font-bold font-poppins text-xs sm:text-sm transition duration-1000 ease-in-out hidden lg:block text-dark-blue-500"
            >
              Seleccionar Estudiante
            </p>
          </div>
          <div
            className="w-1/3 cursor-pointer flex items-center"
            onClick={ () => changeTab(1)}
            >
            <img
              src={tabSelect >= 1  && check_blue || tabSelect < 1 && check_gray}
              alt="icon-check"
              className="mr-1"
            />
            <p
              className="font-bold font-poppins text-xs sm:text-sm transition duration-1000 ease-in-out hidden lg:block text-dark-blue-500"
            >
              Seleccionar libro
            </p>
          </div>
          <div
            className="w-1/3 cursor-pointer flex items-center"
            onClick={ () => changeTab(2)}
            >
            <img
              src={tabSelect === 2  && check_blue || tabSelect < 2 && check_gray}
              alt="icon-check"
              className="mr-1"
            />
            <p
              className="font-bold font-poppins text-xs sm:text-sm transition duration-1000 ease-in-out hidden lg:block text-dark-blue-500"
            >
              Confirmación
            </p>
          </div>
        <div
            className={tabSelect===0 && `w-1/3 ${styles}` || tabSelect===1 && `w-2/3 ${styles}` || tabSelect===2 && `w-full ${styles}`}
            style={{height : '4px'}}
          />
        </div>
      </div>
      {
        (tabSelect === 0) && (<List_Students selectedStudent={selectedStudent}/>) ||
        (tabSelect === 1) && (<List_Book selectedBook={selectedBook} />) ||
        (tabSelect === 2) && (
          <div className="animated fadeIn">
            <div className="flex justify-center lg:mt-20">
              <div className="lg:w-1/4">
                <img src="/gifs/animation.gif" alt="animation" className="w-64 mx-auto"/>
                {
                  (dataLoan.idStudent === '' && dataLoan.idBook === '') ? (<p className="text-center text-2xl">{message}</p>) : (
                    <>
                      <p className="text-center text-2xl">¿Desea añadir un nuevo prestamo?</p>
                      <div className="flex justify-center mt-5">
                        <button className="text-white bg-blue-500 hover:text-blue-500 hover:bg-transparent focus:outline-none border border-blue-500 px-4 py-2 rounded-md transition duration-500 ease-in-out text-lg" onClick={sendData}>
                          Enviar
                        </button>
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
      <div>
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
    </div>
  )
}


export default Register_Leans;