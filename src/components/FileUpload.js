import React, { useState, useRef } from "react";
import "./FileUpload.css";
import { TbCloudUpload } from "react-icons/tb";

// drag drop file component
function FileUpload(props) {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      props.setFile(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <h3 className="text-app-yellow font-medium mb-2 text-lg">
          {props.prompt}
        </h3>
        {props.file && (
          <h3 className="text-app-yellow font-thin mb-2 text-lg">
            {props.file.name.length > 35
              ? props.file.name.slice(0, 35) + "..."
              : props.file.name}
          </h3>
        )}
      </div>
      <div
        id=""
        onDragEnter={handleDrag}
        className="form-file-upload"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id={props.prompt}
          ref={inputRef}
          type="file"
          className="input-file-upload"
          multiple={false}
          onChange={handleChange}
        />
        <label
          htmlFor={props.prompt}
          className={`${dragActive ? "drag-active" : ""} label-file-upload`}
        >
          <div className="flex flex-col items-center">
            <TbCloudUpload size={24} color="#949393" />
            <button
              className="upload-button text-app-gray"
              onClick={onButtonClick}
            >
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            className="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </div>
    </div>
  );
}
export default FileUpload;
