import Folder from "./components/Folder";
import explorerData from "./data/explorer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
