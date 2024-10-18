'use client';
import AppButton from "@/components/button/appButton";
import { useRouter } from "next/navigation";
import CompanyCarousel from "./company-carousel";
import { HOMECOMPANIES } from "@/constants/data";

export default function HomeHero() {
    const router = useRouter();

    return (
        <div style={{
            backgroundImage: `url('/png/home-bg.png')`,
        }}
            className="lg:pl-[150px] pl-6 pt-20 lg:pt-[115px] bg-no-repeat bg-cover"
        >

            <div className="flex flex-col relative">
                <div className="flex flex-col max-w-[581px] gap-4 text-[12305B]">
                    <p className="text-lg">We&apos;re here to help you</p>
                    <p className="text-[60px] font-bold">Relax & Rest</p>
                    <p className="text-base">With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</p>

                    <AppButton label="Visit Shop" onClick={() => router.push('/shop')} className="w-[250px] mb-[294px]" />
                </div>

                <div className="bg-white p-4 absolute -bottom-10 w-full">
                    <CompanyCarousel data={HOMECOMPANIES} />
                </div>

            </div>


        </div>
    )
}