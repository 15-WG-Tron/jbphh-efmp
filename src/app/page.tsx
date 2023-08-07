'use client';
import { useRouter } from 'next/router';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';
import { HomePageCard } from '../components/HomePageCard';

const session = null

if (!session) throw new Error('Test error')
export default function Home() {
  return (
    <>
      <div className="hero min-h-1/2 bg-base-200 w-11/12">
        <div className="hero-content text-center">
          <div className="max-w-3/4 p-12">
            <h1 className="text-5xl font-bold">Welcome to Cyber 'Ohana</h1>
            <div className={'flex flex-col items-center p-10 leading-10 text-center'}>
              <p>
                Cyber 'Ohana, created by the Tron team, is a comprehensive platform that brings together a wealth of
                information and valuable resources for the Joint Base Pearl Harbor-Hickam community.
              </p>
              <p>
                Cyber 'Ohana serves as a central hub where you can access a vast collection of information and discover
                valuable resources.
              </p>
              <p>
                Our commitment extends beyond simply providing information and resources. We are here to guide you and
                ensure that you can easily navigate the platform and make the most of the services offered. If you have
                any questions or need assistance, our team is readily available to provide the support you require.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className={'items-start mt-10 w-5/6'}>
        <p className={'text-2xl text-bold'}> Need help?</p>
        <p className={'text-gray-300'}>Perphaps you can find the answers in our collections</p>
      </section>
      <div className="flex flex-col w-5/6">
        <div className="lg:divider"></div>
        <div className={'grid lg:grid-cols-4 md:grid-cols-auto gap-3 lg:min-h-[10rem] '}>
          <HomePageCard title={'F.A.Q'} text={'asdasdasdasd'} icon={<GroupsIcon />} />
          <HomePageCard title={'Community'} text={'asdasdasdasd'} icon={<HelpIcon />} />
          <HomePageCard title={'F.A.Q'} text={'asdasdasdasd'} icon={<GroupsIcon />} />
          <HomePageCard title={'F.A.Q'} text={'asdasdasdasd'} icon={<GroupsIcon />} />
        </div>
      </div>
    </>
  );
}
