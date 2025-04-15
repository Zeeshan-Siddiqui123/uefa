import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './Components/Table';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='table' element={<Table />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
