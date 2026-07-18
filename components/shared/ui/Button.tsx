
type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'social' | 'arrow';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  hoverBg?: string;
  hoverText?: string;
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  fullWidth = false,
  className = '',
  hoverBg = '',
  hoverText = '',
  ...props
}: ButtonProps) {
  const base = `font-inter rounded-full font-medium transition flex items-center`;
  const variants = {
    primary: "bg-blue-500 text-white py-2 px-6",
    secondary: "bg-gray-500 text-white py-2 px-6",
    outlined: "bg-white text-black border border-black py-2 px-6 hover:bg-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black",
    social: "bg-white text-black shadow-sm py-2 px-3 justify-start",
    arrow: "bg-white relative flex text-black border-none shadow-md py-4 text-lg pl-6 pr-16",
  };
  // Merge custom className
  const mergedClassName = `${base} ${variants[variant]}${fullWidth ? " w-full" : ""} ${className}`;

  return (
    <button
      className={mergedClassName}
      style={{} as React.CSSProperties}
      onMouseEnter={e => {
        if (hoverBg) (e.currentTarget as HTMLElement).style.backgroundColor = hoverBg;
        if (hoverText) (e.currentTarget as HTMLElement).style.color = hoverText;
      }}
      onMouseLeave={e => {
        if (hoverBg) (e.currentTarget as HTMLElement).style.backgroundColor = '';
        if (hoverText) (e.currentTarget as HTMLElement).style.color = '';
      }}
      {...props}
    >
      {variant === 'social' && icon && (
        <span className="mr-3 flex items-center">{icon}</span>
      )}
      <span className={variant === 'social' ? "text-left" : ""}>{children}</span>
      {variant === 'arrow' && (
        <span className="ml-2 text-red-400 absolute right-4">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </span>
      )}
      {icon && variant !== 'social' && variant !== 'arrow' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}
