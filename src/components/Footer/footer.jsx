import React from 'react'
import Facebook from '../../assets/footer-facebook.png';
import Instagram from '../../assets/footer-instagram.png';
import Twitter from '../../assets/footer-twitter.png';


const Footer = () => {
  return (
    <div>
      <section className='md:pt-0 pt-16'>

        <div className="containerr flex justify-center md:gap-16 gap-10 pb-12">
          <img src={Facebook} alt='' className=' md:w-16 w-14 md:h-16 h-14' />
          <img src={Instagram} alt='' className='md:w-16 w-14 md:h-16 h-14' />
          <img src={Twitter} alt='' className='md:w-16 w-14 md:h-16 h-14' />
        </div>
      </section>

      <section className='bg-white text-black p-2'>
        <div className="containerr footer text-center flex flex-wrap md:justify-between justify-center">
          <p>Design & Developed by Syed Umer</p>
          <p>© Copyright 2024. All Right Reserved.</p>
        </div>

      </section>
    </div>

  )
}

export default Footer