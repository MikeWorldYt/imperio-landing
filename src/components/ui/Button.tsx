interface ButtonProps {
  text: string;
  href?: string;
  icon?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary_sm" | "secondary_sm" | "primary_lg" | "secondary_lg" | "mutted_sm" | "mutted_lg" | "transparent";
  classAditional?: string;
}

export const Button:React.FC<ButtonProps> = ({text, href, onClick, variant = "primary_sm", classAditional, children}) => {
  const variantClass = {
    primary_sm: "btn-primary px-4 py-1",
    secondary_sm: "btn-secondary px-4 py-1",
    mutted_sm: "btn-mutted px-4 py-1",
    primary_lg: "btn-primary px-4 py-2",
    secondary_lg: "btn-secondary px-4 py-2",
    mutted_lg: "btn-mutted px-4 py-2",
    transparent: "transparent",
  };

  const className = variantClass[variant];

  if (href) {
    return (
      <a
        href={href}
        className={`${variantClass[variant]} ${classAditional ?? ""}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${className} ${classAditional ?? ""}`}>
      {children || text}
    </button>
  );
};