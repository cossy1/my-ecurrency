'use client';

import Shop from "/public/png/shop.png";
import Image from "next/image";
import FeatureList from "./featurelist";
import AppButton from "../button/appButton";

export default function ShopSection() {
    return (
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 mt-20 gap-16 lg:gap-[160px] lg:mb-[152px]">
            <div className="relative">
                <Image src={Shop} alt="" height={519} width={477} />

                <div className="absolute -bottom-11 md:left-40">
                    <FeatureList />
                </div>
            </div>

            <div className="flex flex-col gap-6 xl:mt-[110px] max-w-[421px]">
                <p className="text-[#12305B] text-4xl font-bold">Shop Now</p>
                <p className="text-[#21384299] text-base">
                    Our Personal Diffuser is an aromatherapy device that contains a blend
                    of melatonin, lavender, and chamomile. A few breaths of our
                    plant-based essential oil mist will mellow you out, quiet the mind,
                    and lull you to bed.
                </p>

                <AppButton label="Visit Shop" onClick={() => { }} className="max-w-[225px]" />
            </div>
        </div>
    );
}
