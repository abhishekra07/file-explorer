import { useState } from "react";

function Folder({ explorer }) {
  const [showSubFolder, setShowSubFolder] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setShowSubFolder(!showSubFolder)}>
          <span>📁📂 {explorer.name}</span>
        </div>
        {showSubFolder && (
          <div className="subfolder-container">
            {explorer.items((exp) => {
              return <Folder explorer={exp} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    <div>
      <span>📄 {explorer.name}</span>
    </div>;
  }
}

export default Folder;
