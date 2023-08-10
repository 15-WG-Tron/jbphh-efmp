'use client';
import Image from 'next/image';

export const EfmpFamilySupport = () => {
  return (
    <div>
      <Image
        src={'/EFMP-FamilySupport.jpg'}
        alt={'EFMP Family Support Logo'}
        width={350}
        height={250}
        className={'mx-auto'}
      />
    </div>
  );
};
