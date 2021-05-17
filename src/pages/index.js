import { useState } from 'react';
import Biography from '../components/biography';
import Jumbotron from '../components/jumbotron';
import Navbar from '../components/navbar';
import NavMenu from '../components/navMenu';

const Home = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => { setOpen(!open); }

  return (
    <>
      <NavMenu open={open} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Jumbotron />
      <Biography />
    </>
  )
}

export default Home;