import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Colors from '../../colors.js';

export const NavMenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${Colors.PRIMARY_BG};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;
  opacity: ${ ({open}) => (open ? '99%' : '0') };
  top: ${ ({open}) => (open ? '0' : '-100%') };
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${Colors.WARM_ACCENT};
`;

export const NavMenuWrapper = styled.div`
  color: ${Colors.SECONDARY_BG};
`;

export const NavMenuLinks = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const NavMenuLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: Lekton;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${Colors.SECONDARY_BG};
  cursor: pointer;
  

  &:hover {
    color: ${Colors.WARM_ACCENT};
    transiton: 0.2s ease-in-out;
    transform: translate(0px, -1px);
    border-left: 8px solid ${Colors.WARM_ACCENT};
    border-right: 8px solid ${Colors.WARM_ACCENT};
  }
`;

export const ResumeBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavMenuRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: ${Colors.WARM_ACCENT};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${Colors.BLACK};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.4s all ease-in-out;

  &:hover {
    
    transition: all 0.2s;
    color: ${Colors.SECONDARY_BG};
    border-left: 3px solid ${Colors.SECONDARY_BG};
    border-right: 3px solid ${Colors.SECONDARY_BG};
  }
`;

