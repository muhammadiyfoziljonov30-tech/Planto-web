import { NavLink } from 'react-router'
import logo from '../assets/logo.png'
export default function Logo() {
    return (
        <div>
            <NavLink to={'/'} className='flex items-end gap-3.5' >
                <img src={logo} alt="Planto Logo" className='w-12' />
                <p className='text-[28px] inter font-semibold text-white'>Planto.</p>
            </NavLink>
        </div>
    )
}
