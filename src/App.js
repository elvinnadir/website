import React from 'react'
import { Footer, Blog, Posibility, Features, WhatGPT3, Header } from './containers'
import { Brand, CTA, Navbar } from './components'

import './App.css'
function App() {
  return (
    <div className="App">
      <dir className='gradient__bg'>
        <Navbar />
        <Header />
      </dir>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
