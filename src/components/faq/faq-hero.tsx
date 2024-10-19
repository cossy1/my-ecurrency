import SearchInput from "../input/search-input";

export default function FaqHero() {
    return (
        <div
            className="lg:pl-[150px] pl-6 pr-2 pt-20 lg:pt-[102px] bg-[#FBF9F2]"
        >
            <div className="flex lg:pb-[196px] pb-20 flex-col max-w-[859px] gap-4 text-[#12305B]">
                <p className="text-lg">We&apos;re here to help you</p>
                <p className="lg:text-[60px] text-4xl font-bold py-4">How can we assist?</p>
                <SearchInput placeholder="Search FAQs here" />
            </div>
        </div>
    );
}
