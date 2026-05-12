import { RiShoppingBag4Line } from "react-icons/ri";

export default function TopSellingCard() {
    const plants = [
        {
            id: 1,
            name: 'Calathea plant',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: 'src/assets/Flower.webp',
            price: 'Rs. 359/-'
        },
        {
            id: 2,
            name: 'Calathea plant',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: 'src/assets/Flower2.webp',
            price: 'Rs. 359/-'
        },
        {
            id: 3,
            name: 'Calathea plant',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: 'src/assets/Flower3.webp',
            price: 'Rs. 359/-'
        },
        {
            id: 4,
            name: 'Calathea plant',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: 'src/assets/Flower4.webp',
            price: 'Rs. 359/-'
        },
        {
            id: 5,
            name: 'Calathea plant',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: 'src/assets/Flower5.webp',
            price: 'Rs. 359/-'
        },
        {
            id: 6,
            name: 'Calathea plant',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            img: 'src/assets/Flower.webp',
            price: 'Rs. 359/-'
        }
    ];
    return (
        <div className="container">
            <div className="grid grid-cols-3 gap-10.5">
                {plants.map((plant) => (
                    <div key={plant.id} className="cursor-pointer  hover:scale-105 duration-300 backdrop-blur-2xl border border-white/50 bg-white/5 rounded-[77px] p-5 w-lg h-161 relative flex flex-col items-start justify-end my-10">
                        <img src={plant.img} alt={plant.name} className="w-115 absolute -top-35" />
                        <div className="flex flex-col gap-9.75 py-13 px-16.5">
                            <h3 className="text-white text-[38px]">{plant.name}</h3>
                            <p className="text-white text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="text-white text-[38px] flex items-center justify-between ">
                                <span>{plant.price}</span>
                                <button className="p-3.5 border rounded-full text-white cursor-pointer">
                                    <RiShoppingBag4Line />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
