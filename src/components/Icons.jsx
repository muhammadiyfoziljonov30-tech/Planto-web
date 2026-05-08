import loop from '../assets/loop.png'
import bag from '../assets/bag.png'
import toggle from '../assets/toggle.png'

export default function Icons() {
    return (
        <div>
            <div className='flex items-center gap-15'>
                <img src={loop} alt="loop" className='w-6.5'/>
                <img src={bag} alt="bag" className='w-6.5'/>
                <img src={toggle} alt="toggle" className='w-6.5'/>
            </div>
        </div>
    )
}
