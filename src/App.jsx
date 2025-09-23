import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>

      <Toaster/>
      { !isAdminRoute && < Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route pat='/Movies' element={<Movies/>}/>
        <Route pat='/Movies/:id' element={<MovieDetails/>}/>
        <Route pat='/Movies/:id/:date' element={<SeatLayout/>}/>
        <Route pat='/my-bookings' element={<MyBookings/>}/>
        <Route pat='/favorite' element={<Favorite/>}/>
      </Routes>
      { !isAdminRoute && <Footer/>}
    </>
  )
}

export default App