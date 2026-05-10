import logo from '../assets/logo.png'
import Icons from './Icons'
import Links from './Links'
import Logo from './Logo'
export default function Navbar() {

   const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="container py-5 px-4 flex justify-between items-center ">
        <Logo onClick={scrollToTop} />
        <Links />
        <Icons />
      </div>
    </nav>
  )
}
