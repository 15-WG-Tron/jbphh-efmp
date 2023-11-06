import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='mt-auto pb-2'>
      <div className='flex justify-center' >
        <span className='inline-block text-gray-500'>Powered by</span>
        <Image src='/tron_icon.png' alt='Tron Logo' width={100} height={75} className='inline-block ml-2' />
      </div>
    </footer>
  );
}
