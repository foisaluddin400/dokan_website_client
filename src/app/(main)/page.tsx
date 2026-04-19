import AffiliateSection from "@/components/homePage/AffiliateSection";
import BannerSection from "@/components/homePage/BannerSection";
import CategorySection from "@/components/homePage/CategorySection";
import CTASection from "@/components/homePage/CTASection";
import Faq from "@/components/homePage/Faq";
import Hero from "@/components/homePage/Hero";
import PopularProduct from "@/components/homePage/PopularProduct";
import RewardsSection from "@/components/homePage/RewardsSection";
import StatsBar from "@/components/homePage/StatsBar";
import StatsSection from "@/components/homePage/StatsSection";
import TrendingStory from "@/components/homePage/TrendingStory";
import WholesaleSection from "@/components/homePage/WholesaleSection";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <StatsBar></StatsBar>
      <div className="">
        <CategorySection></CategorySection>
        <TrendingStory></TrendingStory>
        <PopularProduct></PopularProduct>
      </div>

      {/* <div className="pt-11">
        <BannerSection></BannerSection>
      </div> */}
      {/* <div>
        <Faq></Faq>
      </div> */}
      <AffiliateSection></AffiliateSection>
      <div className="">
        <WholesaleSection></WholesaleSection>
        <WhyChooseUs></WhyChooseUs>
        <StatsSection></StatsSection>
      </div>
    </div>
  );
}
