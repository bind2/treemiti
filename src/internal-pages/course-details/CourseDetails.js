import React from 'react'
// import './CourseDetails.scss'
import CourseCart from '../../components/course-cart/CourseCart'
import CourseData from '../../data/CourseData.json'
import { useParams } from 'react-router-dom'
import CartList from '../../components/cart-list/CartList'
import { HashLink as Link } from 'react-router-hash-link'


const CourseDetails = () => {
    const cartList = CourseData.map((data, index) => {
        const {img, name, path} = data
        return <CourseCart key={index} index={index} img={'.'+img} name={name} path={path}
        />
    })
    const params = useParams()
    console.log(params)
    const { name, title, discription } = CourseData[params.id]
    document.title = name
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
                                <p>Message us on <a href="https://wa.me/+919579573923?text=Hello! I am interested in one of your course / service"> whatsapp</a></p>
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