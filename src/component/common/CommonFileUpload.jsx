import { Fragment, useState } from "react";
import Dropzone from "react-dropzone";

const CommonFileUpload = ({ multiple, imagesOnly }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    const filteredFiles = imagesOnly
      ? acceptedFiles.filter((file) => file.type.startsWith("image/"))
      : acceptedFiles;

    setUploadedFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
  };

  const removeFile = (indexToRemove) =>
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );

  return (
    <Fragment>
      {uploadedFiles.length === 0 ? (
        <Dropzone onDrop={onDrop} accept={imagesOnly ? "image/*" : undefined}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone-container">
              <input {...getInputProps()} />
              <div className="dz-message needsclick">
                <i className="icon-cloud-up fs-1 txt-primary" />
                <h5>Drag Files or Click to Browse</h5>
              </div>
            </div>
          )}
        </Dropzone>
      ) : (
        <Fragment>
          {multiple && (
            <Dropzone onDrop={onDrop} accept={imagesOnly ? "image/*" : undefined}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="add-more-files-zone">
                  <input {...getInputProps()} />
                  <p>Click or drag more files to add</p>
                </div>
              )}
            </Dropzone>
          )}

          <div className="uploaded-files">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="file-card">
                {file.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="file-thumbnail"
                  />
                ) : (
                  <div className="file-placeholder">
                    {file.name.split(".").pop()?.toUpperCase()} File
                  </div>
                )}
                <p className="file-name">{file.name}</p>
                <p className="file-size">{(file.size / 1024).toFixed(2)} KB</p>
                <button
                  onClick={() => removeFile(index)}
                  className="remove-button"
                  title="Remove file"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CommonFileUpload;
