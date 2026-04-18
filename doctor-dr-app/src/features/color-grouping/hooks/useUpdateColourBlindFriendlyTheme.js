import { useSelector } from "react-redux";
import { selectColourBlindFriendlyTheme } from "../store/selectors/ColourGroupingSelector";
import { useUpdateColourGroupTheme } from "./useUpdateColourGroupTheme";

export function useUpdateColourBlindFriendlyTheme(){
    const colourBlindFriendlyTheme = useSelector(selectColourBlindFriendlyTheme);
    return useUpdateColourGroupTheme(colourBlindFriendlyTheme);
}