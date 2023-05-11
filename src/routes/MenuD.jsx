import { Link, Outlet } from "react-router-dom"

function MenuD() {

  return (
    <>
    <div>
        <h1>COLABORADORES</h1>
    </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to = {`/colaboradores/integrantes`}>Integrantes</Link>
              </li>
              <li>
                <Link to = {`/colaboradores/auspiciadores`}>Auspiciadores</Link>
              </li>
              <li>
                <Link to = {`/`}>Inicio</Link>
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

export default MenuD