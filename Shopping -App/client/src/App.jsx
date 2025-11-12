import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UserDashboard/>}/>
        <Route path='/about' element={<AdminDashboard/>}/>
        <Route path='/contact' element={<h1>Contact Page</h1>}/>
        <Route path='/login' element={<h1>Login Page</h1>}/>
        <Route path='/register' element={<h1>RegisterPage</h1>}/>
        <Route path='*' element={<h1>404 Error Page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
