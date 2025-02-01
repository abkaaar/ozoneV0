import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import Image from 'next/image'
import React from 'react'

export default function ContactPage() {
    return (
        <>
            <Nav />
            <section>
                <Hero
                    title='Let’s Connect and Create a Sustainable Future Together!"'
                    description='We’re here to answer your questions, provide support, and explore collaboration opportunities.'
                    backgroundImage='/assets/contact-1.png'
                    secondaryButtonText='Get Started Today'
                    showSecondaryButton={true}
                    showPrimaryButton={false}
                />
            </section>
            <section>
                <div className='bg-white py-28 md:px-40 mx-8'>
                    <article>
                        <div className='mb-16 flex flex-col gap-6'>
                            <span className='text-gray-500'>Business Hours</span>
                            <h2 className='text-xl'>Monday – Friday: 9:00 AM – 5:00 PM <br />
                                Saturday: 10:00 AM – 2:00 PM
                            </h2>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div>
                                <Image src="/assets/icons/contact-icon-1.png" alt='contact-ozone' height={40} width={40} />
                                <h2>Email</h2>
                                <p>support@myozone.co</p>
                            </div>
                            <div>
                                <Image src="/assets/icons/contact-icon-2.png" alt='contact-ozone' height={40} width={40} />
                                <h2>Phone</h2>
                                <p>09084000008</p>
                            </div>
                            <div>
                                <Image src="/assets/icons/contact-icon-3.png" alt='contact-ozone' height={40} width={40} />
                                <h2>Office Address</h2>
                                <p>[Your Office Address] <br /> [City, State, Country]</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section>
                <ContactSection />
            </section>
            <Footer />
        </>
    )
}
