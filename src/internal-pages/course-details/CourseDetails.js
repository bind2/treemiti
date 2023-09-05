import React from 'react'
import './CourseDetails.scss'
import CourseCart from '../../components/course-cart/CourseCart'
import courseData from '../../courseData.json'
import { useParams } from 'react-router-dom'
import CartList from '../../components/cart-list/CartList'
import { HashLink as Link } from 'react-router-hash-link'

const CourseDetails = () => {
    const cartList = courseData.map((data, index) => {
        return <CourseCart key={index} id={index} img={data.img} name={data.name} />
    })

    const params = useParams()
    const { title, discription } = courseData[params.id]
    return (
        <section className='course-details-section'>
            <div className="container" id='course-details'>
                <h2>{title}</h2>
                <article dangerouslySetInnerHTML={{ __html: discription }}></article>
                <div className="carts">
                    <h3>Courses We Offer</h3>
                    <div>
                        <CartList />
                        <CartList />
                        <CartList />
                    </div>
                    <div>
                        <div className='cart-scope'>
                            <h6>Course Eligibility</h6>
                        </div>
                        <div className='cart-scope'>
                            <h6>Course Scope</h6>
                        </div>
                        <div className='cart-scope'>
                            <h6>How to Join?</h6>
                            <address>
                                <p>Call at +91 <a href="tel:+919579573923">9579573923</a></p>
                                <p>Message us on <a href="https://wa.me/+918766916602" target='_blank' rel='noreferrer'> whatsapp</a></p>
                                <p>Email on <a href="mailto:contact@treemiti.com">contact@treemiti.com</a></p>
                                <p>Please fill up the <Link to='/treemiti/#contact'>inqury from</Link></p>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="other-courses">
                    <h3>Our Other Courses</h3>
                    <div>
                        {cartList}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetails