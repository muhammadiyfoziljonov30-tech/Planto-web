import React from 'react'
import RatingCard from '../components/RatingCard';

export default function Review() {
    const reviews = [
        {
            id: 1,
            img: 'src/assets/Photo.webp',
            nick: 'Maxn Raval',
            thought: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        }
    ];
    return (
        <section id='review'>
            <div>
                <div className='flex flex-col items-center'>
                    <div className='trendy-container mb-19'>
                        <h2 className="text-[55px] text-white text-center">Customer Review</h2>
                    </div>

                    <div className='grid grid-cols-3 gap-8.5 mt-45.5'>
                        <div>
                            {reviews.map((review, index) =>
                                <RatingCard key={index}
                                    photo={review.img}
                                    title={review.nick}
                                    review={review.thought}
                                />
                            )}
                        </div>
                        <div>
                            {reviews.map((review, index) =>
                                <RatingCard key={index}
                                    photo={review.img}
                                    title={review.nick}
                                    review={review.thought}
                                />
                            )}
                        </div>
                        <div>
                            {reviews.map((review, index) =>
                                <RatingCard key={index}
                                    photo={review.img}
                                    title={review.nick}
                                    review={review.thought}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
