import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
