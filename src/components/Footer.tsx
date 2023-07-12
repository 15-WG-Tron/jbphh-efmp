import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer className={"absolute bottom-0 right-2"}>
          <div>
              <p className={"w-full"}>
                Powered by
                <span>
                  <Image src={'/tron_icon.png'} alt={'Tron Logo'} width={75} height={75} />
                </span>
              </p>
            </div>
    </footer>
  )
}