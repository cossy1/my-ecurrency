'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { CommentCard } from '../cards/comment-card';

interface ICommentsCarouselProps {
    data: { title: string, author: string }[];
}

export const CommentsCarousel: React.FC<ICommentsCarouselProps> = ({
    data,
}) => {

    const sliderOptions = {
        loop: true,
        autoplay: true,
        spaceBetween: 26,
        breakpoints: {
            460: {
                slidesPerView: 2,
            },
            610: {
                slidesPerView: 3,
            },
            820: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    };

    return data.length ? (
        <Swiper
            modules={[Autoplay, Navigation]}
            className="flex items-center justify-center h-full w-full"
            {...sliderOptions}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='mr-2'>
                        <CommentCard title={item.title} author={item.author} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    ) : null;
};
