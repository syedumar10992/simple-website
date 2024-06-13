import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4zy6cuo', 'template_z2ws1q8', form.current, {
        publicKey: 't8elM7piZGivSG2uU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact' className='md:py-24 pt-16'>
      <div className="containerr">
        <h2 className='text-5xl text-center pb-6'>
          Contact Me
        </h2>
        <p className='text-center font-light mb-6'>
          I have had the opportunity to work with a diverse group of companies.<br />
          Some of the notable companies I have worked with iclude.
        </p>
        {/* <form className='flex flex-wrap justify-center' ref={form} onSubmit={sendEmail}>
                    <input type="text" name='your_name' className="bg-custom-gray name max-w-2xl w-full outline-none mb-4 px-4 py-2 rounded-md" placeholder='Your Name' />
                    <input type="email" name='your_email' className="bg-custom-gray email max-w-2xl w-full outline-none mb-4 px-4 py-2 rounded-md" placeholder='Your Email' />
                    <textarea name="message" rows="5" placeholder='Your Message' id="" className='rounded-md bg-custom-gray border-none outline-none max-w-2xl w-full px-4 py-2 resize-none	'></textarea>
                    <button type='submit' value='send' className='bg-white text-black py-3 w-full max-w-2xl'>Submit</button>
                </form> */}
                
        <form className=" p-6 max-w-2xl w-full m-auto" ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <input type="text" name="from_name" className="bg-custom-gray text-white w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-gray-500" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <input type="email" name="from_email" className="bg-custom-gray text-white w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-gray-500" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <textarea name="message" rows="5" className="bg-custom-gray text-white w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-gray-500 resize-none" placeholder="Your Message" required></textarea>
          </div>
          <div className='text-center'>
            <button type="submit" value="send" className="w-56 bg-white text-black p-3 rounded-md hover:bg-gray-200 transition">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact