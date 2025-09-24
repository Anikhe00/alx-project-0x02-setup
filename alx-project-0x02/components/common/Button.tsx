import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base";
  return (
    <button
      className={`bg-purple-600 text-white ${sizeClasses} ${shape} hover:bg-purple-700 transition`}
    >
      {label}
    </button>
  );
};

export default Button;
