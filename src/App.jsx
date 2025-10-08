import React from 'react'
import Header from './components/header/Header'
import Section from './components/section/Section'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Skills from './components/section/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <>
    <div className='overflow-x-hidden px-2'>
      <Nav/>
      <Header/>
      <Section/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>



    </>
  )
}


