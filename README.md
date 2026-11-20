# FANTASTIC VISUALS — Cinematic Static Web Portfolio

A high-performance, dark cinematic web portfolio engineered for **Fantastic Visuals** (Commercial Video Production & High-Profile Event Coverage).

Combines the **dark atmospheric aesthetic of Unseen Studio** (`#070707` obsidian canvas, subtle grain, ambient lighting, video-first cards) with the **rock-solid grid architecture of Locomotive** (staggered responsive columns, Lenis smooth scrolling, modular components).

Optimized for **instant, zero-config deployment on Vercel** or any static host.

---

## 📁 Project Structure

```
FANTASTIC-VISUALS-WEB/
├── index.html                   <-- Master landing page
├── vercel.json                  <-- Vercel caching & routing headers
├── assets/
│   ├── css/
│   │   └── style.css            <-- Custom styling, film grain, ambient glow, scrollbars
│   ├── js/
│   │   ├── projects-data.js     <-- Add / edit your projects and Google Drive links here!
│   │   └── main.js              <-- Lenis scroll, hover video loops, modal & lightbox
│   └── images/
│       └── favicon.svg          <-- Studio favicon
└── README.md
```

---

## ⚡ How to Add or Update Projects

You **never need to touch messy HTML**! Open [assets/js/projects-data.js](file:///c:/Users/Darren%20Wibisono/Documents/3.%20DOCUMENTS/FANTASTIC-VISUALS-WEB/assets/js/projects-data.js) and simply edit the projects array:

```javascript
{
    title: "Neon Horizon Music Festival 2024",
    category: "Event Coverage & Official Aftermovie",
    badge: "AFTERMOVIE • 2024",
    year: "2024",
    desc: "Full 3-day festival documentation with a 6-camera crew...",
    // High-res photo cover:
    thumbnail: "https://images.unsplash.com/photo-...",
    // 5-second teaser video loop on hover:
    videoUrl: "https://assets.mixkit.co/videos/preview/...",
    // Google Drive Deliverable Vault Link:
    driveVaultUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
}
```

### 🔒 Pro-tip for Google Drive Photos (Zero Google Branding):
If you have a photo stored on Google Drive (set to "Anyone with link can view"):
```javascript
thumbnail: driveImage("1aBcDeFgHiJkLmNoP123456789")
```
It automatically converts to Google's direct CDN (`https://lh3.googleusercontent.com/d/{ID}`) which renders instantly with zero Google Drive UI!

---

## 🚀 How to Deploy on Vercel (Takes 60 Seconds)

### Method A: Via GitHub (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **Deploy**.
4. Done! Vercel will deploy it in under 5 seconds with automatic SSL and a global CDN.

### Method B: Via Vercel CLI
In your VS Code terminal:
```bash
npx vercel
```
Follow the 3 prompts and your site is live immediately!

---

## 🖥️ Local Preview
* Simply double-click [index.html](file:///c:/Users/Darren%20Wibisono/Documents/3.%20DOCUMENTS/FANTASTIC-VISUALS-WEB/index.html) to open in your browser.
* Or use VS Code's **Live Server** extension.
