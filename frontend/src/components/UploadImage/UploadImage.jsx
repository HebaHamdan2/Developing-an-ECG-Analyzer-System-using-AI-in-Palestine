import React, { useContext, useRef, useState } from "react";
import style from  "./UploadImage.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/Auth.context.jsx";
import {jwtDecode} from "jwt-decode";

const FileUpload = () => {
  const inputRef = useRef();
  let{setAuthUser,authUser}=useContext(AuthContext)
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("select");
const[result,setResult]=useState('');
const getRole = jwtDecode(authUser.token,"login123").role;

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(URL.createObjectURL(event.target.files[0]));
      setData(event.target.files[0])
    }
  };
  let navigate=useNavigate();
  function logOut(){
    localStorage.removeItem('user');
    setAuthUser('');
    navigate('../login');
  }

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setResult(null)
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
      formData.append("image", data);

      const response = await axios.post(
        "http://localhost:5000/image/insertImage",
        formData).catch((err)=>{
          throw new Error(err.response.data.msg)
           });
           setResult(response.data.prediction)
      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
      toast.error(error.message);
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
        {getRole==="Student"?  <li className={style.navitem}>
          <Link to='../explanation' className="nav-link">Explanation</Link>
        </li>:""}
    
        <li className={style.navitem}>
          <button className="nav-link" onClick={logOut}>Logout</button>
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
      {!selectedFile && (
        <button className={style.filebtn} onClick={onChooseFile}>
          <span className="material-symbols-outlined"><i class="fa-solid fa-file-arrow-up"> </i></span> 
          <div>Upload ECG image</div>
        </button>
      )}

      {selectedFile && (
        <>

          <div className={style.filecard}>
          <div className={style.fileinfo}>
              {uploadStatus === "select" || "upload"? (
                <button onClick={clearFileInput}>
                  <i class="fa-regular fa-circle-xmark"></i>
                </button>
              ) : (
             null
              )}
            </div>
            <div className={`material-symbols-outlined`}> <img className={style.image} src={selectedFile} alt="ecg"/></div>
          
            
         
      </div>
      <div>
     
      </div>
     
       
        </>
      )}
          <button className={ `${style.uploadbtn}`} onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
          </button> 
<span>Result is:{result}</span>
    </div>

    </div>
  
    </>
   
  );
};

export default FileUpload;