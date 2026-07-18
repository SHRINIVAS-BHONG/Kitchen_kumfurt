import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* SVG Icon matching the business card */}
      <svg 
        width="45" 
        height="45" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Grey 'K' shape */}
        {/* Vertical Stem */}
        <rect x="0" y="10" width="20" height="80" fill="#B0B0B0" />
        
        {/* Grey Chevrons */}
        <polygon points="24,50 56,10 76,10 44,50" fill="#B0B0B0" />
        <polygon points="24,50 56,90 76,90 44,50" fill="#B0B0B0" />

        {/* Red Chevrons */}
        <polygon points="54,50 86,10 106,10 74,50" fill="#D31E27" />
        <polygon points="54,50 86,90 106,90 74,50" fill="#D31E27" />
      </svg>
      
      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-display font-bold text-xl tracking-wider text-white m-0 p-0 leading-[0.9]">KICHEN</span>
        <span className="font-display font-bold text-xl tracking-wider text-white m-0 p-0 leading-[0.9]">KUMFURT</span>
      </div>
    </div>
  );
};
