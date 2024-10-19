import FAQAccordion from "@/components/faq/faq-accordion";
import FaqHero from "@/components/faq/faq-hero";

export default function FaqPage() {
    return (
        <>
            <FaqHero />
            <div className="lg:pl-[150px] mt-[71px] pl-6 mb-20 lg:mb-[225px]">
                <FAQAccordion />
            </div>
        </>
    );
}
