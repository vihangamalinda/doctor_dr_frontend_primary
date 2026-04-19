import { useSelector } from "react-redux";
import { selectDarkTheme } from "../store/selectors/ColourGroupingSelector.js";
import { useUpdateColourGroupTheme } from "./useUpdateColourGroupTheme";

export function useUpdateDarkTheme() {
  const darkTheme = useSelector(selectDarkTheme);
  return useUpdateColourGroupTheme(darkTheme);
}
