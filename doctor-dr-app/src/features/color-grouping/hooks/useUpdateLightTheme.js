import { useSelector } from "react-redux";
import {selectLightTheme} from "../store/selectors/ColourGroupingSelector.js";
import {useUpdateColourGroupTheme} from "./useUpdateColourGroupTheme.js";

export function useUpdateLightTheme(){
    const lightTheme = useSelector(selectLightTheme);
   return useUpdateColourGroupTheme(lightTheme);
}