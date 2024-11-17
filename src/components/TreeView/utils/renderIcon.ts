const renderIcon = (nodeClass: string): string => {
  switch (nodeClass) {
    case "db":
      return "🛢";
    case "table":
      return "⛩";
    case "view":
      return "👁";
    case "schema":
      return "📜";
    case "model":
      return "🧠";
    case "agent":
      return "🤖";
    default:
      return "📂";
  }
};

export default renderIcon;
