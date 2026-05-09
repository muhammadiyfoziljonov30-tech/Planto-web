import { FaAngleRight } from "react-icons/fa6";
import Button from "../UI/Button";
import flower from '../assets/Flower.webp';
import { useContext } from "react";
import { MyContext } from "../context/CreateContext";

export default function GlassCard({ img, name, desc }) {
  const nextCard = () => {
    toggle(); // Toggle funksiyasini chaqirish
  }
  const { isOpen, toggle } = useContext(MyContext);
  return (
    <div className="flex flex-col items-start justify-end backdrop-blur-2xl border border-white/50 bg-white/5 rounded-[77px] p-5 relative w-lg h-161">
      <div className={` transition-transform duration-500 ${isOpen ? '-translate-x-full opacity-50' : 'translate-x-0 opacity-100'}`}>
        <div className="max-w-115  -top-25 ">
          <img src={img} alt={name} />
        </div>
        <div className="mb-10 pl-15 flex items-center gap-20">
          <div>
            <div className="mb-5 mt-9">
              <p className="text-white text-2xl">{name}</p>
              <p className="text-white text-[38px]">{desc}</p>
            </div>
            <Button>
              Buy Now
            </Button>
          </div>

        </div>
      </div>
      <div>
        <FaAngleRight size={24} onClick={toggle} className="text-white cursor-pointer" />
      </div>
    </div>
  )
}
