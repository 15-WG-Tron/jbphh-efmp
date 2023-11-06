import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const faqQueryKeys = {
  faqs: () => ['faqs']
}


export const useGetFaqs = () => {
  const queryClient = useQueryClient()

  queryClient.invalidateQueries(faqQueryKeys.faqs())

  return useQuery(faqQueryKeys.faqs(), () => axios.get('http://www.localhost:8055/items/faq').then(response => response.data.data) )
}
