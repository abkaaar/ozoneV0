import React from 'react';

import { ContactForm } from './ContactForm';
const ContactSection = () => {

  return (
    <div className="bg-emerald-800 min-h-screen px-8 py-12 relative">

              {/* Grid background - made with repeating linear gradients for precise control */}
      <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent calc(2rem - 1px),
              rgba(0, 255, 150, 0.07) calc(2rem - 1px),
              rgba(0, 255, 150, 0.07) 2rem
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent calc(2rem - 1px),
              rgba(0, 255, 150, 0.07) calc(2rem - 1px),
              rgba(0, 255, 150, 0.07) 2rem
            )
          `,
              backgroundSize: '2rem 2rem',
              backgroundPosition: '0 0'
            }}
          />
    <div className='text-center py-8 text-white'>
        <h1 className='text-3xl md:text-4xl mb-3'>Send Us a Message</h1>
        <p className='text-base'> Fill out the form below, and our team will get back to you within 24-48 hours.</p>
    </div>
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 relative">
       <ContactForm/>
      </div>
    </div>
  );
};

export default ContactSection;