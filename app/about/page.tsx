import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import WhyChooseUs from '@/components/Wcu'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
      <Nav />
      <Hero
        title='Transforming the Future of Sustainable Solution'
        description='Driving innovation in mobility, energy, and green investments to create a cleaner and brighter tomorrow.'
        primaryButtonText='Get Started Today'
        secondaryButtonText='Learn More'
        backgroundImage='/assets/about-1.png'
      />
      <section>
        <div className="bg-emerald-800 min-h-screen md:px-40 px-10  py-12 relative">
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

          <div className="max-w-7xl mx-auto relative">
            {/* Header Text */}
            <div className="mb-4 py-8">
              <p className="text-white mb-4">
                Who we are
              </p>
              <h1 className="text-white text-2xl md:text-4xl  leading-tight mb-8 max-w-8xl">
                We are a forward-thinking company dedicated to revolutionizing transportation and energy solutions. By combining cutting-edge technology with strategic
                <br /> <span className='text-gray-300'>partnerships, we empower individuals, businesses, and communities to embrace sustainability while achieving economic and environmental benefits.</span>
              </h1>
            </div>
            <div className='mb-4 py-8'>
              <article className='grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 md:text-xl'>
                <div>
                  <h2>Our Mission</h2>
                  <h1>
                    To lead the green revolution by providing innovative, accessible, and sustainable solutions that transform the way we live, move, and invest.
                  </h1>
                </div>
                <div>
                  <h2>Our Vision</h2>
                  <h1>
                    A world where mobility and energy solutions are not only efficient but also eco-friendly, driving progress while protecting our planet for generations to come.
                  </h1>
                </div>
              </article>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-8 py-8">
              {/* Stat 1 */}
              <div className='flex flex-col md:flex-row justify-between'>
                <h2 className="text-orange-500 text-4xl mb-4">
                  Over 770
                </h2>
                <p className="text-white">
                  new clients, strengthening partnerships and expanding our reach.
                </p>
              </div>

              {/* Stat 2 */}
              <div className='flex flex-col md:flex-row justify-between'>
                <h2 className="text-orange-500 text-4xl mb-4">
                  Executed 2,800+
                </h2>
                <p className="text-white">
                  innovative projects, driving sustainable impact.
                </p>
              </div>

              {/* Stat 3 */}
              <div className='flex flex-col md:flex-row justify-between'>
                <h2 className="text-orange-500 text-4xl mb-4">
                  Achieved ₦1.35 b
                </h2>
                <p className="text-white">
                  showcasing consistent growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 mx-8 py-16 md:py-28'>
          <div>
            <article>
              <h1 className='text-3xl md:text-5xl mb-8'>What We Stand For</h1>
              <div className='mb-8 md:hidden'>
            <Image src="/assets/about-2.png" alt='ozone-engineer' width={300} height={150} />
          </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/about-1.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Innovation</h2>
                <p className='text-sm text-gray-500 max-w-md'>We constantly push the boundaries of technology to deliver groundbreaking solutions that address today’s most pressing challenges.</p>
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/about-2.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Sustainability</h2>
                <p className='text-sm text-gray-500 max-w-md'>Our focus is on creating a positive environmental impact through cleaner transportation and energy systems.</p>
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/about-3.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Accessibilty</h2>
                <p className='text-sm text-gray-500 max-w-md'>We believe sustainable solutions should be available to everyone, from vehicle financing to investment opportunities.</p>
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/about-4.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Collaboration</h2>
                <p className='text-sm text-gray-500 max-w-md'>Through strong partnerships with industry leaders, financial institutions, and communities, we create a robust ecosystem for growth and impact.</p>
              </div>

            </article>
          </div>
          <div className='p-4 hidden md:flex'>
            <Image src="/assets/about-2.png" alt='ozone-engineer' width={500} height={400} />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section>
        <div className='bg-white text-center py-28 mx-8 flex flex-col gap-8 items-center'>
          <span>Our Journey</span>
          <h1 className='text-xl md:text-3xl max-w-3xl'>From developing state-of-the-art Liquid Tree technology to introducing flexible autogas vehicle financing plans, we’ve been at the forefront of innovation since day one. Our partnerships with Wema Bank and leading vehicle manufacturers underscore our commitment to delivering unmatched value and reliability.</h1>
            <div>
            <Button className='bg-black py-6 px-6 rounded-none'> Get Started Today</Button>

            </div>
        </div>
      </section>
      <ContactSection/>
      <Footer/>
    </>
  )
}
