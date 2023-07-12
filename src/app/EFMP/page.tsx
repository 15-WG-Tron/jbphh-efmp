'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const EfmpMainPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <Image src={'/EFMP_Air_Force.jpg'} alt={'Air Force EFMP Logo'} width={600} height={500} />
      <div className="hero min-h-1/2 bg-base-200 mt-6">
        <div className="hero-content text-center text-neutral">
          <div className="max-w-3/4 p-12">
            <h1 className="text-5xl font-bold">EFMP One Stop</h1>
            <div className={'flex flex-col items-center p-10 leading-10 text-center'}>
              <p>
                At Joint Base Pearl Harbor-Hickam, all EFMP program components and the School Liaison are
                situated together for your convenience, ensuring comprehensive support for your EFMP needs. Our location
                is at the Military & Family Readiness Center,
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-3/4  overflow-auto bg-white shadow mt-10">
        <div className="tabs text-center">
          <a className="tab tab-lg tab-lifted">EFMP Identification & Enrollment</a>
          <a className="tab tab-lg tab-lifted tab-active">EFMP Medical</a>
          <a className="tab tab-lg tab-lifted">EFMP Assignment</a>
          <a className="tab tab-lg tab-lifted">EFMP Family Support</a>
        </div>
        <div className="card-body">


        </div>
      </div>
    </>
  );
};

export default EfmpMainPage;
