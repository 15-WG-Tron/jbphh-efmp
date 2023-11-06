import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const contactQueryKeys = {
  contacts: () => ['contacts']
}

type Contact = {}

export const useGetContact = () => {
  const queryClient = useQueryClient()

  queryClient.invalidateQueries(contactQueryKeys.contacts())

  return useQuery(contactQueryKeys.contacts(), () => axios.get('http://localhost:8055/items/contact').then(response => response.data.data))
}
