import { useState } from 'react';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data';
import Navbar from "../components/navbar"
import Services from '../components/servicesSection';
import Sidebar from "../components/sidebar"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <Services />
    </>
  )
}

export default Home
