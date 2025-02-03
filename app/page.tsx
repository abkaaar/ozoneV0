import BlogSection from "@/components/Blog";
import ContactSection from "@/components/Contact";
import TestimonialSlider from "@/components/CustomerFeedback";
import { FAQSection } from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import { InvestCta } from "@/components/InvestCta";
import Nav from "@/components/Nav";
import ScrollToTop from "@/components/ScrollUp";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WhyChooseUs from "@/components/Wcu";
import { Banknote, Cloud, CloudLightning, CreditCard, Wrench } from "lucide-react";
import Image from "next/image";


export default function Home() {

  return (
    <>
      <Nav />
      <Hero
        title="Revolutionizing Mobility, Sustainability, and Energy Access!"
        description="Join the green revolution with our electric mobility solutions, innovative liquid tree technology, and smart energy systems."
        primaryButtonText="Get Started today"
        secondaryButtonText="Learn More About Us"

      />
      {/* scrolla auto */}
      <section className="bg-white py-8 px-8">
        <ScrollArea className="">
          <div className="flex items-center justify-center gap-16 min-w-full">
            <Image src="/assets/icons/brands/wema.png" alt="Ozone" width={80} height={80} />
            <Image src="/assets/icons/brands/bolt.png" alt="Ozone" width={80} height={80} />
            <Image src="/assets/icons/brands/uber.png" alt="Ozone" width={80} height={80} />
            <Image src="/assets/icons/brands/indrive.png" alt="Ozone" width={80} height={80} />
            <Image src="/assets/icons/brands/oryx.png" alt="Ozone" width={80} height={80} />
            <Image src="/assets/icons/brands/pick-all.png" alt="Ozone" width={80} height={80} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      <section>
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

          <div className="max-w-7xl mx-auto relative">
            {/* Header Text */}
            <div className="mb-4 py-8">
              <p className="text-gray-300 mb-4">
                Driving the Future of Sustainable Transportation
              </p>
              <h1 className="text-white text-2xl md:text-5xl font-normal leading-tight mb-8 max-w-8xl">
                We are committed to providing eco-friendly mobility and energy solutions.
                From electric vehicles powered by partnerships with leading companies to
                our innovative Liquid Tree technology, we are reshaping the way you move
                and consume energy.
              </h1>
            </div>

            {/* Image Section */}
            <div className="w-full md:h-96 mb-16 overflow-hidden ">

              <Image src="/assets/pump-hero.jpeg" alt="ozone pump" width={1200} height={400} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div>
                <h2 className="text-orange-500 text-4xl mb-4">
                  Over 770
                </h2>
                <p className="text-gray-300">
                  new clients, strengthening partnerships and expanding our reach.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h2 className="text-orange-500 text-4xl mb-4">
                  Executed 2,800+
                </h2>
                <p className="text-gray-300">
                  innovative projects, driving sustainable impact.
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h2 className="text-orange-500 text-4xl mb-4">
                  Achieved ₦1.35 b
                </h2>
                <p className="text-gray-300">
                  showcasing consistent growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-white"
      >
        <div className="flex flex-col px-8 md:px-0 py-16 gap-12 max-w-7xl mx-auto md:py-28">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl">Our Solutions</h1>
            <p className="text-lg max-w-lg font-thin text-gray-500">Join the green revolution with our electric mobility solutions, innovative liquid tree technology, and smart energy systems.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 py-6">
              <CloudLightning height={40} width={40} className="rounded-full p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-xl">Electric Mobility Solutions</h1>
              <p className="text-gray-500">Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Explore</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <Cloud height={40} width={40} className="rounded-full p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-xl">Liquid Tree Technology</h1>
              <p className="text-gray-500">Our proprietary Liquid Tree technology is designed to improve urban air quality by absorbing carbon dioxide and releasing oxygen, creating healthier cities for everyone.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Learn About Liquid Trees</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <CreditCard height={40} width={40} className="rounded-full p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-xl">Ozone Prepaid Fuel/Gas Card</h1>
              <p className="text-gray-500">Simplify your fueling experience with our Ozone Prepaid Card. It’s a convenient, cashless, and cost-saving solution for purchasing fuel and gas anytime, anywhere.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Get Your Ozone Card</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <Wrench height={40} width={40} className="rounded-full p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-xl">Autogas Vehicle Conversion/Installation</h1>
              <p className="text-gray-500">Convert your vehicle to run on cleaner and more affordable autogas. Enjoy reduced fuel costs and a greener driving experience with our expert installation services.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Book a Conversion</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <Banknote height={40} width={40} className="rounded-full p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-xl">Autogas Vehicle Financing (Powered by Wema Bank)</h1>
              <p className="text-gray-500">Own or convert your autogas vehicle with our flexible “Pay Small-Small” financing plans. Affordable, accessible, and hassle-free.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Apply for Financing</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
            <InvestCta/>
      </section>
      <section className="">
        <BlogSection />
      </section>
      <section>
        <TestimonialSlider />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <ContactSection />
      </section>
      <Footer />
      <ScrollToTop/>

    </>
  );
}
