import React from 'react'
import Header from './components/header/Header'
import Section from './components/section/Section'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
export default function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto px-2  mb-2'>
        <Header />
        <Section />
        <Main />
        <Footer />
      </div>
    </>
  )
}
