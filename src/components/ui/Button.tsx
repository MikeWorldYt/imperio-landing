interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({
  text,
  href,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  const variantClass = {
    primary: "inline-block px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
    secondary: "inline-block px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition",
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