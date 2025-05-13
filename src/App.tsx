import { RouterProvider } from 'react-router'
import './App.css'
import Navbar from './layout/Navbar'

import { router } from './routes'
function App() {

  
  return (
    <div className="flex flex-col flex-wrap">
      <Navbar />
      <RouterProvider router={router} />  
    </div>

  )
}

export default App
