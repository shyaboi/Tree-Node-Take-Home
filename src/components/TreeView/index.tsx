import { TreeNode as TreeNodeType } from "@/types/TreeNode";
import TreeNode from "./TreeNode";

interface TreeViewProps {
  data: TreeNodeType[];
}

const TreeView = ({ data }: TreeViewProps) => {
  
  return (
    <div className="p-5 border box-border border-gray-600 rounded">
      <div className="mb-5">
        <h1 className="mb-3 text-xl">Database Explorer</h1>
        <hr className="border-gray-600 opacity-30" />
      </div>
      {data.map((node) => (
        <TreeNode key={node.name} node={node} depth={0}/>
      ))}
    </div>
  );
};

export default TreeView;
