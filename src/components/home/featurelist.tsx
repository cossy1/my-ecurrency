import React from 'react';

interface FeatureItem {
    icon: string;
    text: string;
}

const FeatureList = ({ noBg }: { noBg?: boolean }) => {
    const features: FeatureItem[] = [
        { icon: "😊", text: "Promotes calm and relaxation." },
        { icon: "💤", text: "Inhalation allows for a rapid effect." },
        { icon: "✅", text: "100% drug-free, plant-based ingredients." },
        { icon: "", text: "3rd-party lab tested." },
    ];

    return (
        <div className={`${noBg ? "bg-transparent" : "bg-white rounded-lg shadow-md mx-auto px-5 lg:px-[30px]"} py-3 lg:py-6 max-w-[453px] `}>
            <ul>
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-3 flex-shrink-0">{feature.icon}</span>
                        <span className="text-[#4D533C] italic text-xs lg:text-base">
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeatureList;