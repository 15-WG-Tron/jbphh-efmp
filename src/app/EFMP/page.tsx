'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { EfmpEnrollment } from './EfmpEnrollment';
import { EfmpAssigment } from './EfmpAssigment';
import { EfmpFamilySupport } from './EfmpFamilySupport';

const EfmpMainPage = () => {
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    startTransition(() => setActiveTab(index));
  };

  return (
    <>
      <Image className='mx-auto' src={'/EFMP_Air_Force.jpg'} alt={'Air Force EFMP Logo'} width={600} height={500} />
      <div className="hero min-h-1/2 bg-base-200 mt-6 w-11/12 mx-auto hidden md:flex justify-center">
        <div className="hero-content text-center text-neutral">
          <div className="max-w-3/4 p-12">
            <h1 className="text-5xl font-bold">EFMP One Stop</h1>
            <div className={'p-10 leading-10 text-center'}>
              <p>
                At Joint Base Pearl Harbor-Hickam, all EFMP program components and the School Liaison are situated
                together for your convenience, ensuring comprehensive support for your EFMP needs. Our location is at
                the Military & Family Readiness Center,
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" card w-11/12 overflow-auto bg-white shadow mt-10 mx-auto p-1 rounded-xl">
        <div className="tabs w-full md:justify-center ">
          <a
            className={`tab tab-lg tab-bordered ${activeTab === 0 ? 'tab-active' : null}`}
            onClick={() => handleTabClick(0)}
          >
            EFMP ID & Enrollment
          </a>
          <a
            className={`tab tab-lg tab-bordered ${activeTab === 1 ? 'tab-active' : null}`}
            onClick={() => handleTabClick(1)}
          >
            EFMP Assignment Coordination
          </a>
          <a
            className={`tab tab-lg tab-bordered ${activeTab === 2 ? 'tab-active' : null}`}
            onClick={() => handleTabClick(2)}
          >
            EFMP Family Support
          </a>
        </div>
        <div className="card-body">
          {activeTab === 0 && <EfmpEnrollment />}
          {activeTab === 1 && <EfmpAssigment />}
          {activeTab === 2 && <EfmpFamilySupport />}
        </div>
      </div>
    </>
  );
};

export default EfmpMainPage;
