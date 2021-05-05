import video from '../../videos/video.mp4';
import { 
  HeroContainer,
  HeroBg,
  VideoBg
} from './HeroElements.js';

const HeroSection = () => {
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
      
    </HeroContainer>
  )
}

export default HeroSection
