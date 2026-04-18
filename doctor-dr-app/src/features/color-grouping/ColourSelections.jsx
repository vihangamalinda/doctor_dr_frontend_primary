import {Row,Button,Heading} from "../../ui/index";
import { useUpdateLightTheme,
    useUpdateDarkTheme,
    useUpdateColourBlindFriendlyTheme,} from "./hooks/index.js";

function ColourSelections() {
    const updateLightTheme =useUpdateLightTheme();
    const updateDarkTheme = useUpdateDarkTheme();
    const updateColourBlindFriendlyTheme = useUpdateColourBlindFriendlyTheme();

    return (
       <Row type="horizontal-space-around" >
        <Row >
            <Heading as="h3">Colour Selections</Heading>
        </Row>
        <Row type="horizontal-center">
            <Button variation="primary" size="large" onClick={() => updateLightTheme()}>
                Light Theme
            </Button>
            <Button variation="primary" size="large" onClick={() => updateDarkTheme()}>
                Dark Theme
            </Button>
            <Button variation="primary" size="large" onClick={() => updateColourBlindFriendlyTheme()}>
                Colour Blind Friendly
            </Button>
        </Row>
       </Row>
    );
}

export default ColourSelections;