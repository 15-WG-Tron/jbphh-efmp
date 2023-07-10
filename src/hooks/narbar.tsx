import axios, {AxiosResponse} from 'axios'
import {EUri} from '../const/enums';
import { useQuery } from '@tanstack/react-query';
import { NavbarMenu } from '../types';

const navbarMenuQueryKeys = {
  navbarMenu:  () => ['navbar-menu']
}

export const useNavbarMenu = () => {
  return useQuery<NavbarMenu>(navbarMenuQueryKeys.navbarMenu(), () => {
    return axios.get<NavbarMenu>(`http://localhost:1337/${EUri.NAVBAR_MENU}`).then(results => results.data )
  })
}