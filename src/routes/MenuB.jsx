import { Link, Outlet } from "react-router-dom"
//import './MenStyles/MenuStyles.css'


function Blog() {

  return (
    <>
    <div className="d-flex justify-content-center">
        <h1>BLOG</h1>
    </div>
    <div className="d-flex justify-content-center">
     <ul className="nav nav-underline">
        <li className="nav-item">
          <Link to = {`/`} className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to = {`/blog/infografias`} className="nav-link">Infografias</Link>
        </li>
        <li className="nav-item">
          <Link to = {`/blog/investigacion`} className="nav-link">Investigacion</Link>
        </li>
        
      </ul>
    </div>
      
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default Blog