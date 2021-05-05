import { useState } from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElement.js';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements.js';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => { setHover(!hover) }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg 
          autoPlay 
          loop 
          muted 
          src={video} 
          type='video/mp4' 
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Local. Committed. Dependable.</HeroH1>
        <HeroP>Soft skills and talent you need to get the job done how you want it, when you want it.</HeroP>
        <HeroBtnWrapper>
          <Button to="contact" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Me {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection
