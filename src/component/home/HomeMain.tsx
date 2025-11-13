import AboutCreasun from "./AboutCreasun"
import CreasunCalculator from "./CreasunCalculatorHome"
import CreasunHomeHero from "./HeroHome"
import ModernReviewSection from "./ModernReviewSection"
import OurSolarServicesCreasun from "./OurSolarServicesHome"
import Scroll from "./ScerollHome"
import SegmentsAndMountingShowcase from "./SegmentsAndMountingShowcase"
import SimpleFAQ from "./SimpleFAQ"
import WhatWeDo from "./WhatWeDo"

const HomeMain = () => {
  return (
    <>
    <CreasunHomeHero/>
    <CreasunCalculator/>
    <AboutCreasun/>
    <Scroll/>
    <WhatWeDo/>
    <OurSolarServicesCreasun/>
    <SegmentsAndMountingShowcase/>
    <ModernReviewSection/>
    <SimpleFAQ/>
    </>
  )
}

export default HomeMain
