//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Link, Outlet } from "react-router-dom"


function App() {

  return (
    <>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className="container-fluid">
            <a href='#' className='navbar-brand'>SCEIE</a>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="bi bi-three-dots"></span>
            </button>
          <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to = {`/actividades`} className='nav-link active'>Actividades</Link>
              </li>
              <li className='nav-item'>
                <Link to = {`/blog`} className='nav-link active'>Blog</Link>
              </li>
              <li className='nav-item'>
                <Link to = {`/proyectos`} className='nav-link active'>Proyectos</Link>
              </li>
              <li className='nav-item'>
                <Link to = {`/colaboradores`} className='nav-link active'>Colaboradores</Link>
              </li>
            </ul>
            <form role='search' className="d-flex">
              <input type="text" className="form-control me-2" placeholder='Search' aria-label='Search'/>
              <button className="btn btn-outline-success" type='submit'>Buscar</button>
            </form>
          </div>
          
          </div>
          
        </nav>

      <div className='pagina0'>
        
      </div>
      
        <div>

        </div>
      
      <div>
          <Outlet />
      </div>
      
    </>
  )
}

export default App
