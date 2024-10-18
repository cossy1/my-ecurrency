"use client";

import Shop from "/public/png/shop.png";
import Image from "next/image";
import AppButton from "../button/appButton";
import { useRouter } from "next/navigation";
import FeatureList from "../home/featurelist";

export default function ShopAboutSection() {
  const router = useRouter();
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20 gap-16 lg:gap-[160px] lg:mb-[152px]">
      <Image src={Shop} alt="" height={519} width={477} />

      <div className="flex flex-col xl:mt-[100px] max-w-[421px]">
        <p className="text-[#12305B] mb-6 text-4xl font-bold">About Product</p>
        <p className="text-[#21384299] text-base">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>

        <FeatureList noBg />

        <div className="flex gap-12 mb-8">
          <div className="flex flex-col gap-1.5">
            <p className="text-black text-base"> Price </p>
            <p className="text-black font-semibold text-base"> USD 50 </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-black text-base"> Unit </p>
            <input
              type="number"
              className="border border-[#12305B] w-[63px] h-[33px] rounded-[5px] cursor-pointer p-2"
            />
          </div>
        </div>

        <AppButton
          label="Buy"
          onClick={() => router.push("/shop")}
          className="max-w-[225px]"
        />
      </div>
    </div>
  );
}
