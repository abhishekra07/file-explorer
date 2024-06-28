import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import "./folder.css";

function Folder({ explorer }) {
  const [showSubFolder, setShowSubFolder] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleOnClick = (e, isFolder) => {
    e.stopPropagation();
    setShowSubFolder(true);
    setShowInput({ ...showInput, visible: true, isFolder });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed!");
      console.log("Input Value:", event.target.value);
      explorer.items.unshift({
        id: Date.now(),
        name: event.target.value,
        isFolder: showInput.isFolder,
        items: [],
      });
      setShowInput({ visible: false, isFolder: null });
    }
  };

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
            <button onClick={(e) => handleOnClick(e, true)}>
              Folder <FaPlus />
            </button>
            <button onClick={(e) => handleOnClick(e, false)}>
              File <FaPlus />
            </button>
          </div>
        </div>
        {showSubFolder && (
          <div className="subfolder-container">
            {showInput.visible && (
              <div className="input-container">
                <span>
                  {showInput.isFolder ? (
                    <FaFolder style={{ color: "#5fb1d4" }} />
                  ) : (
                    <FaFileAlt style={{ color: "#1ad69a" }} />
                  )}
                </span>
                <input
                  type="text"
                  autoFocus
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
            {explorer.items.map((exp) => {
              return <Folder key={exp.id} explorer={exp} />;
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
