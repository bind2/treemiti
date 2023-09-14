import React from 'react'
import CourseCart from '../../components/course-cart/CourseCart'
import CourseData from '../../data/CourseData.json'
import placementImg from '../../img/treemiti-placement-assistance.png'

const CareerGuidance = () => {
    document.title = 'Treemiti Informatics | Career Guidance'
    const cartList = CourseData.map((data, index) => {
        const { img, name, path } = data
        return <CourseCart key={index} index={index} img={img} name={name} path={path}
        />
    })

    return (
        <section className='career-guidance-section'>
            <div className="container" id='career-guidance'>
                <h2>
                    CAREER GUIDANCE
                    <br />
                    <small>A GUIDE FOR STUDENTS AND YOUNG PROFESSIONALS</small>
                </h2>
                <div className='creer-guidance-container'>
                    <aside>
                        <figure>
                            <img src={placementImg} alt="placement img" />
                        </figure>
                    </aside>
                    <article>
                        <p>
                            <strong>Thinking about a new career,</strong> or maybe just thinking outside of the box when it comes to your current one? In this day and age, there are countless opportunities for those willing to put in the time and effort to explore them. If you have a passion for something — anything — there’s probably a career path that will let you pursue it. From science and technology to arts, social services, business, and more, there are many different fields of work out there. The trick is figuring out which one could be the right fit for you. Working towards a new career can be an exciting prospect if you’re ready to take on new challenges. It may feel daunting at first if you’re not sure where to start in deciding what field might be right for you. However, with some research and planning the process won’t seem so scary after all.</p>
                        <br />
                        <p>Here is how you can choose the right career path for yourself:</p>
                        <br />
                        <h4>Step 1: Know What You’re Good At and What You Like</h4>
                        <br />
                        <p>Your skills and interests can help to guide you towards a career path that will be a good fit for you. For example, if you have a natural talent for languages, you could pursue a career in translation. Or, if you’re a skilled writer, you could try your hand at journalism. If you’re interested in working with children or animals, you could consider a career as a veterinarian or a wildlife biologist. You get the idea. Your interests and strengths can help guide you in the right direction. You may also want to consider what you like to do in your free time. If you enjoy drawing or photography, you could make a living off of your artistic skills. If you love sports, you could become a sports trainer or coach. If you’re good with computers, you could earn a living as a computer engineer. The list goes on.</p>
                        <br />
                        <h4>Step 2: Decide What Kind of Work You Want to Do</h4>
                        <br />
                        <p>As you consider potential career paths, you may find that certain careers are more appealing to you than others. Maybe you’ve drawn a few connections between your skills and interests and some of the career paths listed below. That’s great! If not, don’t worry. You can still use this information to help you narrow down your field of choice. As you look through various careers, consider what each position offers. Think about your daily responsibilities, the environment you’d work in, the skills required, and the education or experience you’ll need to be qualified for the job. You may find that some careers are more appealing than others. If you have trouble deciding between a few fields, don’t worry — you can use the next section to help you narrow them down further.</p>
                        <br />
                        <h4>Step 3: Find Out More About the Fields You’re Interested In</h4>
                        <br />
                        <p>As you research various careers, there are a few things you’ll want to keep in mind as you go. For example, you’ll want to know how much money you can expect to make in a given field. You’ll also want to consider the skills and education required for certain jobs. You may want to try to find out how much job security the field offers, too. If you want to be prepared for any bumps in the road as you work towards your new career, it’s a good idea to know as much as possible about the fields you’re considering. You can start by doing a bit of online research. You can also visit your local library to see what books they have on the subject. You can also check out Career Advice, which is a website dedicated to helping people find their career paths. They have tons of information on various careers and can help you decide if a given field may be right for you.</p>
                        <br />
                        <h4>Step 4: Ask Yourself Some Final Questions</h4>
                        <br />
                        <p>It’s important to ask yourself some final questions before you decide on a new career path. First, ask yourself if the field you’ve chosen is in high demand. If it isn’t, you may have trouble finding employment in the future. You don’t want to spend years training for a career that isn’t going to put food on the table. If you can, try to find a field that has a good track record for job stability. You may also want to consider how much it will cost to earn the necessary education or training for your chosen field. If you need to go back to school, will you have the time and money required to do so? If you need to relocate to a new area for work, will you be able to afford to do so?</p>
                        <br />
                        <h4>Conclusion</h4>
                        <p>Choosing a new career path can be an exciting prospect if you’re ready to take on new challenges. It may feel daunting at first if you’re not sure where to start in deciding what field to choose. However, with some research and planning the process won’t seem so scary after all. Here is how you can choose the right career path for yourself: Know what you’re good at and what you like, decide what kind of work you want to do, find out more about the fields you’re interested in, ask yourself some final questions, and then go for it!</p>
                        <br />
                        <h4>Still confuse? Career Tests will help you</h4>
                        <br />
                        <p>There are numerous career aptitude tests out there that can help you discover what profession is best compatible with your traits, skills, values, and personality. This is why we searched a list of best free career aptitude tests you can take right away</p>
                        <ul>
                            <li><a href="">123 free career aptitude test</a></li>
                            <li><a href="">Career Fitter career test</a></li>
                            <li><a href="">Truity's free career Test</a></li>
                            <li><a href="">Career Hunter</a></li>
                            <li><a href="">MAPP test</a></li>
                            <li><a href="">The Princeton Review career quiz</a></li>
                        </ul>
                    </article>
                </div>
                        <hr />
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

export default CareerGuidance