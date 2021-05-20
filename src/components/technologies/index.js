import { BiUser } from "react-icons/bi";
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
// const Technologies = () => {
//   return (
//     <TechContainer>
//       <TechWrapper>
//         <TechRow>
//           <TechCol1> 
//             <TechHeading>Technologies</TechHeading>
//               <BiUser 
//                 className="userIcon"
//                 size="5rem"
//                 ></BiUser>
//           </TechCol1>
//           <TechCol2>
//             <TechContent>yada yada yada</TechContent>
//           </TechCol2>
//         </TechRow>
//       </TechWrapper>
//     </TechContainer>
//   );
// }

export default Technologies;