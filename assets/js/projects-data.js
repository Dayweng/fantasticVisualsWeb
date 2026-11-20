/**
 * ==============================================================================
 * FANTASTIC VISUALS — PROJECTS & GOOGLE DRIVE CONFIGURATION
 * ==============================================================================
 * 
 * This file is your single modular source of truth.
 * Anyone on your team can add, edit, or remove projects, photos, and Google Drive links here.
 * 
 * HOW TO PUT GOOGLE DRIVE LINKS:
 * ------------------------------------------------------------------------------
 * 1. For Google Drive Deliverable Folders (The Vault button):
 *    Paste the shareable folder link directly, e.g.:
 *    driveFolder("https://drive.google.com/drive/folders/1A2B3C4D5E.../?usp=sharing")
 *    (Make sure folder permission is set to "Anyone with the link can view")
 * 
 * 2. For Photos / Cover Images on Google Drive:
 *    Paste the full file link OR just the file ID inside driveImage():
 *    driveImage("https://drive.google.com/file/d/1XyZ987654.../view?usp=sharing")
 *    OR:
 *    driveImage("1XyZ987654...")
 *    -> It automatically renders in 4K resolution with ZERO Google UI!
 * 
 * 3. For Videos:
 *    Paste any MP4 URL (Mixkit, Pexels, AWS, local assets/videos/, or Vimeo/Drive preview).
 * ==============================================================================
 */

