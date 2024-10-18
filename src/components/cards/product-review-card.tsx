import React from 'react';
import Image from 'next/image';
import Ratings from "/public/svg/stars.svg"
import { truncateString } from '@/helpers/string';

interface ProductReviewCardProps {
    image: any;
    description: string;
    author: string;
}

export const ProductReviewCard: React.FC<ProductReviewCardProps> = ({ image, author, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg">
            <Image src={image} alt='' height={210} width={306} className="object-contain" />

            <div className='p-4'>
                <p className="text-[#4D533C] italic mt-4 mb-9 text-base">
                    {truncateString(description, 50)}
                </p>

                <h3 className="font-bold text-base text-[#4D533C] mb-2">{author}</h3>

                <Image src={Ratings} alt='' height={12} width={100} className="w-[100px] h-3 object-contain" />
            </div>

        </div>
    );
};