import React from 'react'
import Natureal from '../components/Natureal'
import TrendyPlants from '../components/TrendyPlants'

export default function Home() {
  return (
    <section id='home' style={{ backgroundImage: "url('src/assets/B9-removebg-preview.png')" }} className='bg-center bg-fixed'>
      <div className='container'>
        <Natureal />
        <TrendyPlants />
      </div>
    </section>
  )
}
