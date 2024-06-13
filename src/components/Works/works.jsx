import React from 'react'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.jpeg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.jpg'

const Works = () => {
  return (
    <section id='portfolio' className='md:py-32 pt-20'>
      <div className='containerr'>
        <h2 className='text-5xl text-center pb-6'>My Portfolio</h2>
        <p className='text-center font-light mb-16 px-3'>If you’re wondering what separates the good from the bad, <br />
          or looking for some web design inspiration, read on. We’ve
          rounded up <br />examples of top-notch portfolio sites from writers,
          designers, photographers, and more.</p>
        <div className='flex justify-around flex-wrap'>
          <div className="working image-container mb-12">
            <img src={portfolio6} alt='' />
          </div>
          <div className="working  image-container mb-12">
            <img src={portfolio5} alt='' />
          </div>
          <div className="working  image-container mb-12">
            <img src={portfolio3} alt='' />
          </div>
          <div className="working  image-container mb-12">
            <img src={portfolio4} alt='' />
          </div>
          <div className="working  image-container mb-12">
            <img src={portfolio2} alt='' />
          </div>
          <div className="working image-container mb-12">
            <img src={portfolio1} alt='' />
          </div>
        </div>
        {/* <div class="image-container">
        <img src={portfolio1} alt="Portfolio Image"/>
    </div> */}
      </div>
    </section >
  )
}
// context api
// props 
// single component 
// double component 

export default Works