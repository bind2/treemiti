import React, { useEffect } from 'react'
// import './Placements.scss'
import cimg from '../../img/pexels-sindre-fs-1040881.jpg'

const Placements = () => {

useEffect(()=>{
  const wrapper = document.querySelector(".wrapper")
  const carousel = document.querySelector(".carousel")
  const arrowBtn = document.querySelectorAll(".wrapper i")
  const firstCardWidth = carousel.querySelector('.card').offsetWidth
  const carouselChildrens = [...carousel.children]

  let isDragging = false, startX, startScrollLeft, timeoutId

  let cardPreView = Math.round(carousel.offsetWidth / firstCardWidth)

  carouselChildrens.slice(-cardPreView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
  })

  carouselChildrens.slice(0, -cardPreView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML)
  })

  arrowBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      carousel.scrollLeft = btn.id === 'left' ? -firstCardWidth : firstCardWidth
    })
  })

  const dragStart = (e) => {
    isDragging = true
    carousel.classList.add('dragging')
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
  }

  const dragging = (e)=>{
    if(!isDragging) return
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  const dragStop = () =>{
    isDragging = false
    carousel.classList.remove('dragging')
  }

  const autoPlay = () =>{
    if(window.innerWidth < 800) return
    timeoutId = setTimeout(()=> carousel.scrollLeft += firstCardWidth, 2500)
  }

  autoPlay()

  const infiniteScroll = () =>{
    if(carousel.scrollLeft === 0){
      carousel.classList.add('no-transition')
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
      carousel.classList.remove('no-transition')
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
      carousel.classList.add('no-transition')
      carousel.scrollLeft = carousel.offsetWidth
      carousel.classList.remove('no-transition')
    }
    clearTimeout(timeoutId)
    if(!wrapper.matches(':hover')) autoPlay()
  }

  carousel.addEventListener('mousedown', dragStart)
  carousel.addEventListener('mousemove', dragging)
  carousel.addEventListener('mouseup', dragStop)
  carousel.addEventListener('scroll', infiniteScroll)
  wrapper.addEventListener('mouseenter', ()=> clearTimeout(timeoutId))
  wrapper.addEventListener('mouseleave', autoPlay)

})


  return (
    <section className='placements-section'>
      <div className="container" id='placements'>
        <h2>OUR PLACEMENTS</h2>

        <div className="carousel-container">
          <div className="wrapper">
            <i className="fa-solid fa-angle-left" id='left'></i>
            <ul className="carousel">
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Full Stack Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
              <li className='card'>
                <div className="img"><img src={cimg} alt="img" draggable='false'/></div>
                <h2>Deepak Bind</h2>
                <span>Web Developer</span>
                <h4>Treemiti - Nashik</h4>
              </li>
            </ul>
            <i className="fa-solid fa-angle-right" id='right'></i>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Placements