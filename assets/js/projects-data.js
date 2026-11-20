/**
 * FANTASTIC VISUALS — Portfolio Projects & Stills Data
 * 
 * TIP: For Google Drive Photos with ZERO Google branding:
 * Use: driveImage('YOUR_GOOGLE_DRIVE_FILE_ID')
 * It converts to high-speed CDN: https://lh3.googleusercontent.com/d/{FILE_ID}
 */

// Helper function to turn a Google Drive file ID into a direct CDN image link
function driveImage(fileId) {
    return `https://lh3.googleusercontent.com/d/${fileId}`;
}

const portfolioData = {
    // 1. Flagship Video Showreel (Hero)
    heroReel: {
        title: "Fantastic Visuals — The Motion Anthology",
        year: "2024",
        resolution: "4K DCI • 60 FPS",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-at-a-festival-41551-large.mp4",
        driveVaultUrl: "https://drive.google.com/drive/folders/YOUR_FLAGSHIP_REEL_DRIVE_FOLDER?usp=sharing",
        desc: "High-impact montage of flagship festival stages, luxury commercials, and documentary projects produced in 2024."
    },

    // 2. Selected Productions (Grid)
    projects: [
        {
            title: "Neon Horizon Music Festival 2024",
            category: "Event Coverage & Official Aftermovie",
            badge: "AFTERMOVIE • 2024",
            year: "2024",
            desc: "Full 3-day festival documentation with a 6-camera crew, FPV drone chase cams, and a 4K 60fps cinematic aftermovie recapping 45,000 attendees.",
            thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-enjoying-the-lights-and-music-41559-large.mp4",
            driveVaultUrl: "https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_1?usp=sharing"
        },
        {
            title: "Aether Kinetic — Season Campaign",
            category: "Commercial Film & Product Launch",
            badge: "BRAND FILM",
            year: "2024",
            desc: "High-fashion cinematic commercial utilizing custom neon lighting rigs, macro lens passes, and an intense sound design mix.",
            thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-neon-room-41553-large.mp4",
            driveVaultUrl: "https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_2?usp=sharing"
        },
        {
            title: "Apex Global Tech Forum 2024",
            category: "Corporate Keynote & Documentary Stills",
            badge: "DOCUMENTARY",
            year: "2024",
            desc: "Executive keynote multi-angle video streaming, candid executive portraits, and same-day press release deliverables for global distribution.",
            thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-audience-raising-hands-at-a-conference-41554-large.mp4",
            driveVaultUrl: "https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_3?usp=sharing"
        },
        {
            title: "Vanguard Concept Launch",
            category: "Automotive Cinema Reel",
            badge: "LAUNCH FILM",
            year: "2023",
            desc: "Night-time pursuit vehicle tracking, high-speed shutter captures, and precision anamorphic lens visual treatment.",
            thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-sports-car-driving-through-the-city-at-night-41558-large.mp4",
            driveVaultUrl: "https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_FOLDER_ID_4?usp=sharing"
        }
    ],

    // 3. Event Stills & Proofing (Photography Grid)
    stills: [
        {
            title: "Main Stage Laser Array",
            category: "FESTIVAL CROWD",
            meta: "Sony A7R V • 24-70mm GM II",
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
