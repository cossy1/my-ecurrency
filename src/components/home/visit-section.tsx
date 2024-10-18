'use client';

import AppButton from "../button/appButton";

export default function VisitSection() {
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-7 max-w-[90%] lg:max-w-[70%] mx-auto">
                <p className="text-[#12305B] text-4xl font-bold">Visit Our Shop</p>
                <p className="text-[#21384299] text-base text-center">
                    Our Personal Diffuser is an aromatherapy device that contains a blend of
                    melatonin, lavender, and chamomile. A few breaths of our plant-based
                    essential oil mist will mellow you out, quiet the mind, and lull you to
                    bed.{" "}
                </p>
                <AppButton label="Visit Shop" onClick={() => { }} className="w-[225px]" />


            </div>
         
        </>

    );
}
