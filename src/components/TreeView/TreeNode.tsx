import { useState } from "react";
import { TreeNode as TreeNodeType } from "@/types/TreeNode";
import renderIcon from "./utils/renderIcon";
import TextDisplay from "./TextDisplay";
import TagsDisplay from "./TagDisplay";

interface TreeNodeProps {
  node: TreeNodeType;
  depth: number;
}

const TreeNode = ({ depth = 0, node }: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (node.visible === false) return null;
  if (depth > 3) return null;

  return (
    <div>
      <div
        className={`flex items-center space-x-2 ${
          node.children ? "hover:cursor-pointer" : ""
        } hover:opacity-50 p-1 rounded`}
        onClick={() => node.children && setIsOpen(!isOpen)}
        role="treeitem"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (
            e.key === "ArrowRight" ||
            (e.key === " " && node.children && !isOpen)
          ) {
            setIsOpen(true);
          }
          if (
            e.key === "ArrowLeft" ||
            (e.key === " " && node.children && isOpen)
          ) {
            setIsOpen(false);
          }
          e.stopPropagation();
        }}
      >
        {node.children && (
          <span
            className={`ml-1 transition-transform duration-500 ${
              isOpen ? "rotate-90" : ""
            }`}
            aria-expanded={isOpen}
          >
            {">"}
          </span>
        )}
        <span>{renderIcon(node.class)}</span>

        <TextDisplay text={node.name} type={node.type} />
        <TagsDisplay type={node.type} engine={node.engine} />

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
          className={`pl-4 overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
          role="group"
        >
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
