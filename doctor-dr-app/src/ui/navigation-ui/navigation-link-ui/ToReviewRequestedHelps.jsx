import { TO_REVIEW_REQUESTED_HELPS } from "./NavigationConstants.js";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import StyledNavLink from "./StyledNavLink.jsx";

function ToReviewRequestedHelps() {
  return (
    <StyledNavLink to={TO_REVIEW_REQUESTED_HELPS}>
      <HiChatBubbleLeftRight /> <span>Review Request Helps</span>
    </StyledNavLink>
  );
}

export default ToReviewRequestedHelps;
