import TrendyCard from "./TrendyCard";
import flawor from '../assets/Calathea.webp';
import aloe from '../assets/Aloe.webp';
export default function TrendyPlants() {
    return (
        <div className="mt-20">
            <div className="flex flex-col items-center">
                <div className="trendy-container">
                    <h2 className="text-[55px] text-white text-center">Our Trendy plants</h2>
                </div>
                <div>
                    <TrendyCard image={flawor} title={'For Small Decs Ai Plat'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                        price={'Rs. 599/-'} isReverse={true} isBag={true}/>
                    <TrendyCard image={aloe} title={'For Small Decs Ai Plat'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                        price={'Rs. 579/-'} isReverse={false} isBag={true} className={`flex-row-reverse!`}/>
                </div>
            </div>
        </div>
    )
}
