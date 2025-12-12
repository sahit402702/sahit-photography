import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed text-sm';

  const variantClasses = {
    primary:
      'bg-black text-white border border-black hover:bg-gray-900 hover:border-gray-900 hover:scale-102 active:scale-98',
    secondary:
      'bg-white text-black border border-white hover:bg-gray-100 hover:scale-102 active:scale-98',
    ghost:
      'bg-transparent text-white border border-gray-400 hover:border-white hover:text-white hover:scale-102 active:scale-98',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
