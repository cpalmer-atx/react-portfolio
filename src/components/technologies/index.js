import TechIcons from './TechIcons.js';
import {
  TechContainer,
  TechWrapper,
  TechRow1,
  TechRow2,
  // TechIcons,
  // TechCol1,
  // TechCol2,
  TechHeading,
  // TechContent
} from './TechElements.js';

const Technologies = () => {
  return (
    <TechContainer>
      <TechWrapper>
        <TechRow1>
          <TechHeading>Technologies</TechHeading>
          A collection of tools I've experienced along the way
        </TechRow1>
        <TechRow2>
          <TechIcons></TechIcons>
        </TechRow2>
      </TechWrapper>
    </TechContainer>
  );
}

export default Technologies;