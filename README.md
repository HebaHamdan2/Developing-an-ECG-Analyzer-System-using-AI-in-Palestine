# Overview
The ECG Analyzer is a web application that predicts heart diseases from uploaded electrocardiogram images using ResNet50, a deep learning model with **94.84%** accuracy and **24.55%** loss. It enhances cardiac diagnostics for healthcare professionals and offers a reliable tool for medical students to analyze ECG data.

![Project Screenshot](https://github.com/HebaHamdan2/DEVELOPING-AN-ECG-ANALYZER-SYSTEM-USING-AI-IN-PALESTINE/blob/main/frontend/public/assets/logo2-removebg-preview.png)

## Dataset

The dataset used in this project is the **Ch. Pervaiz Elahi Institute of Cardiology Multan Dataset** (Khan & Hussain, 2021). 
It contains a total of 928 images categorized into four classes:
- **ECG Images of Myocardial Infarction Patients**
- **ECG Images of Patients with Abnormal Heartbeat**
- **ECG Images of Patients with a History of MI (Myocardial Infarction)**
- **Normal Person ECG Images**

This diverse dataset ensures that the model can effectively distinguish between different types of heart conditions.

You can access the dataset [here](https://data.mendeley.com/datasets/gwbz3fsgp8/2).

## Features

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
