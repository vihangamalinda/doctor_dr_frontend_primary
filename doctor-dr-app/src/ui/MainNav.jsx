import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog8Tooth,
  HiMiniChartBarSquare ,
  HiMiniEye ,
  HiMiniChatBubbleBottomCenterText,
  HiMiniUser,
  HiCog8Tooth ,
  HiBugAnt ,
  HiMiniHome

} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

console.log(NavList, StyledNavLink);

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiMiniHome /> <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/diagnosis">
            <HiMiniEye /> <span>Diagnosis</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/submissions">
            <HiMiniChartBarSquare /> <span>Submissions</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/report-issue">
            <HiBugAnt  /> <span>Report issue</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/user">
            <HiMiniChatBubbleBottomCenterText /> <span>Helper</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/user">
            <HiMiniUser /> <span>User</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiCog8Tooth /> <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
export default MainNav;
