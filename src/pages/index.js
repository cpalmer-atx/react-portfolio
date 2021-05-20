import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Biography from '../components/biography';
import Jumbotron from '../components/jumbotron';
import Navbar from '../components/navbar';
import NavMenu from '../components/navMenu';
import Projects from '../components/projects';
import Technologies from '../components/technologies';

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => { 
    setOpen(!open); 
  }

  const toTop = () => {
    scroll.scrollToTop({ 
      duration: 800, 
      smooth: true 
    });
  }

  return (
    <>
      <NavMenu open={open} toggle={toggle}  />
      <Navbar toggle={toggle} toTop={toTop} />
      <Jumbotron />
      <Technologies />
      <Biography />
      <Projects />
    </>
  )
}

export default Home;