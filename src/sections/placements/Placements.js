import React from 'react'
import Card from '../../components/slider-cart/Card';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import CarouselData from '../../data/Carousel.json'

const Placements = (props) => {
  const responsive = {
    largeLaptop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5
    },
    laptop: {
      breakpoint: { max: 1199, min: 992 },
      items: 4
    },
    smallLaptop: {
      breakpoint: { max: 991, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 767, min: 576 },
      items: 2
    },
    largeMobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1
    },
  };

  const carouselList = CarouselData.map((data, index) => {
    const { name, img, field, company } = data
    return <Card key={index} name={name} img={img} field={field} company={company} />
  })
  return (
    <section className='placements-section'>
      <div className="container" id='placements'>
        <h2>OUR PLACEMENTS</h2>
        <Carousel
          infinite={true}
          autoPlay={props.deviceType !== "largeMobile" ? true : false}
          className='sliderCont'
          responsive={responsive}
          draggable={false}
        >
          {carouselList}
        </Carousel>
      </div>
    </section>
  )
}

export default Placements