import {
  BioContainer,
  BioWrapper,
  BioRow,
  BioCol1,
  BioCol2
} from './BioElements.js';

const Biography = () => {
  return (
    <BioContainer>
      <BioWrapper>
        <BioRow>
          <BioCol1>
            <h1>Reserved for Section title</h1>
          </BioCol1>
          <BioCol2>
            <p>Reserved for Section content</p>
          </BioCol2>
        </BioRow>
      </BioWrapper>
    </BioContainer>
  );
}

export default Biography;