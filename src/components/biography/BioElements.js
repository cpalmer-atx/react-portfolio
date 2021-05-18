import styled from 'styled-components';
import Colors from '../../colors.js';

export const BioContainer = styled.div`
  background: ${Colors.SECONDARY_BG};
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const BioWrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
`;

export const BioRow = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BioCol1 = styled.div`
  margin: 10px;
`;

export const BioCol2 = styled.div`
  margin: 10px;

`;

export const BioHeading = styled.h1`
  font-size: 48px;
  padding: 20px;
  margin: 10px;
`;

export const BioContent = styled.p`
  padding: 20px;
  margin: 10px;
`;

export const bioText = 'Chad is a really cool guy with a family.  In his free time, he likes to suck at fishing and tinkers with his truck.'