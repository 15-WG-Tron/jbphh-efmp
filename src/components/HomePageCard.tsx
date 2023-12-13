'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

type HomePageCardProps = {
  cardContent:
    | {
        title: string;
        description: string;
        icon?: React.ReactNode;
        link: string;
      }[]
    | undefined;
};

export const HomePageCard: FC<HomePageCardProps> = ({ cardContent }) => {
  const router = useRouter();
  const handleOnClick = (href: string) => {
    router.push(href);
  };

  return (
    <>
      {cardContent?.flatMap((card) => {
        const { description, icon, title, link } = card;
        return (
          <div
            key={title}
            onClick={() => handleOnClick(link)}
            className="card bg-white shadow hover:cursor-pointer hover:bg-gray-100"
          >
            <div className="card-body">
              <div className="flex flex-col w-full border-opacity-50">
                <span className="text-secondary text-center w-full mx-auto">{icon}</span>
                <h1 className="card-title text-info justify-center pt-3">{title}</h1>
                <div className="divider w-1/3 mx-auto "></div>
                <p className="text-center text-small overflow">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
