import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: StaticImageData;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, imageUrl }) => {
  return (
    <div className="bg-[#FBF9F2] p-6 xl:p-10 max-w-[474px]">
      <p className="text-[#4D533C] italic mb-16 text-xl lg:text-2xl">
        `&quot;{quote}`
      </p>
      <div className="flex items-center gap-9">
        <Image src={imageUrl} alt={name} height={84} width={84} className="w-[84px] h-[84px] rounded-full mr-4 object-contain" />
        <div>
          <h3 className="font-bold text-lg xl:text-[22px] text-[#4D533C]">{name}</h3>
          <p className="text-[#152934] text-sm xl:text-base">{title}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};