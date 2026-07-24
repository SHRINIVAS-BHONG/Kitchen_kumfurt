import React from 'react';
import Image from 'next/image';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 md:gap-2 ${className}`}>
      {/* Logo Image */}
      <div className="w-[3.5rem] h-[3.5rem] shrink-0 flex items-center justify-center relative">
          <Image 
              src="/images/main_logo.png" 
              alt="Logo" 
              fill
              className="object-contain scale-[1.75] translate-y-[2px] md:translate-y-[3px]" 
              priority 
          />
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <span className="font-display font-bold text-xl tracking-[0.2em] text-white leading-[1.1]">KICHEN</span>
        <span className="font-display font-bold text-xl tracking-[0.05em] text-white leading-[1.1]">KUMFURT</span>
      </div>
    </div>
  );
};
