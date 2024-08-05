import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductGroup from './components/ProductGroup'

function App() {

  return (
    <>
     <div className='all'>
      <section className='header relative'>
        <Header/>
      </section>
    <div className='body container m-auto'>
    <section className=' '>
        <Banner/>
      </section>
      <section className='product-group'>
        <ProductGroup/>
      </section>
    </div>
     </div>
    </>
  )
}

export default App
