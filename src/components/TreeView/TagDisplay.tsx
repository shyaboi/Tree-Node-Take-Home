import { getColorByType } from "./utils/getColorByType";

interface TagsDisplayProps {
  type?: string | null;
  engine?: string | null;
}

const TagsDisplay = ({ type, engine }: TagsDisplayProps) => {
  const typeColorClass = getColorByType(type);
  return (
    <div className="flex space-x-2">
      {engine && (
        <span className="text-xs bg-blue-200 text-blue-800 px-1 rounded">
          {engine}
        </span>
      )}
      {type && (
        <span className={`text-xs ${typeColorClass} px-1 rounded`}>{type}</span>
      )}
    </div>
  );
};

export default TagsDisplay;
