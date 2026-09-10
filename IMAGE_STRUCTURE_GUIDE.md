# Image & Asset Upload Guide for Hamiz Khan's Portfolio

Welcome! Your portfolio website has been cloned, fully styled, and populated with all the information from your resume. 

Demonstration placeholder images and icons have been automatically configured. You can upload and replace any image or PDF file at any time by placing your files into the directory structure below:

---

## 📁 Directory Structure for Images & Assets

Place your files in the `public/` directory inside your portfolio folder:

```text
c:\Users\Lenovo\Desktop\germany\portfolio\public\
├── 📄 Hamiz_Khan_Resume.pdf               <-- Upload your Resume PDF here
└── 📁 images/
     ├── 📁 profile/
     │    └── 🖼️ profile.jpg               <-- Upload your Profile Picture here (JPG or PNG)
     │
     ├── 📁 projects/
     │    ├── 🖼️ episcan.png               <-- Screenshot for EpiScan AI Skin Disorder project
     │    ├── 🖼️ grievance_resolver.png    <-- Screenshot for Grievance Resolver AI Complaint platform
     │    ├── 🖼️ blinkit_dashboard.png     <-- Screenshot for Blinkit Power BI sales dashboard
     │    └── 🖼️ customer_segmentation.png <-- Screenshot for Customer Segmentation analysis
     │
     └── 📁 certifications/               <-- Optional certificate badge images
```

---

## 🚀 Quick Steps to Upload Your Images:

1. **Profile Photo**: Save your portrait photo as `profile.jpg` in `public/images/profile/profile.jpg`.
2. **Resume PDF**: Save your resume PDF as `Hamiz_Khan_Resume.pdf` in `public/Hamiz_Khan_Resume.pdf`.
3. **Project Screenshots**:
   - Save your EpiScan screenshot as `public/images/projects/episcan.png`.
   - Save your Grievance Resolver screenshot as `public/images/projects/grievance_resolver.png`.
   - Save your Blinkit Power BI dashboard image as `public/images/projects/blinkit_dashboard.png`.
   - Save your Customer Segmentation dashboard image as `public/images/projects/customer_segmentation.png`.

---

## ⚡ How to Run the Website Locally

Open your terminal in the portfolio directory and run:

```bash
npm run dev
```

Then click the localhost link (usually `http://localhost:5173`) to view your live neubrutalist portfolio in your browser!
