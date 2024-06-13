import React from 'react'
import './skills.css';
import UiUx from '../../assets/ui-ux.png';
import WebDesign from '../../assets/webDesign.png';
import appDesign from '../../assets/appdesign.png';

const Skills = () => {
    return (
        <section id='do' className='md:py-32 pt-20'>
            <div className="containerr">
                <h2 className='text-5xl text-center pb-6 px-3'>
                    What I do
                </h2>
                <p className='text-center font-light text-base pb-16 px-3'>I am a skilled and passionate web designer
                    with experience in creating visually appealing <br /> and user friendly websites.
                    I have a strong understanding of design and a keen eye for detail. <br/>I am
                    proficient in HTML, CSS, and Javascript, as well as design software such<br/>
                    Adobe photoshop and Illustrate</p>
                <div>
                    <div className='bg-custom-gray flex justify-center md:justify-start items-center px-4	py-6 rounded-xl w-10/12 md:w-8/12 m-auto mb-8'>
                        <img src={UiUx} alt='' className='h-24 w-24' />
                        <div className='pl-4'>
                            <h2 className='text-2xl pb-2'>UI/UX Design</h2>
                            <p className='font-light text-sm'>This is a demo text, You can
                            write your own content here</p>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-start items-center bg-custom-gray px-4 py-6 rounded-xl w-10/12 md:w-8/12 m-auto mb-8'>
                        <img src={WebDesign} alt='' className='h-20 w-24' />
                        <div className='pl-4'>
                            <h2 className='text-2xl pb-2'>Website Design</h2>
                            <p className='font-light text-sm'>This is a demo text, You can
                            write your own content here</p>
                        </div>
                    </div>
                    <div className='bg-custom-gray flex justify-center md:justify-start items-center px-4 py-6 rounded-xl w-10/12 md:w-8/12 m-auto'>
                        <img src={appDesign} alt='' className='h-20 w-24' />
                        <div className='pl-4'>
                            <h2 className='text-2xl pb-2'>App Design</h2>
                            <p className='font-light text-sm'>This is a demo text, You can
                            write your own content here</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills