import React from 'react';

const Button = ({ name, variant = 'primary', size = 'md', onClick, disabled = false, href, target, className = '' }) => {
  const baseClasses = "relative overflow-hidden rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center text-center cursor-pointer select-none";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-xs min-w-[80px]",
    md: "px-5 py-2.5 text-sm min-w-[100px] sm:px-6 sm:py-3 sm:text-base sm:min-w-[120px]",
    lg: "px-6 py-3 text-base min-w-[120px] sm:px-8 sm:py-4 sm:text-lg sm:min-w-[140px]"
  };

  const variants = {
    primary: {
      background: `conic-gradient(from 0deg, #6366f1, #1e293b, #1e293b, #6366f1, #1e293b, #1e293b, #1e293b, #6366f1)`,
      innerBg: "bg-slate-900",
      textColor: "text-white",
      hoverEffect: "hover:shadow-lg hover:shadow-indigo-500/25"
    },
    secondary: {
      background: `conic-gradient(from 0deg, #10b981, #1e293b, #1e293b, #10b981, #1e293b, #1e293b, #1e293b, #10b981)`,
      innerBg: "bg-slate-900",
      textColor: "text-white",
      hoverEffect: "hover:shadow-lg hover:shadow-emerald-500/25"
    },
    accent: {
      background: `conic-gradient(from 0deg, #f59e0b, #1e293b, #1e293b, #f59e0b, #1e293b, #1e293b, #1e293b, #f59e0b)`,
      innerBg: "bg-slate-900",
      textColor: "text-white",
      hoverEffect: "hover:shadow-lg hover:shadow-amber-500/25"
    },
    danger: {
      background: `conic-gradient(from 0deg, #ef4444, #1e293b, #1e293b, #ef4444, #1e293b, #1e293b, #1e293b, #ef4444)`,
      innerBg: "bg-slate-900",
      textColor: "text-white",
      hoverEffect: "hover:shadow-lg hover:shadow-red-500/25"
    },
    ghost: {
      background: `conic-gradient(from 0deg, #64748b, #334155, #334155, #64748b, #334155, #334155, #334155, #64748b)`,
      innerBg: "bg-transparent",
      textColor: "text-slate-300",
      hoverEffect: "hover:shadow-lg hover:shadow-slate-500/25"
    }
  };

  const currentVariant = variants[variant] || variants.primary;

  const buttonStyle = {
    background: currentVariant.background,
    backgroundSize: '300% 300%',
    animation: 'shine 6s ease-in-out infinite',
  };

  const ButtonComponent = href ? 'a' : 'button';
  const buttonProps = href 
    ? { href, target, rel: target === '_blank' ? 'noopener noreferrer' : undefined }
    : { onClick, disabled, type: 'button' };

  return (
    <>
      <style>{`
        @keyframes shine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
          }
        }

        .button-wrapper:hover .button-inner::before {
          opacity: 0.1;
        }

        .button-inner {
          position: relative;
        }

        .button-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .button-wrapper:active {
          transform: scale(0.98);
        }

        .button-wrapper:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }
      `}</style>

      <div
        className={`
          button-wrapper p-0.5 rounded-full transition-all duration-300 inline-block
          hover:scale-105 active:scale-98 
          ${currentVariant.hoverEffect}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        style={buttonStyle}
      >
        <ButtonComponent
          {...buttonProps}
          className={`
            button-inner ${baseClasses} ${sizeClasses[size]} 
            ${currentVariant.innerBg} ${currentVariant.textColor}
            ${disabled ? 'cursor-not-allowed' : ''}
            focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-slate-900
          `}
          disabled={disabled}
        >
          <span className="relative z-10">{name}</span>
        </ButtonComponent>
      </div>
    </>
  );
};

export default Button;