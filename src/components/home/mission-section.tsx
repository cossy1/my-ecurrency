import Mission from "/public/png/mission.png";
import Image from "next/image";

export default function MissionSection() {
    return (
        <div className="mx-auto grid grid-cols-1 pl-6 lg:pl-[150px] items-center xl:grid-cols-2 lg:mt-3 mb-16 lg:mb-[159px] gap-[58px]">

            <div className="flex flex-col gap-7 max-w-[475px]">
                <p className="text-[#12305B] text-4xl font-bold">Our Mission</p>
                <p className="text-[#21384299] text-base">
                    We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. Thats why we created products that aim to -
                </p>

                <ul>
                    <li>✓ Promote Calm</li>
                    <li>✓ Support Sleep</li>
                    <li>✓ Reduce Stress</li>
                    <li>✓ Aid Relaxation</li>
                </ul>

            </div>

            <Image src={Mission} alt="" height={550} width={735} />
        </div>
    );
}
