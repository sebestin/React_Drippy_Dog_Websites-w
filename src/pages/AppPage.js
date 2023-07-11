import React from 'react'
import Header from '../containers/Header';
import Introduction from '../components/AppPage/IntroductionSection/IntroductionSection';
import ARSection from '../components/AppPage/ARSection/ARSection';
import MoreSection from '../components/AppPage/MoreSection/MoreSection';
import ComingSoonSection from '../components/AppPage/ComingSoonSection/ComingSoonSection';
import StaySection from '../components/AppPage/StaySection/StaySection';
import Footer from '../containers/Footer';
export const AppPage = () => {
  return (
      <> 
      <Header/>
       <Introduction/>
      <ARSection/>
      <MoreSection/>
      <ComingSoonSection/>
      <StaySection/>
      <Footer/> 
       </>
  )
}
