import React from "react";
import RoadMapSection from "../components/RoadMapSection/RoadMapSection";
import { VideoSection } from "../components/VideoSection/VideoSection";
import { WelcomeSection } from "../components/WelcomeSection/WelcomeSection";
import RankingSection from "../components/RankingSection/RankingSection";
import MetaverseSection from "../components/MetaverseSection/MetaverseSection";
import FaqSection from "../components/FAQSection/FaqSection";
import TeamMemberSection from "../components/TeamMemberSection/TeamMemberSection";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
export const Homepage = () => {
  return (
    <>
      <Header />
      <VideoSection />
      <WelcomeSection />
      <RoadMapSection />
      <RankingSection />  
      <MetaverseSection />
      <FaqSection />
      <TeamMemberSection />
      <Footer />
    </>
  );
};
