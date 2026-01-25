import { ReactNode } from 'react';

interface PixelBorderProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  borderWidth?: number;
}

export function PixelBorder({ children, className = '', borderColor = 'black', borderWidth = 4 }: PixelBorderProps) {
  return (
    <div className={`relative ${className}`} style={{
      clipPath: `polygon(
        0 ${borderWidth * 2}px,
        ${borderWidth}px ${borderWidth * 2}px,
        ${borderWidth}px ${borderWidth}px,
        ${borderWidth * 2}px ${borderWidth}px,
        ${borderWidth * 2}px 0,
        calc(100% - ${borderWidth * 2}px) 0,
        calc(100% - ${borderWidth * 2}px) ${borderWidth}px,
        calc(100% - ${borderWidth}px) ${borderWidth}px,
        calc(100% - ${borderWidth}px) ${borderWidth * 2}px,
        100% ${borderWidth * 2}px,
        100% calc(100% - ${borderWidth * 2}px),
        calc(100% - ${borderWidth}px) calc(100% - ${borderWidth * 2}px),
        calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),
        calc(100% - ${borderWidth * 2}px) calc(100% - ${borderWidth}px),
        calc(100% - ${borderWidth * 2}px) 100%,
        ${borderWidth * 2}px 100%,
        ${borderWidth * 2}px calc(100% - ${borderWidth}px),
        ${borderWidth}px calc(100% - ${borderWidth}px),
        ${borderWidth}px calc(100% - ${borderWidth * 2}px),
        0 calc(100% - ${borderWidth * 2}px)
      )`
    }}>
      <div 
        className="absolute inset-0"
        style={{
          background: borderColor,
          clipPath: `polygon(
            0 ${borderWidth * 2}px,
            ${borderWidth}px ${borderWidth * 2}px,
            ${borderWidth}px ${borderWidth}px,
            ${borderWidth * 2}px ${borderWidth}px,
            ${borderWidth * 2}px 0,
            calc(100% - ${borderWidth * 2}px) 0,
            calc(100% - ${borderWidth * 2}px) ${borderWidth}px,
            calc(100% - ${borderWidth}px) ${borderWidth}px,
            calc(100% - ${borderWidth}px) ${borderWidth * 2}px,
            100% ${borderWidth * 2}px,
            100% calc(100% - ${borderWidth * 2}px),
            calc(100% - ${borderWidth}px) calc(100% - ${borderWidth * 2}px),
            calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),
            calc(100% - ${borderWidth * 2}px) calc(100% - ${borderWidth}px),
            calc(100% - ${borderWidth * 2}px) 100%,
            ${borderWidth * 2}px 100%,
            ${borderWidth * 2}px calc(100% - ${borderWidth}px),
            ${borderWidth}px calc(100% - ${borderWidth}px),
            ${borderWidth}px calc(100% - ${borderWidth * 2}px),
            0 calc(100% - ${borderWidth * 2}px),
            0 ${borderWidth * 2}px,
            ${borderWidth * 2}px ${borderWidth * 2}px,
            ${borderWidth * 2}px ${borderWidth * 2}px,
            ${borderWidth * 2}px calc(100% - ${borderWidth * 2}px),
            calc(100% - ${borderWidth * 2}px) calc(100% - ${borderWidth * 2}px),
            calc(100% - ${borderWidth * 2}px) ${borderWidth * 2}px,
            ${borderWidth * 2}px ${borderWidth * 2}px
          )`
        }}
      />
      <div className="relative" style={{ 
        margin: `${borderWidth * 2}px`,
        clipPath: `polygon(
          0 ${borderWidth}px,
          ${borderWidth}px ${borderWidth}px,
          ${borderWidth}px 0,
          calc(100% - ${borderWidth}px) 0,
          calc(100% - ${borderWidth}px) ${borderWidth}px,
          100% ${borderWidth}px,
          100% calc(100% - ${borderWidth}px),
          calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),
          calc(100% - ${borderWidth}px) 100%,
          ${borderWidth}px 100%,
          ${borderWidth}px calc(100% - ${borderWidth}px),
          0 calc(100% - ${borderWidth}px)
        )`
      }}>
        {children}
      </div>
    </div>
  );
}
