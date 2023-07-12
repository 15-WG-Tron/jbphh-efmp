'use client';
import { useRouter } from 'next/router';
import HelpIcon from '@mui/icons-material/Help';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Home() {
  return (
    <>
      <div className="hero min-h-1/2 bg-base-200">
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
        <div className="divider"></div>
        <div className={'grid grid-cols-4 gap-3 min-h-[10rem] '}>
          <div className={'card bg-white shadow hover:cursor-pointer'}>
            <div className={'card-body'}>
              <div className="flex flex-col w-full border-opacity-50">
                <HelpIcon className={'text-secondary text-center w-full h-8 mx-auto'} />
                <h1 className="card-title text-info justify-center pt-3">F.A.Q</h1>
                <div className="divider w-1/3 mx-auto"></div>
                <p className={'text-center text-small'}>a;lsfkas;kdas;lkd;lasd</p>
              </div>
            </div>
          </div>
          <div className={'card bg-white shadow hover:cursor-pointer'}>
            <div className={'card-body'}>
              <div className="flex flex-col w-full border-opacity-50">
                <GroupsIcon className={'text-secondary text-center h-8 w-full mx-auto'} />
                <h1 className="card-title text-info justify-center pt-3">Community</h1>
                <div className="divider w-1/3 mx-auto"></div>
                <p className={'text-center text-small'}>a;lsfkas;kdas;lkd;lasd</p>
              </div>
            </div>
          </div>
          <div className={'card bg-white shadow hover:cursor-pointer'}>
            <div className={'card-body'}>
              <div className="flex flex-col w-full border-opacity-50">
                <HelpIcon className={'text-secondary h-8 text-center w-full mx-auto'} />
                <h1 className="card-title text-info justify-center pt-3">F.A.Q</h1>
                <div className="divider w-1/3 mx-auto"></div>
                <p className={'text-center text-small'}>a;lsfkas;kdas;lkd;lasd</p>
              </div>
            </div>
          </div>
          <div className={'card bg-white shadow hover:cursor-pointer'}>
            <div className={'card-body'}>
              <div className="flex flex-col w-full border-opacity-50">
                <HelpIcon className={'text-secondary h-8 text-center w-full mx-auto'} />
                <h1 className="card-title text-info justify-center pt-3">F.A.Q</h1>
                <div className="divider w-1/3 mx-auto"></div>
                <p className={'text-center text-small'}>a;lsfkas;kdas;lkd;lasd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
