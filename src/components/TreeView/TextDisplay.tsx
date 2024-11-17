interface ColoredTextProps {
  text: string | null;
  type?: string;
}

const TextDisplay = ({ text, type }: ColoredTextProps) => {
  const getClassByType = (type: string = "default") => {
    switch (type) {
      case "db":
        return "text-blue-600";
      case "table":
        return "text-red-600";
      case "model":
        return "text-purple-600";
      case "view":
        return "text-green-600";
      case "agent":
        return "text-orange-400";
      default:
        return "text";
    }
  };

  return <span className={getClassByType(type)}>{text}</span>;
};

export default TextDisplay;
