import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import { WcuCarousel } from '@/components/WcuCrs'
import Image from 'next/image'
import React from 'react'

export default function LiquidTree() {

    const features = [
        {
          title: "Innovative Solution",
          description: "Combining technology and nature for a greener, healthier future."
        },
        {
          title: "Scalable Impact",
          description: "Adaptable to cities of all sizes, offering an easy solution to urban pollution."
        },
        {
          title: "Sustainable",
          description: "Helps cities and businesses meet sustainability and carbon neutrality goals."
        },
        {
          title: "Cost-Effective",
          description: 'More affordable and efficient than traditional methods of air purification.'
        }
      ];

    return (
        <>
            <Nav />
            <section>
                <Hero
                    backgroundImage='/assets/electric-2.png'
                    title='Revolutionizing Urban Air Quality with Liquid Tree Technology'
                    description='Innovative solutions for cleaner air and a greener tomorrow.'
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
                            <p className='text-white'>What is Liquid Tree Technology?</p>
                            <h1 className="text-white text-2xl md:text-4xl mt-4 leading-tight mb-8 max-w-8xl">
                                Liquid Tree Technology is a groundbreaking, environmentally friendly innovation designed to capture and neutralize carbon emissions while enhancing urban air quality. Unlike traditional trees, Liquid Trees use a proprietary process to absorb pollutants and release oxygen, providing a sustainable solution to address the challenges of urban pollution.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-white mx-8 py-16 md:py-28'>
                    <article className='text-center flex flex-col gap-6'>
                        <h1 className='text-xl md:text-4xl mb-4'>How It Works</h1>
                        <p className=''>Our Liquid Trees mimic the natural air-purifying process of real trees but at an accelerated rate. <br /> These smart devices:</p>
                        <div className='flex flex-col gap-16 mt-8'>
                        <div>
                            <span className='text-xl bg-orange-500 px-6 py-5 rounded-full'>1</span>
                            <p className='mt-6 text-lg'>Absorb carbon dioxide (CO₂) and other harmful <br /> pollutants from the surrounding air.</p>
                        </div>
                        <div>
                            <span className='text-xl bg-orange-500 px-6 py-5 rounded-full'>2</span>
                            <p className='mt-6 text-lg'>Convert them into clean, breathable oxygen <br /> and purify the surrounding environment.</p>
                        </div>
                        <div>
                            <span className='text-xl bg-orange-500 px-6 py-5 rounded-full'>3</span>
                            <p className='mt-6 text-lg'>Use an innovative liquid solution that accelerates CO₂ <br /> absorption compared to traditional methods.</p>
                        </div>
                        </div>
                    </article>
                </div>
            </section>
            <section>
                    <div className='bg-white text-center py-28 mx-8 flex flex-col gap-8 items-center'>
                      <span>Bring Clean Air to Your City with Liquid Tree Technology!</span>
                      <h1 className='text-xl md:text-3xl max-w-3xl'>Our proprietary Liquid Tree technology is designed to improve urban air quality by absorbing carbon dioxide and releasing oxygen, creating healthier cities for everyone.</h1>
                        <div className='flex flex-col md:flex-row gap-4'>
                        <Button className='bg-black py-6 px-6 rounded-none'>Get in Touch For Custom Solutions</Button>
                        <Button variant={"ghost"} className='border py-6 px-6 rounded-none'>Schedule A Consultation</Button>
            
                        </div>
                    </div>
                  </section>
            <section>
                <div className='bg-emerald-800 px-8  relative  py-20 md:py-28'>
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
              
                   <div className='relative grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto'>
                        <article>
                            <h1 className='text-3xl md:text-5xl mb-4 text-white'>Key Benefits  <br /> of Liquid <br /> Tree Technology</h1>
                            <div className='mb-8 md:hidden'>
                                <Image src="/assets/electric-1.png" alt='ozone-engineer' width={300} height={150} />
                            </div>
                           <div className='flex flex-col gap-8'>
                           <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/liquid-1.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2 className='text-white text-lg'>Air Quality Improvement</h2>
                                <p className='text-base text-gray-300 max-w-md'>Experience the power of emission-free transportation. Our range of electric vehicles includes: <br />
                                    - Personal electric cars <br />
                                    - Two-wheelers and e-scooters <br />
                                    - Light commercial vehicles
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/liquid-2.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2 className='text-white text-lg'>Electric Buses</h2>
                                <p className='text-base text-gray-300 max-w-md'>Transform public transit with our electric buses, designed for durability, reliability, and zero emissions. Perfect for urban and inter-city transportation.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/liquid-3.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2 className='text-white text-lg'>Charging Infrastructure</h2>
                                <p className='text-base text-gray-300 max-w-md'>Convenient and scalable electric vehicle charging stations to support seamless adoption of electric mobility.</p>
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/liquid-4.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2 className='text-white text-lg'>Partnered Solutions</h2>
                                <p className='text-base text-gray-300 max-w-md'>Collaborating with industry leaders to provide top-tier electric mobility solutions customized to your needs.</p>
                            </div>
                           </div>

                        </article>
                        <div className='p-4 hidden md:flex'>
                        <Image src="/assets/electric-1.png" alt='ozone-engineer' width={600} height={500} className='object-cover' />
                    </div>
                    </div>
                
                   </div>
         
            </section>
            <section>
    <div className="bg-white min-h-screen px-8 py-28 relative">
      
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl mb-4">Why Choose Liquid Tree Technology?</h2>
        <p className="text-gray-500 mb-12">
         why individuals and businesses trust us to lead the way in green innovation.
        </p>
        <WcuCarousel/>

        {/* Image Grid */}
        <div className="lg:grid grid-cols-12 gap-4 mb-16 hidden ">
          {/* Large image */}
          <div className="col-span-12 md:col-span-5 h-[400px]">
            <Image
              src="/assets/wcu/1.png"
              alt="Team member"
              width={500}
              height={400}
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Right side grid */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-4 gap-4">
            {/* Top row images */}
            <div className="col-span-3 md:col-span-2">
              <Image
                src="/assets/wcu/2.png"
                alt="Driver"
                width={400}
                height={100}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <Image
                src="/assets/wcu/3.png"
                alt="Team member"
                width={250}
                height={160}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <Image
                src="/assets/wcu/4.png"
                alt="Team member"
                width={250}
                height={160}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            {/* Bottom row images */}
            <div className="col-span-3 md:col-span-1">
              <Image
                src="/assets/wcu/5.png"
                alt="Service technician"
                width={500}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 md:col-span-1">
              <Image
                src="/assets/wcu/6.png"
                alt="Team member"
                width={250}
                height={160}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3 md:col-span-2">
              <Image
                src="/assets/wcu/7.png"
                alt="Team member"
                width={250}
                height={160}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
            </section>
          
<ContactSection/>
            <Footer />
        </>
    )
}
