import React from 'react'
import TrendyCard from '../components/TrendyCard'
import flower from '/src/assets/Flower3.webp'
import Button from '../UI/Button'

export default function More() {
  return (
    <section id='more'>
      <div className='flex flex-col items-center'>
        <div className='trendy-container'>
          <h2 className="text-[55px] text-white text-center">Customer Review</h2>
        </div>
        <div>
          <TrendyCard  image={flower} title={'We Have Small And Best O2 Plants Collections'} isReverse={true} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'} 
          isBag={false} isNext={true} />
        </div>
      </div>
    </section>
  )
}
