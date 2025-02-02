import ContactSection from '@/components/Contact'
import TestimonialSlider from '@/components/CustomerFeedback'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function ElectricMobility() {
  return (
    <>
      <Nav />
      <section>
        <Hero
        backgroundImage='/assets/electric-2.png'
          title='Driving Sustainability with Electric Mobility'
          description='Efficient, eco-friendly, and cost-effective transportation solutions for a greener future.'
          secondaryButtonText='Get Started Today'
          showSecondaryButton={true}
          showPrimaryButton={false}
        />
      </section>
      <section>
        <div className="bg-emerald-800  md:px-40 px-10  py-12 relative">
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
              <p className='text-white'>About Electric Mobility</p>
              <h1 className="text-white text-2xl md:text-4xl mt-4 leading-tight mb-8 max-w-8xl">
                Electric mobility represents the future of sustainable transportation. Our solutions empower individuals, businesses, and cities to transition to clean energy vehicles that reduce environmental impact while enhancing efficiency.
              </h1>

            </div>


          </div>
        </div>
      </section>
      <section>
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 mx-8 py-16 md:py-28'>
          <div>
            <article>
              <h1 className='text-3xl md:text-5xl mb-4'>What We Offer</h1>
              <p className='mb-8'>Join the green revolution with our electric mobility solutions, innovative liquid tree technology, and smart energy systems.</p>
              <div className='mb-8 md:hidden'>
                <Image src="/assets/electric-1.png" alt='ozone-engineer' width={300} height={150} />
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/electric-1.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Electric Vehicles</h2>
                <p className='text-sm text-gray-500 max-w-md'>Experience the power of emission-free transportation. Our range of electric vehicles includes: <br />
                  - Personal electric cars <br />
                  - Two-wheelers and e-scooters <br />
                  - Light commercial vehicles
                </p>
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/electric-2.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Electric Buses</h2>
                <p className='text-sm text-gray-500 max-w-md'>Transform public transit with our electric buses, designed for durability, reliability, and zero emissions. Perfect for urban and inter-city transportation.</p>
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/electric-3.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Charging Infrastructure</h2>
                <p className='text-sm text-gray-500 max-w-md'>Convenient and scalable electric vehicle charging stations to support seamless adoption of electric mobility.</p>
              </div>
              <div className='flex flex-col gap-2 mb-6'>
                <Image src="/assets/icons/electric-4.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                <h2>Partnered Solutions</h2>
                <p className='text-sm text-gray-500 max-w-md'>Collaborating with industry leaders to provide top-tier electric mobility solutions customized to your needs.</p>
              </div>

            </article>
          </div>
          <div className='p-4 hidden md:flex'>
            <Image src="/assets/electric-1.png" alt='ozone-engineer' width={600} height={500} className='object-cover' />
          </div>
        </div>
      </section>
      <section>
        <div className='bg-white text-center py-28 mx-8 flex flex-col gap-8 items-center'>
          <span>Join the Electric Revolution Today!</span>
          <h1 className='text-xl md:text-3xl max-w-3xl'>Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</h1>
            <div className='flex flex-col md:flex-row gap-4'>
            <Button className='bg-black py-6 px-6 rounded-none'>Explore Our Vehicles</Button>
            <Button variant={"ghost"} className='py-6 px-6 rounded-none'>Contact Us for Custom Solutions</Button>

            </div>
        </div>
      </section>
      <section>

      </section>
      <section>
        <div className="bg-emerald-800 px-10  py-12 relative">
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

           <div className='py-28 relative'>
                     <div>
                       <h1 className='text-white text-2xl md:text-4xl md:ml-24 max-w-xl'>
                       Key Benefits of <br /> Electric Mobility
                     </h1>
                     <div className='md:hidden mt-6 flex justify-center'>
                         <Image src="/assets/electric-3.png" alt='ozone-engineer' width={500} height={1000} className="object-cover h-full flex justify-center" />
                       </div>
                     </div>
                     <div className='grid grid-cols-1 md:grid-cols-2 py-8'>
                       <div className='hidden md:flex justify-center'>
                         <Image src="/assets/electric-3.png" alt='ozone-engineer' width={500} height={1000} className="object-cover h-full flex justify-center" />
                       </div>
                       <div>
                         <article className='flex flex-col gap-12'>
                          <div className='flex flex-col gap-2 max-w-lg'>
                          <Image src={"/assets/icons/electric-5.png"} alt='eletric' height={40} width={40}/>
                           <h1 className='text-xl md:text-3xl text-white'>Environmental Impact</h1>
                           <p className='text-gray-300'>
                           - Zero emissions, reducing air pollution. <br />
                           - Contributes to global carbon reduction goals.
                           </p>
                          
                          </div>
                          <div className='flex flex-col gap-2 max-w-lg'>
                          <Image src={"/assets/icons/electric-6.png"} alt='eletric' height={40} width={40}/>
                           <h1 className='text-xl md:text-3xl text-white'>Cost Savings</h1>
                           <p className='text-gray-300'>
                           - Lower operating costs compared to fossil fuel vehicles. <br />
                           - Reduced maintenance expenses due to fewer moving parts.
                           </p>
                          </div>
                          <div className='flex flex-col gap-2 max-w-lg'>
                          <Image src={"/assets/icons/electric-7.png"} alt='eletric' height={40} width={40}/>
                           <h1 className='text-xl md:text-3xl text-white'>Improved Performance</h1>
                           <p className='text-gray-300'>
                           -  State-of-the-art safety and technology features.
                           <br />
                           - Smooth, quiet rides with instant torque.
                           </p>
                          </div>
                          <div className='flex flex-col gap-2 max-w-lg'>
                          <Image src={"/assets/icons/electric-8.png"} alt='eletric' height={40} width={40}/>
                           <h1 className='text-xl md:text-3xl text-white'>Enhanced Sustainability</h1>
                           <p className='text-gray-300'>
                           -  Enhanced Sustainability.
                      
                           </p>
                          </div>
                         </article>
                       </div>
           
                     </div>
                   </div>
        </div>
      </section>
      <TestimonialSlider/>
      <ContactSection />
      <Footer />
    </>
  )
}
