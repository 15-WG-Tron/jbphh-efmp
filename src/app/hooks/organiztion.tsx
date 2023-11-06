import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const organizationQueryKeys = {
organization: () => ['organizations']
}

type Organization = {
 checklist: any[]; // You can specify the type for the checklist array
  contact: number[]; // You can specify the type for the contact array
  date_created: string;
  date_updated: string;
  id: number;
  name: string;
  shortName: string;
  status: string;
  user_created: string;
  user_updated: string;

}
export const useGetOrganization = () => {
  const queryClient = useQueryClient()
  queryClient.invalidateQueries(organizationQueryKeys.organization())

  return useQuery<Organization[]>(organizationQueryKeys.organization(), () => axios.get('http://localhost:8055/items/organization').then(response => response.data.data)) 

} 
