export function UiButton({ children, size, color, onClick, className }) {
  const classesObj = {
    size: {
      lg: "w-45 h-11 rounded-lg text-2xl",
      md: "w-23 h-8 rounded-md text-sm",
    },
    color: {
      teal: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "hover:bg-teal-50 text-teal-600 outline outline-teal-600",
    },
  };
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${classesObj.size[size]} ${classesObj.color[color]} ${className}`}
    >
      {children}
    </button>
  );
}
