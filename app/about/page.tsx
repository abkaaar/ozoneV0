import Hero from '@/components/hero'
import Nav from '@/components/Nav'
import React from 'react'

export default function About() {
  return (
    <>
    <Nav/>
    <Hero
    title='Transforming the Future of Susteainable Solution'
    description='Driving innovation in mobility, energy, and green investments to create a cleaner and brighter tomorrow.'
    primaryButtonText='Get Started Today'
    />
    </>
  )
}
