import { useSelector } from "react-redux";
import {
  selectAllThemesValues,
  selectCurrentColourGroup,
} from "../store/selectors/ColourGroupingSelector.js";
import {
  removeAllClourGroupsFromDocumentObject,
  addColourGroupToDocumentObject,
} from "./UpdateColourGroupingOnDocument.js";
import { updateCurrentColourGroup } from "../store/useColourGroup.js";
import { useDispatch } from "react-redux";

export function useUpdateColourGroupTheme(newColourGroup) {
  const allColourGroupsValue = useSelector(selectAllThemesValues);
  const currentColourGroup = useSelector(selectCurrentColourGroup);
  const dispatch = useDispatch();

  const updateColourGroup = () => {
    if (currentColourGroup.value !== newColourGroup.value) {
      removeAllClourGroupsFromDocumentObject(allColourGroupsValue);
      addColourGroupToDocumentObject(newColourGroup.value);
      dispatch(updateCurrentColourGroup(newColourGroup));
    }
  };

  return updateColourGroup;
}
