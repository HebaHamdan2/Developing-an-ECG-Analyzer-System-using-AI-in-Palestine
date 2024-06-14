import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./UploadImage.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/Auth.context.jsx";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading.jsx";
import { isTokenExpired } from "../checkExpiredToken/isTokenExpired.js";

export default function FileUpload() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const [progress, setProgress] = useState(0);
  let { authUser } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("select");
  const [result, setResult] = useState('');
  const [Role, setRole] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    setRole(jwtDecode(authUser.token, "login123").role);
    if (isTokenExpired(authUser.token)) { logOut() }
  }, [authUser.token]);

  useEffect(() => {
    toast(`Hello, ${jwtDecode(authUser.token, "login123").userName}!`, {
      icon: '👏',
    });
  }, [])
  function Showalert() {
    Swal.fire({
      title: 'Result!',
      text: result,
      showConfirmButton: false,
    });
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(URL.createObjectURL(event.target.files[0]));
      setData(event.target.files[0]);
    }
  };

  function logOut() {
    clearFileInput();
    setLoading(true);
    localStorage.removeItem('user');
    navigate('../home');
    setLoading(false);
  }

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setResult('');
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    let animateProgress;  // Declare animateProgress at the top

    try {
      setUploadStatus("uploading");
      setProgress(0);

      const formData = new FormData();
      formData.append("image", data);

      let currentProgress = 0;

      const startAnimatingProgress = () => {
        animateProgress = setInterval(() => {
          setProgress((prevProgress) => {
            const nextProgress = prevProgress < 95 ? prevProgress + 1 : 95;
            return nextProgress;
          });
        }, 100);
      };

      const stopAnimatingProgress = () => {
        clearInterval(animateProgress);
        setProgress(100);
      };

      startAnimatingProgress();

      const config = {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 50) / progressEvent.total);
          setProgress(progress);
          currentProgress = progress;
        }
      };
      const response = await axios.post("/image/insertImage", formData, { headers: { Authorization: `ECG__${authUser.token}` } });
      stopAnimatingProgress();
      setResult(response.data.prediction);
      Swal.fire({
        title: 'Result!',
        text: response.data.prediction,
        showConfirmButton: false,
      });

      setUploadStatus("done");


    } catch (err) {
      clearInterval(animateProgress);
      setUploadStatus("select");
      toast.error(err.response.data.msg);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ECG Analyzer</title>
        <meta name='upload image' content='this is upload ecg image page to predict the result' />
      </Helmet>

      {!loading ?
        <div className={style.upload}>
          <div className={style.conatinerup}>
            <nav className={`${style.navcustom} navbar navbar-expand-lg  bg-transparent`}>
              <div className={`container-fluid ${style.containerNav}`}>
                <Link className="navbar-brand" to="../uploadImage">
                  <img src="../../../assets/logo2-removebg-preview.png" className={`${style.logo}`} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav">
                    <li className={style.navitem}>
                      <Link to='../uploadImage' className={`nav-link ${style.navlinkstate}`}>Home</Link>
                    </li>
                    {Role === "Student" ? <li className={style.navitem}>
                      <Link to='../explanation' className={`nav-link ${style.navlink}`}>Explanation</Link>
                    </li> : ""}
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
                <span className="material-symbols-outlined"><i className="fa-solid fa-file-arrow-up"> </i></span>
                <div className={style.blk}>Upload ECG image</div>
              </button>
            )}

            {selectedFile && (
              <>
                <div className={style.filecard}>
                  <div className={style.fileinfo}>
                    {uploadStatus === "select" || "Done" ?
                      <button onClick={clearFileInput}>
                        <i className="fa-regular fa-circle-xmark"></i>
                      </button> : ""}
                    {uploadStatus === "select" ?
                      <button onClick={handleUpload}>
                        <i className="fa-regular fa-circle-check"></i>
                      </button> : ""
                    }
                  </div>
                  <div className={`material-symbols-outlined`}>
                    <img className={style.image} src={selectedFile} alt="ecg" />
                  </div>
                </div>
              </>
            )}

            <div className="check-circle">
              {uploadStatus === "uploading" ? (
                <>
                  <div className={style.progressbg}>
                    <div className={style.progress} style={{ width: `${progress}%` }} />
                  </div>
                  <span>{progress}%</span>
                </>
              ) : null}
            </div>
            {uploadStatus === "done" ? (
              <div className={`d-flex justify-content-center ${style.resdev}`}>
                <button className={style.resbtn} onClick={Showalert}>Show Result</button>
              </div>
            ) : ""}
          </div>
        </div>
        : <Loading />}
    </>
  );
}
