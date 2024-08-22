import {
  HeroSlider,
  OurVision,
  OurImpact,

  About,
  OurApproach,
  Stories,
  Policies,
  GuidingPrinciple,
  JoinUs,
  OurRoadmap,
  Ventures,
  Blog,
  Courses,
  Contact,
  HomeContactUs,
  AccordionPageTemplate,
  Empowering,
  CallAction,
  Testimonial,
  LearningPlatform,
  Course,
  Regionallanguages,
  OurStory,
  RoadMap,
  OurImpacts,
} from "@/components/home";
import { Pillars } from "@/components/home-v2";
import { HomePartnershipsLogos } from "@/components/home/HomePartnershipsLogos";
import { States } from "@/components/home/States";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      {/* <OurApproach /> */}
      <div className="py-7">
      <Regionallanguages />
      </div>
      <div className="py-10">
      <OurImpacts />
      </div>
      
      {/* <OurVision /> */}
      {/* <div className="py-5">
      <States />
      </div> */}
      {/* <About /> */}
      {/* <OurStory /> */}

      <div className="pt-10">
      <Course />
      </div>
      <div className="pt-[30px]">
      <GuidingPrinciple />
      </div>
     
      <div className="pt-[30px]">
      <Ventures />
      </div>
      <div className="pt-10">
      <Stories />
      </div>
      
      <HomePartnershipsLogos />
      <Testimonial />
      <div className="md:pt-0 pt-10">
      <Blog />
      </div>
      <div className="xl:hidden lg:hidden md:hidden block">
      <OurRoadmap />
      </div>
      <div className="xl:block lg:block md:block hidden">
    <RoadMap />
    </div>

      
      


      
      <HomeContactUs />
      <JoinUs />
      
      <AccordionPageTemplate />
      {/* <Contact /> */}
    </main>
  );
}
