import React from 'react'
import './App.css'
import Navbar from './component/shared/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Body from './component/Body'
import Inbox from './component/Inbox'
import Email from './component/Email'
import SendMail from './component/SendMail'

function App() {
  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Inbox />} />
            <Route path="/mail/:id" element={<Email />} />
          </Route>
        </Routes>
      </Router>
      <div className='absolute w-[40%] bg-white bottom-1 right-20 z-10'>
        <SendMail />
      </div>
    </div>
  )
}

export default App