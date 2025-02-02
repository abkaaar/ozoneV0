import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import React from 'react'

export default function Conversion() {
  return (
    <>
    <Nav />
    <Hero
    title='Autogas vehicle conversion'
    description='We offer autogas vehicle conversion services for your fleet.'
    />
    <ContactSection/>
    <Footer />
    </>
    )
}
