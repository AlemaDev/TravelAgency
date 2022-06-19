import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Auth = () => {
  const [ newAccount , setNewAccount ] = useState(false);
  
  const handleSignOrLog = (e) => {
    e.preventDefault();
    setNewAccount(!newAccount);
    console.log(newAccount);
  };

  return (
    <div>
      <span><Link to={'/'}><img className="logo-image" src={require('../../images/arrow.png')} alt={"return to previous page"} /></Link></span>
      <div className="flex items-center justify-center min-h-screen">
          <div className="px-20 py-6 mt-2 mb-6 text-left bg-white shadow-lg">
              <h3 className="text-2xl font-bold text-center">{ newAccount ? 'Crear cuenta' : 'Iniciar sesion' }</h3>
              <form action="">
                  <div className="mt-4">
                      {newAccount && (
                        <div>
                          <label className="block">Nombre de usuario</label>
                            <input type="text" placeholder="Nombre de usuario..."
                                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                      )
                      }
                      <div>
                          <label className="block">Email</label>
                                  <input type="text" placeholder="Email..."
                                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                      </div>
                      <div className="mt-4">
                          <label className="block">Contraseña</label>
                                  <input type="password" placeholder="Contraseña..."
                                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                      </div>
                      { newAccount && (
                        <div className="mt-4">
                          <label className="block">Confirmar contraseña</label>
                            <input type="password" placeholder="Contraseña..."
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                      )}
                      <div className="flex items-baseline justify-between">
                          <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">{newAccount ? 'Crear' : 'Entrar'}</button>
                          <button className="text-sm text-blue-600 hover:underline" onClick={ handleSignOrLog }>{ newAccount ? 'Iniciar sesion' : 'Crear cuenta' }</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
};

export default Auth;