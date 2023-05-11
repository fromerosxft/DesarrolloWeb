
import { Nav } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function Proyectos() {

  return (
    <>
    <div>
        <h1>PROYECTOS</h1>
    </div>
    <div>
      <Nav variant="tabs">
        <ul>
          <Link to = {`/proyectos/electronica`}>Electronica</Link>
        </ul>
        <ul>
          <Link to={`/proyectos/robotica`}>Robotica</Link>
        </ul>
        <ul>
          <Link to={`/`}>inicio</Link>
        </ul>
      </Nav>
      

    
    </div>


      <div>
          <Outlet />
      </div>
    </>
  )
}

export default Proyectos