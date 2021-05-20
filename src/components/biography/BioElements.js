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
  min-height: 400px;
  flex: grow;
`;

export const BioRow = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BioCol1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const BioCol2 = styled.div`
  margin: 10px;
  border: solid;
  border-radius: 20px;

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

export const bioText = <p>Chad Palmer is a self-taught full stack developer seeking a junior position in  web development or other related roles.  He’s experienced with MERN stack technologies with an equal passion for Python app development, and ultimately looks forward to growing his engineering skillset with a team that shares his passion for innovation and problem solving.<br/><br/> Chad received his Bachelor of Science in Computer Science with a minor in Applied Mathematics from Texas State University after serving the U.S. Coast Guard for 10 years as a Marine Science Technician (MST).  As an MST, he gained extensive experience working with the foreign maritime community and leading teams of other examiners through complex safety compliance exams.  This position required a deep understanding of automated cargo, navigation, safety, and engineering systems on a broad range of commercial vessels.  His unique experiences make him a strong communicator with a team-first approach to problem solving in stressful, dynamic environments.<br/><br/> In his freetime, Chad enjoys learning how to fish and spending time outdoors with his two boys Chase and Christopher.  He credits his wife Cynthia for his accomplishments and keeping him at his best daily.</p>