'use client';

import { HomePageCard } from '../components/HomePageCard';
import { useHomePageCard } from './hooks/homepagecard';

export default function Home() {
  const { data: homePageCardContent } = useHomePageCard();

  return (
    <div className="w-5/6 mx-auto">
      <div className="hero min-h-1/2 md:bg-base-200 w-full">
        <div className="hero-content text-center">
          <div className="max-w-3/4 p-12">
            <h1 className="text-5xl font-bold">Hickam Connect</h1>
            <div className=" hidden md:flex md:flex-col items-center p-10 leading-10 text-center">
              <p>
                Hickam Connect, created by the Tron team, is a comprehensive platform that brings together a wealth of
                information and valuable resources for the Joint Base Pearl Harbor-Hickam community.
              </p>
              <p>
                Hickam Connect serves as a central hub where you can access a vast collection of information and
                discover valuable resources.
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

      <section className="mt-10 w-full">
        <p className="text-2xl text-bold mb-3 text-center md:text-left"> Need help?</p>
        <p className="text-gray-300 hidden md:block">Perphaps you can find the answers in our collections</p>
      </section>
      <div className="md:divider"></div>
      <div className="w-full flex justify-center flex-col">
        <div className="grid md:grid-cols-3 grid-cols-auto gap-3">
          <HomePageCard cardContent={homePageCardContent} />
        </div>
      </div>
    </div>
  );
}
