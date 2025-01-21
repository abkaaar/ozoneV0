import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/Wcu";
import { CloudLightning } from "lucide-react";
import Image from "next/image";


export default function Home() {

  return (
    <>
      <Nav />
      <section
        className="flex h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/ozone-banner.png')" }}
      >
        <div className="flex items-center w-full h-full bg-black bg-opacity-50">
          <article className="flex items-start text-start flex-col gap-4 text-white w-[600px] mx-8">
            <h1 className="text-2xl md:text-5xl font-semibold">
              Revolutionizing Mobility, Sustainability, and Energy Access!
            </h1>
            <p className="text-lg md:text-xl">
              Join the green revolution with our electric mobility solutions, innovative liquid tree technology, and smart energy systems.
            </p>
            <div className="btns flex gap-4 justify-start">
              <Button className="bg-black py-6 px-6 rounded-none">Get Started Today</Button>
              <Button variant={"ghost"} className="border py-6 px-6 rounded-none">Learn More About Us</Button>
            </div>
            <div className="justify-center flex gap-2">

            </div>
          </article>
        </div>
      </section>
      <section
        className="bg-white py-8 px-8"
      >
        <div className="flex items-center justify-between">
          <Image src="/assets/icons/brands/wema.png" alt="Ozone" width={80} height={80} />
          <Image src="/assets/icons/brands/bolt.png" alt="Ozone" width={80} height={80} />
          <Image src="/assets/icons/brands/uber.png" alt="Ozone" width={80} height={80} />
          <Image src="/assets/icons/brands/indrive.png" alt="Ozone" width={80} height={80} />
          <Image src="/assets/icons/brands/oryx.png" alt="Ozone" width={80} height={80} />
          <Image src="/assets/icons/brands/pick-all.png" alt="Ozone" width={80} height={80} />
        </div>
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
              <h1 className="text-white text-4xl md:text-5xl font-normal leading-tight mb-8 max-w-8xl">
                We are committed to providing eco-friendly mobility and energy solutions.
                From electric vehicles powered by partnerships with leading companies to
                our innovative Liquid Tree technology, we are reshaping the way you move
                and consume energy.
              </h1>
            </div>

            {/* Image Section */}
            <div className="w-full h-96 mb-16 overflow-hidden ">

              <Image src="/assets/pump-hero.jpeg" alt="ozone pump" width={1200} height={400} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div>
                <h2 className="text-orange-500 text-4xl font-bold mb-4">
                  Over 770
                </h2>
                <p className="text-gray-300">
                  new clients, strengthening partnerships and expanding our reach.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h2 className="text-orange-500 text-4xl font-bold mb-4">
                  Executed 2,800+
                </h2>
                <p className="text-gray-300">
                  innovative projects, driving sustainable impact.
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h2 className="text-orange-500 text-4xl font-bold mb-4">
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
        className="bg-white p-8"
      >
        <div className="flex flex-col py-8 gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Our Solutions</h1>
            <p className="text-lg max-w-lg font-thin">Join the green revolution with our electric mobility solutions, innovative liquid tree technology, and smart energy systems.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 py-6">
              <CloudLightning height={30} width={30} className="rounded-2xl p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-lg font-semibold">Electric Mobility Solutions</h1>
              <p>Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Explore</Button>

              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <CloudLightning height={30} width={30} className="rounded-2xl p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-lg font-semibold">Electric Mobility Solutions</h1>
              <p>Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Explore</Button>

              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <CloudLightning height={30} width={30} className="rounded-2xl p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-lg font-semibold">Electric Mobility Solutions</h1>
              <p>Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Explore</Button>

              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <CloudLightning height={30} width={30} className="rounded-2xl p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-lg font-semibold">Electric Mobility Solutions</h1>
              <p>Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Explore</Button>

              </div>
            </div>
            <div className="flex flex-col gap-3 py-6">
              <CloudLightning height={30} width={30} className="rounded-2xl p-2 bg-[#FF8C00] mb-4" />
              <h1 className="text-lg font-semibold">Electric Mobility Solutions</h1>
              <p>Eco-friendly vehicles and buses powered by our partnerships with leading companies. We deliver clean and reliable transportation that reduces emissions and enhances efficiency.</p>
              <div>
                <Button variant={"outline"} className="px-8 py-6 rounded-none">Explore</Button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <WhyChooseUs/>
      </section>

    </>
  );
}





