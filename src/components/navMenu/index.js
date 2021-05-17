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
          <NavMenuLink to="bio" onClick={toggle}>Bio</NavMenuLink>
          <NavMenuLink to="tech" onClick={toggle}>Technologies</NavMenuLink>
          <NavMenuLink to="projects" onClick={toggle}>Projects</NavMenuLink>
          <NavMenuLink to="edu" onClick={toggle}>Education</NavMenuLink>
        </NavMenuLinks>
        <ResumeBtnWrap>
          <NavMenuRoute to="#">PDF Resume</NavMenuRoute>
        </ResumeBtnWrap>
      </NavMenuWrapper>
    </NavMenuContainer>
  );
}

export default NavMenu;