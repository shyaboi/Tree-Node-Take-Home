const renderIcon = (nodeClass: string): string => {
  switch (nodeClass) {
    case "db":
      return "🛢";
    case "table":
      return "📄";
    case "schema":
      return "📜";
    default:
      return "📂";
  }
};

export default renderIcon;
