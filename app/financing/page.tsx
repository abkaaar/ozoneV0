import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import React from 'react'

export default function Financing() {
  return (
    <>
    <Nav />
    <Hero
    title='Autogas vehicle financing'
    description='We offer flexible financing options for your autogas vehicle conversion.'
    
    />
    <ContactSection/>
    <Footer />
    </>
    )
}
