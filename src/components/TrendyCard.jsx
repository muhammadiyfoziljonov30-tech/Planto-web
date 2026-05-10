import { LiaShoppingBagSolid } from "react-icons/lia";
import Button from "../UI/Button";

export default function TrendyCard({ image, title, desc, price, className, isReverse }) {
    return (
        <div className="backdrop-blur-2xl border border-white/50 bg-white/5 rounded-[151px] w-404.75 mt-35">
            <div className={`flex items-center justify-end gap-54.5 relative ${className}`}>
                <div className={`absolute -top-50 ${isReverse ? 'left-0' : 'right-0'}`}>
                    <img src={image} alt={title} className="w-180" />
                </div>
                <div className="flex flex-col items-start gap-6 py-25 px-30.5">
                    <h3 className='text-[38px] text-white font-bold'>{title}</h3>
                    <p className='text-[20px] text-gray-400 w-183'>{desc}</p>
                    <p className='text-[38px] text-white font-bold'>{price}</p>
                    <div className="flex items-center gap-8">
                        <Button>
                            Explore
                        </Button>
                        <Button className={`p-2.5!`}>
                            <LiaShoppingBagSolid size={30} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
