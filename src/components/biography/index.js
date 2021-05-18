import {
  BioContainer,
  BioWrapper,
  BioRow,
  BioCol1,
  BioCol2,
  BioHeading,
  BioContent,
  bioText
} from './BioElements.js';

const Biography = () => {
  return (
    <BioContainer id='bio'>
      <BioWrapper>
        <BioRow>
          <BioCol1> 
            <BioHeading>Biography</BioHeading>
          </BioCol1>
          <BioCol2>
            <BioContent>{bioText}</BioContent>
          </BioCol2>
        </BioRow>
      </BioWrapper>
    </BioContainer>
  );
}

export default Biography;