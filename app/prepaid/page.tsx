import ContactSection from '@/components/Contact'
import TestimonialSlider from '@/components/CustomerFeedback'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Prepaid() {
    return (
        <>
            <Nav />
            <Hero
                backgroundImage='/assets/prepaid-1.png'
                title='Simplifying Fuel and Gas Payments with Ozone Prepaid Card'
                description='A smarter, more convenient way to manage your fuel and gas expenses.'
                secondaryButtonText='Get Started Today'
                showSecondaryButton={true}
                showPrimaryButton={false}
            />
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
                            <p className='text-white'>What is the Ozone Prepaid Fuel/Gas Card?</p>
                            <h1 className="text-white text-2xl md:text-4xl mt-4 leading-tight mb-8 max-w-8xl">
                                The Ozone Prepaid Fuel/Gas Card is a cashless, prepaid payment solution designed for consumers and businesses to purchase fuel and gas with ease. Offering flexibility, security, and exclusive discounts, the Ozone Card ensures a seamless fueling experience anytime, anywhere.
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-white grid grid-cols-1 md:grid-cols-2 mx-8 py-16 md:py-28'>
                    <div>
                        <article>
                            <h1 className='text-3xl md:text-5xl mb-8'>Features of Ozone Prepaid Fuel/Gas Card</h1>
                            <div className='mb-8 md:hidden'>
                                <Image src="/assets/electric-1.png" alt='ozone-engineer' width={300} height={150} />
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/prepaid-1.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2>Easy to Use</h2>
                                <p className='text-sm text-gray-500 max-w-md'>
                                    - Load the card with your preferred amount and use it like a debit card to pay for fuel or gas at participating locations.
                                    <br /> - No more carrying cash or worrying about credit card charges.
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/prepaid-3.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2>Secure and Reliable</h2>
                                <p className='text-sm text-gray-500 max-w-md'>
                                    - Enjoy the peace of mind that comes with a secure payment method. The card is protected with a PIN, ensuring your balance is safe.
                                    <br /> - Track and manage your spending easily through our mobile app or online portal.
                                </p>
                            </div>

                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/prepaid-2.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2>Exclusive Discount</h2>
                                <p className='text-sm text-gray-500 max-w-md'>
                                    - Save on every fueling session with special discounts and offers available to Ozone Cardholders at partner stations.
                                    <br /> - Enjoy exclusive deals on gas and fuel prices, available only to registered users of the card.
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/prepaid-4.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2>Flexible Reload Options</h2>
                                <p className='text-sm text-gray-500 max-w-md'>
                                    - Top up your card anytime with flexible reload options via bank transfer, mobile money, or at participating locations.
                                    <br /> - Set up automatic reloading to ensure you never run out of credit when you need it most.
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 mb-6'>
                                <Image src="/assets/icons/prepaid-5.png" alt='ozone-engineer' width={40} height={40} className='mb-2' />
                                <h2>Eco-Freindly Payment Options</h2>
                                <p className='text-sm text-gray-500 max-w-md'>Reduce your reliance on cash or paper-based receipts and <br /> embrace a modern, environmentally friendly payment solution.</p>
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
                    <span>Bring Clean Air to Your City with Liquid Tree Technology!</span>
                    <h1 className='text-xl md:text-3xl max-w-3xl'>
                        Experience the convenience of cashless transactions with our Ozone Prepaid Card. Use it to purchase fuel and gas at discounted rates anytime, anywhere.
                    </h1>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <Button className='bg-black py-6 px-6 rounded-none'>Get Your Card Now</Button>
                        <Button variant={"ghost"} className='border py-6 px-6 rounded-none'>Find Participating Locations</Button>

                    </div>
                </div>
            </section>
            <section>
                <div className='bg-emerald-800 px-8 relative grid grid-cols-1 py-16 md:py-28'>
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
                        }} />
                    <article className='text-center flex flex-col justify-center gap-6 relative text-white'>
                        <h1 className='text-xl md:text-4xl mb-4'>How It Works</h1>
                        <p className='text-lg'>Our Liquid Trees mimic the natural air-purifying process of real trees but at an accelerated rate. <br /> These smart devices:</p>
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
                <div className=" mx-auto px-8 py-16 md:py-28">


                    <div className="grid grid-cols-1 md:grid-cols-2 mb-16">
                        <div className="">
                            <h1 className="text-3xl md:text-5xl mb-12">
                                Benefits of Using<br />
                                Ozone Prepaid<br />
                                Fuel/Gas Card
                            </h1>
                            <div className="">
                                <Image
                                    src="/assets/prepaid-3.png"
                                    alt="Person holding prepaid card"
                                    width={500}
                                    height={375}
                                    className=" object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-14 mt-28">
                            <section>
                                <h2 className="text-2xl mb-6 ">For Individuals:</h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="font-bold">Convenience:</span>
                                        No need to carry cash or worry about using physical bank cards.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold">Cost Control:</span>
                                        Stick to your fueling budget by preloading your card with a set amount.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold">Safety:</span>
                                        Keep your fuel purchases secure with a PIN-protected card.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl mb-6">For Businesses</h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="font-bold">Fleet Management:</span>
                                        Easily manage fuel expenses for your company vehicles with prepaid cards for each vehicle.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold">Expense Tracking:</span>
                                        Use our platform to track fuel expenditures, monitor usage, and generate reports for your business.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl mb-6">For Travelers</h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="font-bold">Global Acceptance:</span>
                                        Whether you are on a road trip or commuting around the city, the Ozone Prepaid Card is accepted nationwide and offers convenience on the go.
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>

            </section>
            <TestimonialSlider />
            <ContactSection />

            <Footer />
        </>
    )
}
