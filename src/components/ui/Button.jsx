import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-gray-950 text-white hover:bg-gray-800",

  secondary: "bg-gray-700 text-white hover:bg-gray-600",

  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-950",

  outline:
    "border border-gray-300 bg-transparent text-gray-950 hover:border-gray-950 hover:bg-gray-950 hover:text-white",
};

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn(
        baseClasses,
        "rounded-none",
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className,
      )}
      {...props}>
      {children}
    </button>
  );
}
