import Folder from "./components/Folder";
import explorerData from "./data/explorer";

function App() {
  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
