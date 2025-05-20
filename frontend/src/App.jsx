import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Detail from './pages/Detail';
import Company from './pages/Company';
import Contact from './pages/Contact';
import { ScrollToHash } from './pages/ScrollToHash';

function App() {

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watches" element={<Collection />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/aboutus" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
