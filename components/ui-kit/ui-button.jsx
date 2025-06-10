export function UiButton({ children, size, color, onClick, className }) {
  const classesObj = {
    lg: "py-2 px-8 rounded-lg text-2xl",
    md: "py-2 px-6 rounded-md text-sm",
    teal: "bg-teal-600 hover:bg-teal-500 text-white",
    outline: "hover:bg-teal-50 text-teal-600 outline outline-teal-600",
  };
  return (
    <button
      onClick={onClick}
      className={`h-11 w-31 cursor-pointer ${classesObj[size]} ${classesObj[color]} ${className}`}
    >
      {children}
    </button>
  );
}
