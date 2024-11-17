import { useState } from "react";
import { TreeNode as TreeNodeType } from "@/types/TreeNode";
import renderIcon from "./utils/renderIcon";

interface TreeNodeProps {
  node: TreeNodeType;
}

const TreeNode = ({ node }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (node.visible === false) return null;

  return (
    <div>
      <div
        className={`flex items-center space-x-2 ${
          node.children ? "hover:cursor-pointer" : null
        } hover:opacity-50 p-1 rounded`}
        onClick={() => node.children && setIsOpen(!isOpen)}
      >
        {node.children && (
          <span
            className={`ml-1 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            {">"}
          </span>
        )}
        <span>{renderIcon(node.class)}</span>

        <span className="font-medium">{node.name}</span>

        {node.engine && (
          <span className="text-xs px-1 rounded">{node.engine}</span>
        )}

        {node.type && (
          <span className="text-xs bg-gray-200 text-black px-1 rounded">
            {node.type}
          </span>
        )}
        {node.deletable && (
          <span
            className="text-red-500 bg-red-200 px-1 text-xs ml-auto rounded hover:cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              alert(`Delete ${node.name}?`);
            }}
          >
            Delete
          </span>
        )}
      </div>

      {node.children && (
        <div
          className={`pl-4 overflow-hidden transition-max-height duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
