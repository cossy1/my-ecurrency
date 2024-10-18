'use client';
import AppButton from "@/components/button/appButton";
import { useRouter } from "next/navigation";

export default function HomeHero() {

    const router = useRouter();

    return (
        <div style={{
            backgroundImage: `url('/png/home-bg.png')`,
        }}
            className="pl-[150px] pt-[115px]"
        >

            <div className="flex flex-col">
                <div className="flex flex-col max-w-[581px] gap-4 text-[12305B]">
                    <p className="text-lg">We&apos;re here to help you</p>
                    <p className="text-[60px] font-bold">Relax & Rest</p>
                    <p className="text-base">With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</p>

                    <AppButton label="Visit Shop" onClick={() => router.push('/shop')} />
                </div>

                {/* <div>
                    Slidder Section
                </div> */}

            </div>


        </div>
    )
}