interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary_sm" | "secondary_sm" | "primary_lg" | "secondary_lg";
}

export const Button = ({
  text,
  href,
  onClick,
  variant = "primary_sm",
}: ButtonProps) => {
  const variantClass = {
    primary_sm: "btn-primary px-4 py-1",
    secondary_sm: "btn-secondary px-4 py-1",
    primary_lg: "btn-primary px-4 py-2",
    secondary_lg: "btn-secondary px-4 py-2",
  };

  const className = variantClass[variant];

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};