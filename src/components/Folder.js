import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import "./folder.css";

function Folder({ explorer }) {
  const [showSubFolder, setShowSubFolder] = useState(false);

  if (explorer.isFolder) {
    return (
      <div className="folder-container">
        <div
          className="folder"
          onClick={() => setShowSubFolder(!showSubFolder)}
        >
          <div className="folder-header">
            <div>
              {showSubFolder ? (
                <FaRegFolderOpen style={{ color: "#40b6e8" }} />
              ) : (
                <FaFolder style={{ color: "#5fb1d4" }} />
              )}
            </div>
            <div>{explorer.name}</div>
          </div>
          <div className="edit-container">
            <button>
              Folder <FaPlus />
            </button>
            <button>
              File <FaPlus />
            </button>
          </div>
        </div>
        {showSubFolder && (
          <div className="subfolder-container">
            {explorer.items.map((exp) => {
              return <Folder explorer={exp} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "5px" }}>
        <span>
          <FaFileAlt style={{ color: "#1ad69a" }} /> {explorer.name}
        </span>
      </div>
    );
  }
}

export default Folder;
