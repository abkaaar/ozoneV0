import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Eco-Friendly Solutions",
      description: "We're committed to reducing environmental impact with cutting-edge technologies, from electric mobility to Liquid Trees, ensuring a cleaner and healthier planet for future generations."
    },
    {
      title: "Innovative Technology",
      description: "Our solutions, like the pioneering Liquid Tree technology and Ozone Prepaid Fuel Cards, are designed to solve modern environmental and energy challenges."
    },
    {
      title: "Strategic Partnerships",
      description: "We collaborate with trusted companies and financial institutions, like Wema Bank, to bring you reliable solutions with world-class support and resources."
    },
    {
      title: "Flexible Financing Options",
      description: 'With our "Pay Small-Small" financing plans, owning or converting your vehicle is more accessible than ever, making sustainability achievable for everyone.'
    }
  ];

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
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <h2 className="text-white text-5xl mb-4">Why Choose Us?</h2>
        <p className="text-gray-300 mb-12">
          Here is why individuals and businesses trust us to lead the way in green innovation
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-12 gap-4 mb-16">
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
              <h3 className="text-white text-2xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;