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
    - **Diagnosis:** Ability to log in and receive diagnoses for uploaded ECG images.
  - **Medical Students:** 
    - **Diagnosis:** Similar functionality as healthcare professionals for uploading ECG images and receiving diagnoses.
    - **Educational Resources:** Access to an additional page that explains how to read and interpret ECG images for the four categorized dataset classes.

- **ECG Image Upload:**
  - **Upload Page:** Allows users to upload ECG images for analysis.
  - **Supported File Extensions:** Only images with the following extensions are accepted: `.png`, `.jpeg`, `.webp`.

- **Educational Page:**
  - **Explanation of ECG Images:** Provides detailed explanations and guidance on how to read ECG images, including descriptions of the four dataset categories:
    - **ECG Images of Myocardial Infarction Patients**
    - **ECG Images of Patients with Abnormal Heartbeat**
    - **ECG Images of Patients with a History of MI (Myocardial Infarction)**
    - **Normal Person ECG Images**

These features ensure that the application serves as both a diagnostic tool and an educational resource, catering to both healthcare professionals and medical students while supporting specific image formats.

