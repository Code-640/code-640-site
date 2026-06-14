import { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import ContactCTA from './components/ContactCTA'
import HeroHome from './components/HeroHome'
import PageIllustrations from './components/PageIllustrations';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import FeaturedWork from './components/FeaturedWork';

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <>
      <Header />
      <main className="relative isolate flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <PageIllustrations multiple={true}/>
        <HeroHome />
        <WhoWeAre />
        <WhatWeDo />
        <FeaturedWork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
