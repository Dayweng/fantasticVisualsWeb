/**
 * ==============================================================================
 * FANTASTIC VISUALS — PROJECTS & GOOGLE DRIVE CONFIGURATION
 * ==============================================================================
 * 
 * ⚡ SMART AUTO-ADD MODE:
 * You can now add projects with JUST: link, title, and description!
 * The system automatically detects and generates:
 * - High-res Thumbnail (from Google Drive, YouTube, Vimeo, or Video)
 * - Video Player embed
 * - Drive Vault link
 * - Category & Year & Badges
 * ==============================================================================
 */

// SMART DRIVE & VIDEO PARSER
function smartParseLink(link) {
    if (!link) return { thumbnail: '', videoUrl: '', driveVaultUrl: '#', badge: 'FEATURED' };
    const str = link.trim();

    // 1. YouTube Link
    const ytMatch = str.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (ytMatch) {
        const id = ytMatch[1];
        return {
            type: 'youtube',
            thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
            videoUrl: `https://www.youtube.com/embed/${id}?autoplay=1`,
            driveVaultUrl: str,
            badge: 'YOUTUBE 4K'
        };
    }

    // 2. Google Drive File (Video or Image)
    const driveFileMatch = str.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || str.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveFileMatch) {
        const fileId = driveFileMatch[1];
        return {
            type: 'drive-file',
            // Google Drive provides high-resolution thumbnails for ANY file (including video files):
            thumbnail: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
            videoUrl: `https://drive.google.com/file/d/${fileId}/preview`,
            driveVaultUrl: str,
            badge: 'DRIVE 4K'
        };
    }

    // 3. Google Drive Folder
    const driveFolderMatch = str.match(/\/drive\/(?:u\/\d+\/)?folders\/([a-zA-Z0-9_-]+)/);
    if (driveFolderMatch) {
        return {
            type: 'drive-folder',
            thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
            videoUrl: '',
            driveVaultUrl: str,
            badge: 'DRIVE VAULT'
        };
    }

    // 4. Vimeo Link
    const vimeoMatch = str.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
        const id = vimeoMatch[1];
        return {
            type: 'vimeo',
            thumbnail: `https://vumbnail.com/${id}.jpg`,
            videoUrl: `https://player.vimeo.com/video/${id}?autoplay=1`,
            driveVaultUrl: str,
            badge: 'VIMEO 4K'
        };
    }

    // 5. Direct MP4 / WebM Video Link
    if (str.match(/\.(mp4|webm|mov)(\?.*)?$/i)) {
        return {
            type: 'direct-video',
            thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80',
            videoUrl: str,
            driveVaultUrl: str,
            badge: 'CINEMA REEL'
        };
    }

    // 6. Direct Image URL
    return {
        type: 'image',
        thumbnail: str,
        videoUrl: '',
        driveVaultUrl: str,
        badge: 'PORTFOLIO'
    };
}

// Helpers for backward compatibility
function driveImage(input) {
    if (!input) return '';
    if (!input.includes('drive.google.com') && input.startsWith('http')) return input;
    const match = input.match(/\/d\/([a-zA-Z0-9_-]+)/) || input.match(/id=([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : input.trim();
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
}

function driveFolder(input) {
    if (!input) return '#';
    if (input.startsWith('http')) return input;
    return `https://drive.google.com/drive/folders/${input.trim()}?usp=sharing`;
}

/**
 * ⚡ AUTO-PROJECT GENERATOR
 * Adds a project automatically with just: link, title, and description!
 */
function autoProject(link, title, desc = '', customCategory = '', customBadge = '', customThumbnail = '') {
    const parsed = smartParseLink(link);

    // Auto-detect category from title/desc keywords if not specified
    let category = customCategory;
    if (!category) {
        const lower = (title + ' ' + desc).toLowerCase();
        if (lower.includes('festival') || lower.includes('concert') || lower.includes('event') || lower.includes('aftermovie') || lower.includes('night') || lower.includes('party')) {
            category = 'Event Coverage & Aftermovie';
        } else if (lower.includes('commercial') || lower.includes('brand') || lower.includes('fashion') || lower.includes('launch') || lower.includes('campaign') || lower.includes('car') || lower.includes('auto')) {
            category = 'Commercial Film & Campaign';
        } else if (lower.includes('tech') || lower.includes('keynote') || lower.includes('forum') || lower.includes('conference') || lower.includes('summit')) {
            category = 'Corporate Keynote & Documentary';
        } else {
            category = 'Visual Production';
        }
    }

    return {
        title: title,
        category: category,
        badge: customBadge || parsed.badge || '4K MASTER',
        year: String(new Date().getFullYear()),
        desc: desc || 'Cinematic visual production by Fantastic Visuals.',
        thumbnail: customThumbnail || parsed.thumbnail,
        videoUrl: parsed.videoUrl,
        driveVaultUrl: parsed.driveVaultUrl
    };
}

const portfolioData = {
    // --------------------------------------------------------------------------
    // 01. STUDIO CONTACT & SOCIAL INFO
    // --------------------------------------------------------------------------
    studio: {
        name: "Fantastic Visuals",
        tagline: "WE SHAPE CINEMATIC REALITY FOR THE BOLD.",
        email: "darrenwibisono47+work@gmail.com",
        whatsapp: "https://wa.me/6282232198614?text=Hi%20Fantastic%20Visuals,%20I'd%20like%20to%20inquire%20about%20a%20shoot.",
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        vimeo: "https://vimeo.com/",
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
            thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80",
            videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-enjoying-the-lights-and-music-41559-large.mp4",
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
