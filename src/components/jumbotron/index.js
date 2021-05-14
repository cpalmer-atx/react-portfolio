import { useState } from 'react';
import TextLoop from 'react-text-loop';
import video from '../../videos/video.mp4';
import Button from './ButtonElement.js';
import {
  JumbotronContainer,
  JumbotronBg,
  VideoBg,
  JumbotronContent,
  JumboH1,
  JumboLoop,
  JumboBtnWrapper,
  Mail,
  User
} from './JumbotronElements.js';

const Jumbotron = () => {

  const[hover, setHover] = useState(false);
  const onHover = () => { setHover(!hover) }

  return (
    <JumbotronContainer id='home'>
      <JumbotronBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={video}
          type='video/mp4'
        />
      </JumbotronBg>

      <JumbotronContent>
        <JumboH1>Hi, I'm Chad.</JumboH1>
        <JumboLoop>
          <TextLoop springConfig={{ stiffness: 50, damping: 50 }}>
            <span id='loop'>Driven.</span>
            <span>Committed.</span>
            <span>Reliable.</span>
            <span>Local.</span>
          </TextLoop>
        </JumboLoop>

        {/* <JumboBtnWrapper>
          <Button to='contact'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Me {hover ? <Mail /> : <User />}
          </Button>
        </JumboBtnWrapper> */}
      </JumbotronContent>
    </JumbotronContainer>
  );
}

export default Jumbotron;