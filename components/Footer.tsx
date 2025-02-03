import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialIcons = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="max-w-7xl mx-auto px-8 pt-16 pb-8">
      {/* Top section with links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href={'/blog'} className="hover:text-gray-600">Blog</Link></li>
            <li><Link href={'/about'} className="hover:text-gray-600">About Us</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li><Link href={'/eletric'} className="hover:text-gray-600">Electric Mobility</Link></li>
            <li><Link href={'/liquid'} className="hover:text-gray-600">Liquid Tree Technology</Link></li>
            <li><Link href={'/prepaid'} className="hover:text-gray-600">Ozone Prepaid Card</Link></li>
            <li><Link href={'/conversion'} className="hover:text-gray-600">Autogas Conversion</Link></li>
            <li><Link href={'/financing'} className="hover:text-gray-600">Financing</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2">
            <li>+234 9084000008 </li>
            <li>Info@YourCompany.Com</li>
            <li>123 Greenway Drive, Abuja, Nigeria.</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-600">Terms Of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section with logo and social */}
      <div className="border-t pt-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-[80px] sm:text-[80px] md:text-[150px] lg:text-[300px] font-bold tracking-tighter">
            Ozone
          </div>

          {/* Mission statement */}
          <p className="text-center max-w-2xl text-gray-600">
            We are on a mission to transform transportation and energy consumption with innovative, sustainable solutions. Join us in creating a cleaner future.
          </p>

          {/* Social links and copyright */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2025 Ozone. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              {socialIcons.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;