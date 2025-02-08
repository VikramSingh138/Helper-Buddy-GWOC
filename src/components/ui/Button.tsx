import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-full transition-colors flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-500 hover:bg-white hover:text-black hover:border-white rounded',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100',
    outline: 'bg-white text-black border border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full transition-colors'
  };

  const sizes = {
    sm: 'text-sm h-8 px-3',
    md: 'text-base h-10 px-4',
    lg: 'text-lg h-12 px-6'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" />
      ) : children}
    </button>
  );
}
