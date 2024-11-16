export interface TreeNode {
    name: string;
    class: string;
    type?: string;
    engine?: string | null;
    deletable: boolean;
    visible?: boolean;
    schema?: string | null; 
    children?: TreeNode[];
  }
  