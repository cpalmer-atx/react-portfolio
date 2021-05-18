import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItems,
  NavItem,
  NavLinks,
  ResumeBtn,
  ResumeBtnLink
} from './NavbarElements';

const Navbar = ({ toggle, toTop }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toTop}>cpalmer-atx</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavItems>
            <NavItem>
              <NavLinks 
                to='bio' 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-20} 
                duration={800}
                >Bio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#'>Technologies</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#'>Contact</NavLinks>
            </NavItem>
          </NavItems>
          <ResumeBtn>
            <ResumeBtnLink to='#'>PDF Resume</ResumeBtnLink>
          </ResumeBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;