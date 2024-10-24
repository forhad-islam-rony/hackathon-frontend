
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Components/Home'
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login'

function App() {

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
