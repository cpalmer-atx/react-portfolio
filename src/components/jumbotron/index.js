import TextLoop from 'react-text-loop';
import image from '../../images/austin-md.jpg';
import {
  JumbotronContainer,
  JumbotronBg,
  VideoBg,
  JumbotronContent,
  JumboH1,
  JumboLoop,
} from './JumbotronElements.js';

const Jumbotron = () => {
  return (
    <JumbotronContainer>
      <JumbotronBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={image}
          type='image/jpg'
        />
      </JumbotronBg>
      <JumbotronContent>
        <JumboH1>Hi, I'm Chad.</JumboH1>
        <JumboLoop>
          <TextLoop springConfig={{ stiffness: 50, damping: 50 }}>
            <span>Driven.</span>
            <span>Committed.</span>
            <span>Reliable.</span>
            <span>Local.</span>
          </TextLoop>
        </JumboLoop>
      </JumbotronContent>
    </JumbotronContainer>
  );
}

export default Jumbotron;