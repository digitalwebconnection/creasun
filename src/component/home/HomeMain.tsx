import AboutCreasun from "./AboutCreasun"
import CreasunCalculator from "./CreasunCalculatorHome"
import CreasunHomeHero from "./HeroHome"
import ModernReviewSection from "./ModernReviewSection"
import OurSolarServicesCreasun from "./OurSolarServicesHome"
import RecentProjectsCreasun from "./RecentProjectsCreasun"
import Scroll from "./ScerollHome"
import SegmentsAndMountingShowcase from "./SegmentsAndMountingShowcase"
import SimpleFAQ from "./SimpleFAQ"
import WhatWeDo from "./WhatWeDo"

const HomeMain = () => {
  return (
    <>
      <CreasunHomeHero />
      <CreasunCalculator />
      <AboutCreasun />
      <Scroll />
      <WhatWeDo />
      <SegmentsAndMountingShowcase />
      <RecentProjectsCreasun />
      <OurSolarServicesCreasun />
      <ModernReviewSection />
      <SimpleFAQ />
    </>
  )
}

export default HomeMain
