import { Link, Outlet } from "react-router-dom"
//import "./MenStyles/globalMenu.css"
// 
function MenuA() {
//////////////////////////
  return (
    <>
    <div>
      <div className="d-flex text-center">

        <div className="p-2 z-1 position-absolute flex-grow-1 bg-light">
          <Link to = {`/`}>SCEIE</Link>
        </div>
        <div className="p-2 w-100 bg-primary">
          <h1>ACTIVIDADES</h1>
        </div>
        
      </div>
      
      <nav className="d-flex justify-content-center">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <Link to = {`/actividades/reuniones`} className="nav-link">Reuniones</Link>
          </li>
          <li className="nav-item">
            <Link to = {`/actividades/ferias`} className="nav-link">Ferias</Link>
          </li>
        </ul>
      </nav>
      <div>
          <Outlet />
      </div>
    </div>
    
    </>
  )
}

export default MenuA
