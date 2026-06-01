import React from 'react';

const Button = ({ children, disabled, className = '', ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full bg-gold-default hover:bg-gold-light text-white font-semibold py-4 px-8 rounded-xl
                 transition-all duration-200 flex items-center justify-center gap-2 text-lg
                 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;