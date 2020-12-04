
import React, {useState, useEffect} from 'react';

const DarkMode = () => {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };
  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));

  }, [checked]);
  return (
    <label 
      htmlFor="toogleA"
      className="flex items-center cursor-pointer"
    >
      <div className="relative">
        <input 
          id="toogleA"
          type="checkbox"
          className="hidden"
          defaultChecked={checked}
          onChange={() => toggleThemeChange()}
          />
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" />
      </div>
      <div className="ml-3 text-white font-medium" />
    </label>
  )
}

export default DarkMode;