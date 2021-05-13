import {
  NavMenuContainer,
  Icon,
  CloseIcon,
  NavMenuWrapper,
  NavMenuLinks,
  NavMenuLink,
  ResumeBtnWrap,
  NavMenuRoute
} from './NavMenuElements.js';

const NavMenu = ({ open, toggle }) => {
  return (
    <NavMenuContainer open={open}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <NavMenuWrapper>
        <NavMenuLinks>
          <NavMenuLink to="education" onClick={toggle}>Education</NavMenuLink>
          <NavMenuLink to="projects" onClick={toggle}>Projects</NavMenuLink>
          <NavMenuLink to="work-history" onClick={toggle}>Work History</NavMenuLink>
          <NavMenuLink to="about" onClick={toggle}>About Me</NavMenuLink>
        </NavMenuLinks>
        <ResumeBtnWrap>
          <NavMenuRoute to="#">PDF Resume</NavMenuRoute>
        </ResumeBtnWrap>
      </NavMenuWrapper>
    </NavMenuContainer>
  );
}

export default NavMenu;