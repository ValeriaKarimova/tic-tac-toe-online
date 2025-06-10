const symbolClasses = {
  O: "text-blue-600",
  X: "text-blue-400",
};

export function GameSymbol({ symbol }) {
  const getClassName = () => {
    return symbolClasses[symbol] ?? "";
  };

  return <span className={`, ${getClassName()}`}>{symbol}</span>;
}
