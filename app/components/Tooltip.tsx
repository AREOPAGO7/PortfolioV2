import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;  // Changed from string to ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = ({ children, content, direction = 'top' }: TooltipProps) => {
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative group">
      {children}
      <div className={`
        absolute ${positions[direction]}
        scale-0 group-hover:scale-100
        transition-all duration-200 origin-center
        bg-zinc-800 text-white/80 text-sm
        px-3 py-2 rounded-md whitespace-nowrap
        z-50
      `}>
        {content} {/* Now supports JSX content */}
        <div className={`
          absolute w-2 h-2 bg-zinc-800
          transform rotate-45
          ${direction === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}
          ${direction === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}
          ${direction === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}
          ${direction === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}
        `}/>
      </div>
    </div>
  );
};
