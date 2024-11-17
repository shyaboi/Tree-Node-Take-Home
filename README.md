# Node Tree View Project

This is a reusable, and type-safe **Tree View** component built with **React**, **TypeScript**, and **Tailwind CSS**.


## Features

- **Type Safety**: Comprehensive TypeScript support for type-safe development.
- **Recursive Rendering**: Efficiently handles nested data structures.
- **Expandable/Collapsible Nodes**: Interactive functionality for exploring tree nodes with smooth animations.
- **Custom Icons**: Dynamically rendered icons based on node `class`.
- **Tag Display**: Tags for `type` and `engine` fields.
- **Delete Functionality**: Nodes marked as `deletable` can be removed interactively.
- **Accessibility**: ARIA roles and keyboard navigation support.
- **Styling**: Responsive and visually appealing with Tailwind CSS.
- **Performance**: Optimized for rendering with minimal DOM updates.

# Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shyaboi/Tree-Node-Take-Home
cd Tree-Node-Take-Home
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the development server by running:

```bash
npm run dev
```

### 4. Open the Application

Open your browser and navigate to:

```bash
http://localhost:5173
```

### File Structure

```bash
src/
├── components/
│   ├──── utils/ 
|   |──── renderIcon.ts      # Utility for rendering dynamic icons based on node class
|   |──── getColorByType.ts  # Utility for rendering node name text and color by type
│   ├── index.tsx            # Index component for rendering the TreeView
│   ├── TreeNode.tsx         # Recursive component for rendering tree nodes
│   ├── TextDisplay.tsx      # Component for rendering styled node text
│   ├── TagDisplay.tsx       # Component for rendering node tags
├── data/
│   ├── sampleData.ts        # Sample JSON data for the tree structure
├── types/
│   ├── TreeNode.ts          # Type definitions for tree nodes 
```

# How to Use

### 1. Customizing Data

You can modify the tree data by editing the data/sampleData.ts file. The data structure should follow this format:

```bash
export const sampleData = [
  {
    name: "Root Node",
    class: "db",
    type: "system",
    engine: null,
    deletable: false,
    visible: true,
    children: [
      {
        name: "Child Node",
        class: "table",
        type: "model",
        engine: "lightwood",
        deletable: true,
        visible: true,
      },
    ],
  },
];
```

### 2. Delete Nodes

- Nodes marked with deletable: true will display a delete button next to their name.
- Clicking the delete button triggers a confirmation dialog before removing the node from the tree.

### 3. Accessibility

The Tree View component is built with accessibility in mind:

- Use the Tab key to navigate through nodes.
- Use RightArrow and LeftArrow or Space to expand/collapse a node.
- ARIA attributes such as role="treeitem" and role="group" ensure compatibility with screen readers.

## Limitations

- Depth Limitation: The current implementation assumes a maximum depth of 3 levels, per the project requirements.
- Performance: Does not include optimizations like virtualization for very large datasets.

## Future Improvements

- Virtualization: Add support for large datasets using tools like react-window.
- Expand/Collapse All: Provide buttons or keyboard shortcuts to expand or collapse all nodes.
- Enhanced Testing: Improve test coverage for edge cases and accessibility.

# React + TypeScript + Vite

Provided is a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
