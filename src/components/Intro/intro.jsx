import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import Portfolio from '../../assets/portfolio.png'
import HireMe from '../../assets/hire-me.png'


const Intro = () => {
    return (
        <section id='home' className='md:py-52 pt-40'>
            <div className="containerr flex flex-wrap items-center justify-between">
                <div className='introContent w-full md:w-1/2 px-3'>
                    <p className=" hello text-2xl font-light pb-4">Hello,</p>
                    <p className="introText text-4xl font-bold pb-2 ">I'm <strong className="introName text-yellow-300">Danial</strong></p>
                    <p className='introText text-4xl font-bold pb-4'>Website Developer</p>
                    <p className="introPara text-xl font-light leading-8 pb-6">I am a skilled web designer with experience <br /> in creating visuall appealing and user
                        friendly<br /> website</p>
                    <Link>
                        <button className="flex items-center justify-center btn bg-white text-black border-none px-5 py-3 rounded-2xl hover:bg-yellow-300 duration-200">
                            <img src={HireMe} alt='' className='contactImg h-6 w-6	object-cover mr-4'/>
                            Hire Me
                        </button>
                    </Link>
                </div>
                <div className='imgOne w-full md:w-1/2 flex justify-end'>
                    <img src={Portfolio} alt='' className='portfolio' />
                </div>
            </div>
        </section>
    )
}

export default Intro