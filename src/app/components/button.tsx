// components/Button.tsx
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  variant?: "text" | "rectangular"; // New prop to control style
}

const Button: React.FC<ButtonProps> = ({ href, text, variant = "text" }) => {
  const buttonClass =
    variant === "rectangular"
      ? "inline-block px-6 py-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-center transition-colors duration-300"
      : "text-blue-500 hover:text-blue-700";

  return (
    <Link href={href} className={buttonClass}>
      {text}
    </Link>
  );
};

export default Button;