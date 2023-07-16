import React from 'react'
import HeroImage from '../components/HeroImage'
import { Navbar } from 'react-bootstrap'
import Chat from '../components/Chat'
import CarouselCountries from '../components/CarouselCountries'
import Quote from '../components/Quote'

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <Quote />
      <Chat />
      <CarouselCountries />
    </>
  )
}
