import React from 'react'
import walMart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

const Clients = () => {
    return (
        <section id='clients' className='md:py-32 pt-16'>
            <div className="containerr">
            <h2 className='text-5xl text-center pb-6'>My Clients</h2>
            <p className='text-center font-light mb-16'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with iclude.
            </p>
            <div className='flex flex-wrap justify-around'>
                <img src={walMart} alt='' className='w-48 p-4 border border-white-500 md:mb-0 mb-4' />
                <img src={Adobe} alt='' className='w-48 p-4 border border-white-500 md:mb-0 mb-4' />
                <img src={Microsoft} alt='' className='p-4 w-48 border border-white-500 md:mb-0 mb-4' />
                <img src={Facebook} alt='' className='p-4 w-48 border border-white-500 md:mb-0 mb-4' />
            </div>
        </div>
    </section >
  )
}

export default Clients