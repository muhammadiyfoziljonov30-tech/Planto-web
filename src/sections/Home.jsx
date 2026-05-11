import React from 'react'
import Natureal from '../components/Natureal'
import TrendyPlants from '../components/TrendyPlants'

export default function Home() {
  return (
    <section id='home' style={{ backgroundImage: "url('src/assets/background.jpg')" }} className='bg-cover bg-no-repeat bg-center py-25'>
      <div className='container'>
        <Natureal />
        <TrendyPlants />
      </div>
    </section>
  )
}
