import BlogHero from '@/components/bloghero'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RelatedBlog from '@/components/RelatedBlog'
import Image from 'next/image'
import React from 'react'

export default function FirstBlog() {
  return (
    <>
    <Nav/>
    <BlogHero title="The Future of Electric Mobility: What You Need to Know" date="June 12, 2021"/>
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
                            <h1 className="text-white text-2xl md:text-4xl mt-4 leading-tight mb-8 max-w-8xl">
                            “As the world seeks sustainable energy solutions, Autogas has emerged as a transformative option for transportation. It offers affordability, accessibility, and a significantly lower carbon footprint compared to traditional fuels. In this article, we explore how Autogas is reshaping the future of mobility.”
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
    <section>
        <div className='bg-white py-16 md:py-28 px-10 md:px-40'>
            <article className='flex flex-col justify-center items-center'>
                <div className='max-w-4xl flex flex-col gap-6 py-12'>
                <span>
                Understanding Autogas: The Basics
                </span>
                <p>
                Autogas, also known as LPG (Liquefied Petroleum Gas), is a clean-burning fuel derived from natural gas processing and petroleum refining. It’s widely used in vehicles and recognized for its economic and environmental benefits.
                </p>
                </div>
                <Image
                src={'/assets/Image-placeholder.png'}
                alt='ozone-image'
                width={1000}
                height={600}
                />
        <div className='max-w-4xl flex flex-col gap-6 py-12'>
                <span>
                Key Points:
                </span>
                <p>
                - Eco-Friendly: Reduces harmful emissions by up to 30% compared to petrol and diesel. <br />
                - Cost-Effective: Generally priced 40-50% lower than traditional fuels. <br />
                - Global Availability: Accessible at over 50,000 fueling stations worldwide.
                </p>
                </div>
                <Image
                src={'/assets/Image-placeholder.png'}
                alt='ozone-image'
                width={1000}
                height={600}
                />
        <div className='max-w-4xl flex flex-col gap-6 py-12'>
            <p>Autogas, also known as liquefied petroleum gas (LPG), is a cleaner alternative to traditional gasoline and diesel. By converting your vehicle to run on Autogas, you can significantly reduce harmful emissions, lower fuel costs, and contribute to a greener planet. The conversion process is safe, efficient, and cost-effective, offering long-term savings and a more environmentally friendly driving experience. Autogas, also known as liquefied petroleum gas (LPG), is a cleaner alternative to traditional gasoline and diesel. By converting your vehicle to run on Autogas, you can significantly reduce harmful emissions, lower fuel costs, and contribute to a greener planet. The conversion process is safe, efficient, and cost-effective, offering long-term savings and a more environmentally friendly driving experience.</p>
        </div>
        <Image
                src={'/assets/Image-placeholder.png'}
                alt='ozone-image'
                width={1000}
                height={600}
                />
            </article>
        </div>
    </section>
    <RelatedBlog/>
    <Footer/>
    </>
  )
}
