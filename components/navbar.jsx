import Link from 'next/link'
import React, {useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import { deauthenticate } from '../store/actions/authAction';




const Navbar = ({auth}) => {
  const dispatch = useDispatch();
  const mainMenu = [{
    id: 1,
    name: "Inicio",
    slug: "/"
  },
  {
    id: 2,
    name: "Busqueda",
    slug: "/busqueda"
  },
  {
    id: 3,
    name: "Misión y Visión",
    slug: "/mision-y-vision"
  },
  {
    id: 7,
    name: "Iniciar Sesion",
    slug: "/login"
  }, 
  ]

  const AdminMenu = [
    {
      id: 1,
      name: "Inventario",
      subMenu : [
        {
          id: 1 ,
          name: "Agregar Libro",
          slug: "/agregar_inventario"
        }
      ]
    }
  ]
  const [showMinUser, setShowMinUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 
  const [open, setOpen] = useState(false);

  const handleLogout = () =>{
      dispatch(deauthenticate())
  }

  const handleClick = () => {
    setOpen(!open)
}
  return (
    <>
    <div className="flex flex-wrap w-full">
      {
        (showMenu) && (
          <nav className="bg-blue-500 lg:w-2/6 fixed z-20 h-screen animated slideInLeft">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                  </div>
                </div>
                {
                  (auth.token) && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </button>
                      <div className="ml-3 relative">
                        <div>
                          <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true" onClick={() => setShowMinUser(!showMinUser)}>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                          </button>
                        </div>
                        {
                          (showMinUser) ? (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-30">
                          <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Mi Perfil</a>
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Ajustes</a>
                            <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem" onClick={handleLogout}>Cerrar Sesion</a>
                          </div>
                        </div>
                          ) : null
                        }
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            <div className="block">
              <div className="px-2 pt-2 pb-3 flex flex-col">
                {
                  mainMenu.map((item, index) =>(
                      (auth.token && item.name === 'Iniciar Sesion') ? (
                        <>
                          <h2 className="text-xl w-56 text-white my-6 border-b border-white ">Menu de Administrador</h2>
                          {
                            AdminMenu.map((i, index) => (
                              <>
                              <div
                                key={index}
                                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out lg:text-xl">
                                {i.name}
                              </div>
                              {
                                i.subMenu.map((sub, index) =>(
                                  <Link
                                    href={sub.slug}
                                    key={index}
                                    >
                                    <a 
                                    onClick={ () => setShowMenu(!showMenu)}
                                    className="block -mt-2 w-64 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out pl-5">
                                      <div  onClick={ () => handleClick()}>
                                      {sub.name}
                                      </div>
                                    </a>
                                  </Link>
                                ))
                              }
                              </>
                            ))
                          }
                        </>
                      ) : (
                        <Link
                          href={item.slug}
                          key={index}
                          >
                          <a 
                          className="mt-1 w-64 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out lg:text-xl"
                          onClick={ () => setShowMenu(!showMenu)}>
                            <div onClick={ () => handleClick()}>
                              {item.name}
                            </div>
                          </a>
                        </Link>
                      )
                  ))
                }
              </div>
            </div>
          </nav>
        ) 
      }
      <div className="w-1/2 fixed z-20 right-0">
          <div className="w-full flex justify-end relative">
            <div className="block cursor-pointer mt-4 mr-5 " onClick={ () => setShowMenu(!showMenu)}>
              <HamburgerMenu
                  isOpen={open}
                  menuClicked={handleClick}
                  width={50}
                  height={30}
                  strokeWidth={3}
                  rotate={0}
                  className="font-bold leading-tight"
                  borderRadius={0}
                  color="#1c234d"
                  animationDuration={0.5}
                />
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
Navbar.getInitialProps = async(ctx) => {
  await initialize(ctx);
}
export default  connect(state => state, actions) (Navbar);