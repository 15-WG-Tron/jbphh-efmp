import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className={'fixed bottom-2 right-2'}>
      <div>
        <span className={'inline-block text-gray-400'}>Powered by</span>
        <Image src={'/tron_icon.png'} alt={'Tron Logo'} width={100} height={75} className={'inline-block ml-2'} />
      </div>
    </footer>
  );
};
