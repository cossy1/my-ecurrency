import React from "react";
import AppLogo from "/public/svg/app-logo-white.svg";
import GooglePlus from "/public/svg/google-plus.svg";
import Linkedin from "/public/svg/linkedin.svg";
import X from "/public/svg/x.svg";
import Facebook from "/public/svg/facebook.svg";
import Image from "next/image";
import Link from "next/link";
import { COMPANYLINKS, CONTACTINFO } from "@/constants/navItems";

const AppFooter: React.FC = () => {
    return (
        <footer className="py-9 px-4 sm:px-7 text-white text-base lg:px-8 bg-[#043C50]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex justify-center items-center">
                        <Image
                            src={AppLogo}
                            alt=""
                            height={62}
                            width={92}
                            className="object-contain"
                        />
                    </div>

                    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-[53px]">
                        {/* Company */}
                        <div>
                            <h3 className="font-semibold mb-4">COMPANY</h3>
                            <ul className="space-y-2">
                                {COMPANYLINKS.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.link} className="hover:text-gray-300 text-[#ABABAB]">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="min-w-fit">
                            <h3 className="font-semibold mb-4">CONTACT</h3>
                            <div className="space-y-2">
                                {CONTACTINFO.map((item, index) => (
                                    <p key={index} className={`${item.isHeader ? "text-[#ABABAB]" : ""}`}>
                                        {item.label}
                                    </p>
                                ))}
                            </div>

                        </div>

                        {/* Consumer Advisory */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold mb-4">CONSUMER ADVISORY</h3>
                            <p className="mb-4">
                                These statements have not been evaluated by the Food and Drug
                                Administration. This product is not intended to diagnose, treat,
                                cure, or prevent any disease. This product should be used only
                                as directed on the label. All trademarks and copyrights are
                                property of their respective owners and not affiliated with nor
                                do they endorse this product. Results may vary.
                            </p>
                            <p>
                                By using our website or product, you agree to follow our <span className="cursor-pointer text-blue-300">terms
                                    of service.</span>
                            </p>
                        </div>

                        <div className="border h-[210px] w-1 border-[#5D6544] lg:block hidden" />

                        <hr className="border w-full h-[1px] border-[#5D6544] block lg:hidden" />


                        <div className="flex flex-col w-full gap-6">
                            <div>
                                <h3 className="font-semibold mb-4">GET IN TOUCH</h3>
                                <p className="text-[#ABABAB]">
                                    Feel free to get in touch with us via email
                                </p>
                                <Link
                                    href="mailto:hello@sleepstiq.com"
                                    className="font-semibold hover:text-gray-300"
                                >
                                    hello@sleepstiq.com
                                </Link>
                                <div className="flex space-x-4 mt-4">
                                    <Image src={Facebook} alt="" height={33} width={33} className="size-[33px] object-contain" />
                                    <Image src={X} alt="" height={33} width={33} className="size-[33px] object-contain" />
                                    <Image src={GooglePlus} alt="" height={33} width={33} className="size-[33px] object-contain" />
                                    <Image src={Linkedin} alt="" height={33} width={33} className="size-[33px] object-contain" />
                                </div>
                            </div>

                            {/* Copyright */}
                            <div className="mt-[55px] text-[#ABABAB] text-sm">
                                <p>&copy; 2020@sleepstiq. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
