
import React, {JSX, FC} from 'react'
import { useRouter } from 'next/navigation'

type HomePageCardProps = {
  title: string
  text: string
  href: string
  // @ts-ignore
  icon: JSX
}



export const HomePageCard: FC<HomePageCardProps> = ({title, text, icon, href}) => {
  const router = useRouter()
  const onclick = () => {
    router.push(href)
  }
  
  return (
     <div className={'card bg-white shadow hover:cursor-pointer hover:bg-gray-100'} onClick={onclick}>
            <div className={'card-body'}>
              <div className="flex flex-col w-full border-opacity-50">
                <div className={'text-secondary text-center w-full mx-auto'}>
                  {icon}
                </div>
                <h1 className="card-title text-info justify-center pt-3">{title}</h1>
                <div className="divider w-1/3 mx-auto "></div>
                <p className={'text-center text-small overflow'}>{text}</p>
              </div>
            </div>
          </div>
  )
}