# FANTASTIC VISUALS — Cinematic Static Web Portfolio & Studio CMS

A high-performance, dark cinematic web portfolio engineered for **Fantastic Visuals** (Commercial Video Production & High-Profile Event Coverage).

Combines the **dark atmospheric aesthetic of Unseen Studio** (`#070707` obsidian canvas, subtle grain, ambient lighting, video-first cards) with the **rock-solid grid architecture of Locomotive** (staggered responsive columns, Lenis smooth scrolling, modular components).

Includes a built-in **Studio Content Manager GUI** (`admin.html`) for you and your team to visually add/edit projects, verify Google Drive links with live previews, and 1-click publish to Vercel.

---

## 📁 Project Structure

```
FANTASTIC-VISUALS-WEB/
├── index.html                   <-- Master landing page
├── admin.html                   <-- Built-in visual Studio Content Manager GUI
├── vercel.json                  <-- Vercel caching & routing headers
├── assets/
│   ├── css/
│   │   └── style.css            <-- Custom styling, film grain, ambient glow, scrollbars
│   ├── js/
│   │   ├── projects-data.js     <-- Single source of truth for all projects & links
│   │   └── main.js              <-- Lenis scroll, hover video loops, modal & lightbox
│   └── images/
│       └── favicon.svg          <-- Studio favicon
└── README.md
```

---

## 🎨 Studio Content Manager GUI (`admin.html`)

Instead of editing code files by hand, you and your team can simply open **[admin.html](file:///c:/Users/Darren%20Wibisono/Documents/3.%20DOCUMENTS/FANTASTIC-VISUALS-WEB/admin.html)** in any browser:

### Features:
1. **Visual Project Editor:**
   * Add, edit, or delete projects with friendly form fields.
   * Re-order cards with Up/Down buttons (changes card order on the live website).
2. **Live Google Drive Link Checker:**
   * Paste any Google Drive link or ID for thumbnails — it instantly checks and displays the live image preview.
   * Paste your client deliverable Drive folder link with one-click test button.
3. **Event Stills (Photos) Manager:**
   * Add or delete event photography proofing stills.
4. **Studio Contact Settings:**
   * Change WhatsApp number, studio email, and social links in seconds.
5. **Two Easy Ways to Save:**
   * **Option A (1-Click GitHub Direct Sync):** Add your GitHub Personal Access Token once; clicking **"Publish to Live Site"** automatically commits to your repo, prompting Vercel to redeploy within 5 seconds!
   * **Option B (Instant Download):** Click **"Export Data"** -> **"Download projects-data.js"** and replace the file.

---

## 🚀 How to Deploy on Vercel

### Method A: Via GitHub (Recommended)
1. Push this folder to your GitHub repository.
2. In [Vercel](https://vercel.com), click **"Add New Project"** and select the repository.
3. Click **Deploy**.
4. Done! Vercel serves it globally on a lightning-fast CDN with zero server costs.

---

## 🖥️ Local Preview
* **Public Site:** Double-click [index.html](file:///c:/Users/Darren%20Wibisono/Documents/3.%20DOCUMENTS/FANTASTIC-VISUALS-WEB/index.html) to open in your browser.
* **Studio Admin CMS:** Double-click [admin.html](file:///c:/Users/Darren%20Wibisono/Documents/3.%20DOCUMENTS/FANTASTIC-VISUALS-WEB/admin.html) to manage your portfolio content.
