
export default function RatingCard({photo, title, review}) {
    return (
        <div className="backdrop-blur-2xl border border-white/50 bg-white/5 w-lg rounded-[77px]">
            <div className="flex flex-col items-center gap-15 p-14.5">
                <div className="flex items-center gap-9.5">
                <img src={photo} alt={title} className="w-22 h-22 rounded-full object-cover"/>
                <div className="">
                    <p className="text-white text-[38px]">
                        {title}
                    </p>
                    <div className="flex items-center gap-2.5">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.13281 0L8.81667 5.18237H14.2657L9.85735 8.38525L11.5412 13.5676L7.13281 10.3647L2.72442 13.5676L4.40828 8.38525L-0.00011158 5.18237H5.44896L7.13281 0Z" fill="#FFF84E" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.13281 0L8.81667 5.18237H14.2657L9.85735 8.38525L11.5412 13.5676L7.13281 10.3647L2.72442 13.5676L4.40828 8.38525L-0.00011158 5.18237H5.44896L7.13281 0Z" fill="#FFF84E" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.13281 0L8.81667 5.18237H14.2657L9.85735 8.38525L11.5412 13.5676L7.13281 10.3647L2.72442 13.5676L4.40828 8.38525L-0.00011158 5.18237H5.44896L7.13281 0Z" fill="#FFF84E" />
                    </svg>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.13281 0L8.81667 5.18237H14.2657L9.85735 8.38525L11.5412 13.5676L7.13281 10.3647L2.72442 13.5676L4.40828 8.38525L-0.00011158 5.18237H5.44896L7.13281 0Z" fill="#FFF84E" />
                    </svg>
                    </div>

                </div>
            </div>
            <div className="w-101">
                <p className="text-white text-2xl">
                    {review}
                </p>
            </div>
            </div>
        </div>
    )
}
