// import Heading from "../ui/secondary-ui/Heading";
import { Heading, Row } from "../ui/index.js";
import ColourSelections from "../features/color-grouping/ColourSelections.jsx";
import { Logout } from "../features/authentication/index.js";

function Settings() {
  return (
    <>
      <Heading as="h1"> Settings</Heading>
      <ColourSelections />
      <Logout />
    </>
  );
}
export default Settings;
