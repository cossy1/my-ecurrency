import { CommentsCarousel } from "@/components/home/comments-carousel";
import HomeHero from "@/components/home/home-hero";
import MissionSection from "@/components/home/mission-section";
import ProductReviewCarousel from "@/components/home/product-review-carousel";
import ShopSection from "@/components/home/shop-section";
import TestimonialSection from "@/components/home/testimonial-section";
import VisitSection from "@/components/home/visit-section";
import { HOMECOMMENTS, PRODUCTREVIEWS } from "@/constants/data";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="lg:pl-[150px] px-6 mb-20 lg:pt-[115px]">
        <TestimonialSection />
        <CommentsCarousel data={HOMECOMMENTS} />
        <hr className="w-full h-[1px] border border-[#21384218] my-16" />
        <ShopSection />
      </div>
      <MissionSection />
      <VisitSection />

      <div className="lg:pl-[150px] mt-[165px] pl-6 mb-20 lg:mb-[225px]">
        <hr className="h-[1px] border border-[#21384218] mb-5 lg:mr-40 mr-5" />

        <div className="lg:text-4xl text-2xl font-bold lg:mb-12 mb-6 lg:mt-[92px]">Product Reviews</div>
        <ProductReviewCarousel data={PRODUCTREVIEWS} />
      </div>
    </>
  );
}
