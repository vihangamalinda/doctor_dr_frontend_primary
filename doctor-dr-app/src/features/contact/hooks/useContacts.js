import { useQuery } from "@tanstack/react-query";
import { getAllContacts as getAllContactsApi } from "../../../services/apis/apiContact.js";
import { GET_ALL_CONTACTS } from "./queryKeys.js";

export function useContacts() {
  const {
    data: allContacts,
    isLoading: isAllContactsLoading,
    error,
  } = useQuery({
    queryKey: GET_ALL_CONTACTS,
    queryFn: () => getAllContactsApi(),
  });

  return {
    allContacts,
    isAllContactsLoading,
    error,
  };
}
