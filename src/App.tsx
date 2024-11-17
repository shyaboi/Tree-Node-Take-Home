import "./App.css";
import TreeView from "./components/TreeView";
import { sampleData } from "./data/sampleData";

function App() {
  return (
    <>
      <TreeView data={sampleData} />
    </>
  );
}

export default App;