// SMART DRIVE PARSERS (Handles full links or bare IDs automatically)
function driveImage(input) {
    if (!input) return '';
    if (!input.includes('drive.google.com') && input.startsWith('http')) return input;
    const match = input.match(/\/d\/([a-zA-Z0-9_-]+)/) || input.match(/id=([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : input.trim();
    return `https://lh3.googleusercontent.com/d/${fileId}`;
}

function driveFolder(input) {
    if (!input) return '#';
    if (input.startsWith('http')) return input;
    return `https://drive.google.com/drive/folders/${input.trim()}?usp=sharing`;
}

const portfolioData = {
    // --------------------------------------------------------------------------
    // 01. STUDIO CONTACT & SOCIAL INFO
    // --------------------------------------------------------------------------
    studio: {
        name: "Fantastic Visuals",
        tagline: "WE SHAPE CINEMATIC REALITY FOR THE BOLD.",
        email: "contact@fantasticvisuals.com",
        whatsapp: "https://wa.me/6281234567890?text=Hi%20Fantastic%20Visuals,%20I'd%20like%20to%20inquire%20about%20a%20shoot",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        vimeo: "https://vimeo.com/",
        // Master Drive folder for team deliverables
        masterDrivePortal: driveFolder("https://drive.google.com/drive/folders/YOUR_MASTER_STUDIO_DRIVE_FOLDER?usp=sharing"),
    },

    // --------------------------------------------------------------------------
    // 02. HERO SHOWREEL (Top of the page)
    // --------------------------------------------------------------------------
    heroReel: {
        title: "Fantastic Visuals — The Motion Anthology",
        year: "2024",
        resolution: "4K DCI • 60 FPS",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-at-a-festival-41551-large.mp4",
        driveVaultUrl: driveFolder("https://drive.google.com/drive/folders/YOUR_FLAGSHIP_REEL_DRIVE_FOLDER?usp=sharing"),
        desc: "High-impact montage of flagship festival stages, luxury commercials, and documentary projects produced in 2024."
    },

    // --------------------------------------------------------------------------
    // 03. SELECTED VIDEO PRODUCTIONS (Grid)
    // --------------------------------------------------------------------------
    projects: [
        {
            title: "Neon Horizon Music Festival 2024",
            category: "Event Coverage & Official Aftermovie",
            badge: "AFTERMOVIE • 2024",
            year: "2024",
            desc: "Full 3-day festival documentation with a 6-camera crew, FPV drone chase cams, and a 4K 60fps cinematic aftermovie recapping 45,000 attendees.",
            // You can use standard URLs or driveImage("YOUR_DRIVE_FILE_ID_OR_LINK"):
            thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-enjoying-the-lights-and-music-41559-large.mp4",
            // PUT YOUR GOOGLE DRIVE FOLDER LINK HERE:
            driveVaultUrl: driveFolder("https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_1?usp=sharing")
        },
        {
            title: "Aether Kinetic — Season Campaign",
            category: "Commercial Film & Product Launch",
            badge: "BRAND FILM",
            year: "2024",
            desc: "High-fashion cinematic commercial utilizing custom neon lighting rigs, macro lens passes, and an intense sound design mix.",
            thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-neon-room-41553-large.mp4",
            // PUT YOUR GOOGLE DRIVE FOLDER LINK HERE:
            driveVaultUrl: driveFolder("https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_2?usp=sharing")
        },
        {
            title: "Apex Global Tech Forum 2024",
            category: "Corporate Keynote & Documentary Stills",
            badge: "DOCUMENTARY",
            year: "2024",
            desc: "Executive keynote multi-angle video streaming, candid executive portraits, and same-day press release deliverables for global distribution.",
            thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-audience-raising-hands-at-a-conference-41554-large.mp4",
            // PUT YOUR GOOGLE DRIVE FOLDER LINK HERE:
            driveVaultUrl: driveFolder("https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_3?usp=sharing")
        },
        {
            title: "Vanguard Concept Launch",
            category: "Automotive Cinema Reel",
            badge: "LAUNCH FILM",
            year: "2023",
            desc: "Night-time pursuit vehicle tracking, high-speed shutter captures, and precision anamorphic lens visual treatment.",
            thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-sports-car-driving-through-the-city-at-night-41558-large.mp4",
            // PUT YOUR GOOGLE DRIVE FOLDER LINK HERE:
            driveVaultUrl: driveFolder("https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_4?usp=sharing")
        }
    ],

    // --------------------------------------------------------------------------
    // 04. EVENT STILLS & PROOFING (High-Res Photo Gallery)
    // --------------------------------------------------------------------------
    stills: [
        {
            title: "Main Stage Laser Array",
            category: "FESTIVAL CROWD",
            meta: "Sony A7R V • 24-70mm GM II",
            // Accepts any image URL or driveImage("YOUR_DRIVE_PHOTO_LINK_OR_ID"):
            src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Backstage Session",
            category: "PORTRAIT",
            meta: "Leica Q3 • 28mm Summilux",
            src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Keynote Key Visuals",
            category: "CORPORATE",
            meta: "Canon R5 • 70-200mm f/2.8",
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
        }
    ]
};

/**
 * ==============================================================================
 * TEMPLATE TO COPY & PASTE FOR NEW PROJECTS:
 * ==============================================================================
 * 
 * {
 *     title: "Project Name",
 *     category: "Event Coverage / Commercial / Music Video",
 *     badge: "AFTERMOVIE • 2024",
 *     year: "2024",
 *     desc: "Short 1-2 sentence description of the project.",
 *     thumbnail: driveImage("PASTE_GOOGLE_DRIVE_IMAGE_LINK_HERE"),
 *     videoUrl: "PASTE_VIDEO_URL_HERE",
 *     driveVaultUrl: driveFolder("PASTE_GOOGLE_DRIVE_FOLDER_LINK_HERE")
 * },
 * 
 * ==============================================================================
 * TEMPLATE TO COPY & PASTE FOR NEW STILLS / PHOTOS:
 * ==============================================================================
 * 
 * {
 *     title: "Photo Title",
 *     category: "CONCERT / PORTRAIT / CORPORATE",
 *     meta: "Camera & Lens Used (Optional)",
 *     src: driveImage("PASTE_GOOGLE_DRIVE_PHOTO_LINK_HERE")
 * },
 */
