# Overview
The ECG Analyzer is a web application that predicts heart diseases from uploaded electrocardiogram images using ResNet50, a deep learning model with **94.84%** accuracy and **24.55%** loss. It enhances cardiac diagnostics for healthcare professionals and offers a reliable tool for medical students to analyze ECG data.

![Project Screenshot](https://github.com/HebaHamdan2/DEVELOPING-AN-ECG-ANALYZER-SYSTEM-USING-AI-IN-PALESTINE/blob/main/frontend/public/assets/logo2-removebg-preview.png)

# Dataset

The dataset used in this project is the **Ch. Pervaiz Elahi Institute of Cardiology Multan Dataset** (Khan & Hussain, 2021). 
It contains a total of 928 images categorized into four classes:
- **ECG Images of Myocardial Infarction Patients**
- **ECG Images of Patients with Abnormal Heartbeat**
- **ECG Images of Patients with a History of MI (Myocardial Infarction)**
- **Normal Person ECG Images**

This diverse dataset ensures that the model can effectively distinguish between different types of heart conditions.

You can access the dataset [here](https://data.mendeley.com/datasets/gwbz3fsgp8/2).

# Features

- **User Authentication:**
  - **Sign Up:** Users can create a new account.
  - **Login:** Existing users can log in using their credentials.
  - **Password Reset:** Users can reset their password via email.

- **Role-Based Access:**
  - **Healthcare Professionals:** 
    - **Diagnosis:** Ability to log in, access the upload page, and receive diagnoses for uploaded ECG images.
    - **Access:** Can only access the upload page for image analysis.
  - **Medical Students:** 
    - **Diagnosis:** Similar functionality as healthcare professionals for uploading ECG images and receiving diagnoses.
    - **Educational Resources:** Authorized to access an additional page with explanations on how to read and interpret ECG images.
    - **Access:** Can view both the upload page and the educational explanation page.

- **ECG Image Upload:**
  - **Upload Page:** Allows users to upload ECG images for analysis.
  - **Supported File Extensions:** Only images with the following extensions are accepted: `.png`, `.jpeg`, `.webp`.

- **Educational Page:**
  - **Explanation of ECG Images:** Provides detailed explanations and guidance on how to read ECG images, including descriptions of the four dataset categories:
    - **ECG Images of Myocardial Infarction Patients**
    - **ECG Images of Patients with Abnormal Heartbeat**
    - **ECG Images of Patients with a History of MI (Myocardial Infarction)**
    - **Normal Person ECG Images**
  - **Restricted Access:** Only accessible to medical students.

- **Error Handling:**
  - **Page Not Found:** Proper error handling for non-existent pages to enhance user experience.

These features ensure that the application provides tailored functionality based on user roles, supports specific image formats, and includes comprehensive error handling.

# Technologies

- **Deep Learning Model:**
  - **Model:** ResNet50
  - **Training:** The model is trained on a dataset divided into 70% training, 10% validation, and 20% testing.
  - **Image Preprocessing:** Conducted using Python and Jupyter Notebook, achieving an accuracy of **94.84%** and a loss of **24.55%** after extensive experimentation.

- **Backend:**
  - **Framework:** Node.js with Express.js
  - **Database:** MongoDB, utilizing Mongoose for managing user accounts and data.
  - **Authentication:** Implemented using `bcryptjs` for password hashing and `jsonwebtoken` for token-based authentication.
  - **Email Verification:** Managed with `nodemailer` for sending verification and confirmation emails.
  - **File Upload and Validation:** Handled by `multer` for secure image uploads.
  - **Data Validation:** Performed using `joi` to ensure the integrity of incoming data.
  - **Verification Code Generation:** Utilized `nanoid` for generating unique verification codes during password resets.
  - **Child Process Management:** Leveraged `spawn` from the `child_process` module to execute prediction functions upon image upload.
  - **Environment Configuration:** Managed with `dotenv` for handling environment variables.
  - **Cross-Origin Resource Sharing (CORS):** Implemented using the `cors` package to handle cross-origin requests.

- **Frontend:**
  - **Library**: React.js
  - **Form Management and Validation:** Utilized `formik` for form handling and `yup` for schema validation prior to backend submission.
  - **SEO:** Managed with `react-helmet` for controlling meta tags and improving search engine optimization.
  - **Notifications:** Implemented with `react-hot-toast` for displaying real-time errors and messages to users.
  - **HTTP Requests:** Handled with `axios` for making API requests.
  - **Styling:** Applied `bootstrap` for responsive design and user interface styling.
  - **Result Display:** Used `sweetalert2` for presenting results and alerts to users.
  - **Development Workflow:** Managed with `concurrently` for running both frontend and backend simultaneously during development.

This technology stack ensures a robust, secure, and efficient web application, providing a seamless and professional experience for users.

# Thesis
For a detailed exploration of the project, including its objectives, methodologies, implementations, and results, please refer to the comprehensive thesis document available [here](https://github.com/HebaHamdan2/DEVELOPING-AN-ECG-ANALYZER-SYSTEM-USING-AI-IN-PALESTINE/tree/main/thesis).
