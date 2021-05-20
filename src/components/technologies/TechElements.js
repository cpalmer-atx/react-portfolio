import styled from 'styled-components';
import Colors from '../../colors.js';

export const TechContainer = styled.div`
  background: ${Colors.PRIMARY_BG};
  color: ${Colors.SECONDARY_BG};
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const TechWrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;
  min-height: 400px;
  flex: grow;
`;

export const TechRow1 = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TechRow2 = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// export const TechIcons = styled.div``;

// export const TechCol1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 10px;
// `;

// export const TechCol2 = styled.div`
//   margin: 10px;
//   border: solid;
//   border-radius: 20px;

// `;

export const TechHeading = styled.h1`
  font-size: 48px;
  padding: 20px;
  margin: 10px;
`;

// export const TechContent = styled.p`
//   padding: 20px;
//   margin: 10px;
// `;

export const IconWrapper = styled.div`
  color: ${Colors.WARM_ACCENT};
  font-size: 50px;
  padding: 10px;

  .icon {
    margin: 5px;
  }
`;