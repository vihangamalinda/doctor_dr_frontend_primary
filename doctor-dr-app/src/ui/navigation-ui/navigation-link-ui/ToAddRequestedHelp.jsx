import StyledNavLink from "./StyledNavLink.jsx";
import { TO_REQUEST_HELP_PAGE } from "./NavigationConstants.js";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";

function ToAddRequestedHelp() {
  return (
    <StyledNavLink to={TO_REQUEST_HELP_PAGE}>
      <HiMiniChatBubbleBottomCenterText /> <span>Helper</span>
    </StyledNavLink>
  );
}

export default ToAddRequestedHelp;
