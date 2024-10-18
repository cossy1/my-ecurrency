import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface ICompanyCarouselProps {
  data: string[];
  reverseDirection?: boolean
}

const CompanyCarousel: React.FC<ICompanyCarouselProps> = ({
  data,
  reverseDirection
}) => {
  const sliderOptions = {
    loop: true,
    autoplay: {
      reverseDirection,
    },
    spaceBetween: 30,
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
            <Image
              alt="logo"
              className="h-11 max-h-11 w-auto max-w-[226px] object-contain object-center"
              width={226}
              height={44}
              src={item}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;
};

export default CompanyCarousel;
