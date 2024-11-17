import { useState } from "react";
import { TreeNode as TreeNodeType } from "@/types/TreeNode";
import TreeNode from "./TreeNode";

interface TreeViewProps {
  data: TreeNodeType[];
}

const TreeView = ({ data }: TreeViewProps) => {
  const [nodes, setNodes] = useState(data);

  const handleDelete = (name: string) => {
    const deleteNode = (nodeList: TreeNodeType[]): TreeNodeType[] => {
      return nodeList
        .filter((node) => node.name !== name)
        .map((node) => {
          if (node.children) {
            return { ...node, children: deleteNode(node.children) };
          }
          return node;
        });
    };

    setNodes(deleteNode(nodes));
  };

  return (
    <div className="p-5 border box-border border-gray-600 rounded">
      <div className="mb-5">
        <h1 className="mb-3 text-xl">Database Explorer</h1>
        <hr className="border-gray-600 opacity-30" />
      </div>
      {nodes.map((node) => (
        <TreeNode
          key={node.name}
          node={node}
          depth={0}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TreeView;
