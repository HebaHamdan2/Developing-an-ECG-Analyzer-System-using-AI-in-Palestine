import React, { useRef, useState } from "react";
import style from  "./UploadImage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FileUpload = () => {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      setUploadStatus("uploading");

      const formData = new FormData();
      formData.append("file", selectedFile);

      // const response = await axios.post(
      //   "http://localhost:8000/api/upload",
      //   formData,
      //   {
      //     onUploadProgress: (progressEvent) => {
      //       const percentCompleted = Math.round(
      //         (progressEvent.loaded * 100) / progressEvent.total
      //       );
      //       setProgress(percentCompleted);
      //     },
      //   }
      // );

      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <>
     <Helmet>
    <meta charSet="utf-8" />
    <title>ECG Analyzer</title>
   <meta name='upload image' content='this is upload ecg image page to predict the result' />
</Helmet>
<div className={style.upload}>
        
        <div className=" container">
        <nav className="navbar navbar-expand-lg  bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand" to="../uploadImage">
    <img  src="../../../assets/logo.jpg"  className={`${style.logo}`}  alt="logo" />
    <span className={`${style.ecg} `}>ECG Analyzer</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="../signup">Logout</Link>
        </li>
      
  
      </ul>
    </div>
  </div>
</nav>
        </div>

<div className={style.container}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      {!selectedFile && (
        <button className={style.filebtn} onClick={onChooseFile}>
          <span className="material-symbols-outlined">upload</span> Upload File
        </button>
      )}

      {selectedFile && (
        <>
          <div className={style.filecard}>
            <span className="material-symbols-outlined icon">description</span>

            <div className={style.fileinfo}>
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className={style.progressbg}>
                  <div className={style.progress} style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span class="material-symbols-outlined close-icon">
                    close
                  </span>
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      class="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className={style.uploadbtn} onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
          </button>
        </>
      )}
    </div>
    </div>

    </>
   
  );
};

export default FileUpload;