import React from 'react'
import HeroImage from '../components/HeroImage'
import { Navbar } from 'react-bootstrap'
import Chat from '../components/Chat'
import CarouselCountries from '../components/CarouselCountries'

export default function HomePage() {
  return (
    <div>
      < HeroImage />
      <Chat />
      <CarouselCountries />
    </div>
  )
}
