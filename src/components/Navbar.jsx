import logo from '../assets/logo.png'
import Icons from './Icons'
import Links from './Links'
import Logo from './Logo'
import { motion } from 'framer-motion'
export default function Navbar() {

   const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="container py-5 px-4 flex justify-between items-center ">
        <Logo onClick={scrollToTop} />
        <Links />
        <Icons />
      </div>
    </motion.nav>
  )
}
