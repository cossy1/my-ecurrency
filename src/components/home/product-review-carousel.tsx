'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ProductReviewCard } from '../cards/product-review-card';

interface IProductReviewCarouselProps {
    data: { author: string, description: string, image: any }[];
}

const ProductReviewCarousel: React.FC<IProductReviewCarouselProps> = ({
    data,
}) => {
    const sliderOptions = {
        loop: true,
        autoplay: true,
        spaceBetween: 53,
        breakpoints: {
            610: {
                slidesPerView: 3,
            },
            820: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    };

    return data.length ? (
        <Swiper
            modules={[Autoplay, Navigation]}
            className="flex items-center justify-center p-2 h-full w-full"
            {...sliderOptions}
        >
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='mr-2'>
                        <ProductReviewCard author={item.author} description={item.description} image={item.image} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    ) : null;
};

export default ProductReviewCarousel;
