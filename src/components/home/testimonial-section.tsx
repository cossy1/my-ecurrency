import Link from "next/link";
import { TestimonialCard } from "../cards/testimonial-card";
import SpeakerImage from "/public/png/ceo.png"
import { Play } from 'lucide-react';

export default function TestimonialSection() {

    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 gap-16 lg:gap-[160px] mb-[152px]">
            <div className="flex flex-col mt-[55px]">
                <p className="text-[#12305B] text-sm">Our Amazing Story</p>
                <p className="text-[#12305B] text-4xl font-bold mt-[29px] mb-14">10k+Happy Customers</p>
                <p className="text-base text-[#21384299]">There&apos;s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>

                <div className="flex items-center gap-1 mt-[29px]">
                    <Play fill="black" size={12} />
                    <Link href="#" className="text-base text-[#12305B] underline cursor-pointer font-bold">More Know About us</Link>
                </div>
            </div>

            <TestimonialCard
                imageUrl={SpeakerImage}
                title="CEO, Techbias"
                quote="I'm a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq."
                name="James Miller"
            />

        </div>
    )
}