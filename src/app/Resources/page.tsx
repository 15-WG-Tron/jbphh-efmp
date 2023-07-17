'use client';
import Image from "next/image";
import { HomePageCard } from "../../components/HomePageCard";
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Resources() {
    return (
        <>
        <div className="hero min-h-1/2 bg-base-200 w-11/12">
        <div className="hero-content text-center">
          <div className="max-w-3/4 p-12">
            <h1 className="text-5xl font-bold">Resources</h1>
            <div className={'flex flex-col items-center p-10 leading-10 text-center'}>
              <p>
                Here is a curated list of the most up-to-date resources to help your process go smoothly.
              </p>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </div>
        
      <section className={'items-start mt-10 w-5/6'}>
        <p className={'text-2xl text-bold'}> List Title</p>
        <p className={'text-gray-300'}>Text blah blah blah</p>
      </section>
      <div className="flex flex-col w-5/6">
        <div className="lg:divider"></div>
        <div className={'grid lg:grid-cols-3 md:grid-cols-auto gap-3 lg:min-h-[10rem] mx-'}>
          <HomePageCard title={'EFMP Family Vector'} text='Click Here' href='https://daffamilyvector.us.af.mil/membersite/' icon={<GroupsIcon />} />
          <HomePageCard title={'Community'} text={'asdasdasdasd'} href='' icon={<HelpIcon />} />
          <HomePageCard title={'F.A.Q'} text={'asdasdasdasd'} href='' icon={<GroupsIcon />} />
        </div>
      </div>
        
        
        
        
        
        
        
        </>
)}
