import React from 'react'
import Book from './component/Book'
import './component/App.css'
import Footer from './component/Footer'
  
const App = () => {
  return (
    <div className='booklist'>
      <Header/>
      <Book/>
      <Book/>
    </div>
  )
}
export default App
