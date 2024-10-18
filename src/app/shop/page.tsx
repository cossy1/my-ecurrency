import { CommentsCarousel } from "@/components/home/comments-carousel";
import ShopAboutSection from "@/components/shop/shop-about-section";
import ShopHero from "@/components/shop/shop-hero";
import { HOMECOMMENTS } from "@/constants/data";

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <div className="lg:pl-[150px] px-6 mb-[73px]">
        <ShopAboutSection />

        <hr className="h-[1px] border border-[#21384218] lg:mr-28  my-16 mr-5" />

        <CommentsCarousel data={HOMECOMMENTS} />
      </div>
    </>
  );
}
