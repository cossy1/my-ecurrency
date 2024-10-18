export default function ShopHero() {
  return (
    <div
      style={{
        backgroundImage: `url('/png/shop-bg.png')`,
      }}
      className="lg:pl-[150px] pl-6 pt-20 lg:pt-[115px] bg-no-repeat bg-cover"
    >
      <div className="flex  pb-[290px] flex-col max-w-[581px] gap-4 text-[#12305B]">
        <p className="text-lg">We&apos;re here to help you</p>
        <p className="text-[60px] font-bold">Relax & Rest</p>
      </div>
    </div>
  );
}
