
import BannerSection from "@/components/homePage/BannerSection";
import CategorySection from "@/components/homePage/CategorySection";
import Faq from "@/components/homePage/Faq";
import Hero from "@/components/homePage/Hero";
import PopularProduct from "@/components/homePage/PopularProduct";
import StatsBar from "@/components/homePage/StatsBar";
import TrendingStory from "@/components/homePage/TrendingStory";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <StatsBar></StatsBar>
      <div className="container mx-auto">
        <CategorySection></CategorySection>
        <TrendingStory></TrendingStory>
         <div className="">
        <PopularProduct></PopularProduct>
      </div>
      </div>
     
      <div className="pt-11">
        <BannerSection></BannerSection>
      </div>
      <div>
        <Faq></Faq>
      </div>
    </div>
  );
}



