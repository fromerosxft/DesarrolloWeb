import { Link, Outlet } from "react-router-dom"

function Contacto() {

  return (
    <>
    <div>
        <h1>aqui estan las actividades</h1>
    </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to = {`/actividades/actividad1`}>Actividad1</Link>
              </li>
              <li>
                <Link to = {`/actividades/actividad2`}>Actividad2</Link>
              </li>
            </ul>
          </nav>
        </div>
      <div>
          <Outlet />
      </div>
    </>
  )
}

export default Contacto