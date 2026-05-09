import Button from "../UI/Button";
import { GoPlay } from "react-icons/go";
import GlassCard from "./GlassCard";
import flower from '../assets/Flower.webp';

export default function Natureal() {
    return (
        <div className="mt-42.5 flex">
            <div>
                <div>
                    <h1 className="text-white text-[118px]">Breath Natureal </h1>
                    <p className="text-white text-2xl w-223.25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex items-center gap-8.25 mt-5">
                    <Button>
                        Explore
                    </Button>
                    <button className="flex items-center gap-2">
                        <GoPlay size={48} className="text-white" />
                        <p className="text-white">Live Demo...</p>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <GlassCard img={flower} name={'Trendy House Plant'} desc={'Calathea plant'}/>
                </div>
            </div>
        </div>
    )
}
