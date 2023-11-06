import { useQuery } from "@tanstack/react-query";
import axios from 'axios'

export const cardQueryKeys = {
  homePageCards: () => ['homePageCards']
}
type CardContent = {
  title: string,
  description: string,
  link: string
}
export const useHomePageCard = () => {

  return useQuery<CardContent[]>(cardQueryKeys.homePageCards(), () => axios.get('http://localhost:8055/items/homepage_cards').then((response) => {
    const originalData = response.data.data
    
    const newDataArray = originalData.map((data: CardContent) => ({
        title: data.title,
        description: data.description,
        link: data.link
    }))

    return newDataArray
  }))
}
