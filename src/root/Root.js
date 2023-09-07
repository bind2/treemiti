import React from 'react'
import Header from '../sections/header/Header'
import Courses from '../sections/courses/Courses'
import About from '../sections/about/About'
import Testimonials from '../sections/testimonials/Testimonials'
import Placements from '../sections/placements/Placements'
import Guidance from '../sections/guidance/Guidance'
import Contact from '../sections/contact/Contact'

const Root = () => {
  document.title = 'Treemiti | Professional IT Training Institute in Nashik'
  return (
    <React.Fragment>
        <Header/>
        <Courses/>
        <About/>
        <Testimonials/>
        <Placements/>
        <Guidance/>
        <Contact/>
    </React.Fragment>
  )
}

export default Root