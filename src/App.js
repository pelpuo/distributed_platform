import "./App.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import SystemType from "./pages/SystemType"
import PureComputing from "./pages/PureComputing"

import React from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SystemType/>
  }
])

function App() {
  return (
    <div className='App-outer font-montserrat'>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
