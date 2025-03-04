
import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#111111] z-50">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />

</div>
    </div>
  );    
};

export default Loading;