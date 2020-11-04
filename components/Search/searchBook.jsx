import { useState } from 'react';
import { search } from '../../store/actions/bookAction';
import {useDispatch, useSelector}from 'react-redux';

const SearchBook = () => {
  const dispatch = useDispatch();
  const [valueSearch, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (valueSearch) {
      if (event.key === 'Enter') {
        dispatch(search(valueSearch))
        setTimeout(() => {
          setValue('')
        }, 1000);
      }
    }
  }

  return (
    <div className="">
      <div className="flex justify-end">
        <div id="search_input_container" class="w-full lg:w-1/3 mt-6 bg-input rounded-lg flex flex-row mb-10 relative items-center border border-blue-200 ">
          <input
            value={valueSearch}
            type="text"
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            class="h-10 sm:h-10 md:h-12 w-full placeholder-gray-60 pl-4 bg-gray-200 rounded-lg focus:text-gray-cuenta-b focus:outline-none focus:bg-white focus:placeholder-opacity-0 transition duration-500 ease-in-out"
            placeholder="Busqueda"
          />
          <button
            id="search_btn"
            class="h-12 w-10 mx-auto absolute inset-y-0 right-0 focus:outline-none"
          >
              <img src="/icons/search.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBook;