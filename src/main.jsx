//npm run dev

//npm view <pkg> version
//React v18.2.0
//router v6.10.0
//react-bootstrap v2.7.4
//bootstrap v5.2.3
//npm uninstall <pkg>
//npm uninstall -g <pkg> <--global

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MenuA from './routes/MenuA'
import MenuB from './routes/MenuB'
import MenuC from './routes/MenuC'
import MenuD from './routes/MenuD'

import MenAsecA from './routes/MenA/MenAsecA'
import MenAsecB from './routes/MenA/MenAsecB'

import MenBsecA from './routes/MenB/MenBsecA'
import MenBsecB from './routes/MenB/MenBsecB'

import MenCsecA from './routes/MenC/MenCsecA'
import MenCsecB from './routes/MenC/MenCsecB'

import MenDsecA from './routes/MenD/MenDsecA'
import MenDsecB from './routes/MenD/MenDsecB'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/actividades",
    element: <MenuA />,
    children:[
      {
        path: "/actividades/reuniones",
        element: <MenAsecA />
      },
      {
        path: "/actividades/ferias",
        element: <MenAsecB />
      }
    ]
  },
  {
    path: "/blog",
    element: <MenuB />,
    children:[
      {
        path: "/blog/infografias",
        element: <MenBsecA />
      },
      {
        path: "/blog/investigacion",
        element: <MenBsecB />
      }
    ]
  },
  {
    path: "/proyectos",
    element: <MenuC />,
    children: [
      {
        path: "/proyectos/electronica",
        element: <MenCsecA />
      },
      {
        path: "/proyectos/robotica",
        element: <MenCsecB />
      }
    ]
  },
  {
    path: "/colaboradores",
    element: <MenuD />,
    children:[
      {
        path: "/colaboradores/integrantes",
        element: <MenDsecA />
      },
      {
        path: "/colaboradores/auspiciadores",
        element: <MenDsecB />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
