import React from 'react';
import Image from 'next/image';
import Ratings from "/public/svg/stars.svg"
import { truncateString } from '@/helpers/string';

interface CommentCardProps {
    author: string;
    title: string;
}

export const CommentCard: React.FC<CommentCardProps> = ({ author, title }) => {
    return (
        <div className="bg-[#FBF9F2] pt-[22px] pl-[30px] pb-8 pr-2 xl:p-10">
            <p className="text-[#4D533C] italic mb-6 text-base">
                {truncateString(title, 60)}
            </p>
            <h3 className="font-bold text-base text-[#4D533C]">{author}</h3>

            <Image src={Ratings} alt='' height={12} width={100} className="w-[100px] h-3 object-contain" />

        </div>
    );
};