import React from 'react';

const Button = ({ children, disabled, className = '', ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full bg-gold-default hover:bg-gold-light text-black 
                 font-bold px-6 py-3 rounded-xl text-base
                 transition-all duration-200 flex items-center justify-center gap-2
                 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;