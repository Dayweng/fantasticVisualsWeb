/**
 * ==============================================================================
 * FANTASTIC VISUALS — PROJECTS & GOOGLE DRIVE CONFIGURATION
 * Generated automatically via Studio Content Manager
 * ==============================================================================
 */

function smartParseLink(link) {
    if (!link) return { thumbnail: '', videoUrl: '', driveVaultUrl: '#', badge: 'FEATURED' };
    const str = link.trim();
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
    const driveFileMatch = str.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || str.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveFileMatch) {
        const fileId = driveFileMatch[1];
        return {
            type: 'drive-file',
            thumbnail: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
            videoUrl: `https://drive.google.com/file/d/${fileId}/preview`,
            driveVaultUrl: str,
            badge: 'DRIVE 4K'
        };
    }
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
    if (str.match(/\.(mp4|webm|mov)(\?.*)?$/i)) {
        return {
            type: 'direct-video',
            thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80',
            videoUrl: str,
            driveVaultUrl: str,
            badge: 'CINEMA REEL'
        };
    }
    return {
        type: 'image',
        thumbnail: str,
        videoUrl: '',
        driveVaultUrl: str,
        badge: 'PORTFOLIO'
    };
}

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

function autoProject(link, title, desc = '', customCategory = '', customBadge = '', customThumbnail = '') {
    const parsed = smartParseLink(link);
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
    "studio": {
        "name": "Fantastic Visuals",
        "tagline": "WE SHAPE CINEMATIC REALITY FOR THE BOLD.",
        "email": "contact@fantasticvisuals.com",
        "whatsapp": "https://wa.me/6281234567890?text=Hi%20Fantastic%20Visuals,%20I'd%20like%20to%20inquire%20about%20a%20shoot",
        "instagram": "https://instagram.com/",
        "youtube": "https://youtube.com/",
        "vimeo": "https://vimeo.com/",
        "masterDrivePortal": "https://drive.google.com/drive/folders/YOUR_MASTER_STUDIO_DRIVE_FOLDER?usp=sharing"
    },
    "heroReel": {
        "title": "Fantastic Visuals — The Motion Anthology",
        "year": "2024",
        "resolution": "4K DCI • 60 FPS",
        "videoUrl": "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-at-a-festival-41551-large.mp4",
        "driveVaultUrl": "https://drive.google.com/drive/folders/YOUR_FLAGSHIP_REEL_DRIVE_FOLDER?usp=sharing",
        "desc": "High-impact montage of flagship festival stages, luxury commercials, and documentary projects produced in 2024."
    },
    "projects": [
        {
            "title": "ICTIIA 2026 in Universitas Ciputra Surabaya",
            "category": "Corporate Keynote & Documentary",
            "badge": "DRIVE 4K",
            "year": "2026",
            "desc": "3rd IEEE International Conference on Technology Innovation and Its Applications",
            "thumbnail": "https://drive.google.com/thumbnail?id=1C5DT8BDFE7ieHE651mjvwagzcMqc7eXj&sz=w1600",
            "videoUrl": "https://drive.google.com/file/d/1C5DT8BDFE7ieHE651mjvwagzcMqc7eXj/preview",
            "driveVaultUrl": "https://drive.google.com/file/d/1C5DT8BDFE7ieHE651mjvwagzcMqc7eXj/view?usp=drive_link"
        },
        {
            "title": "UC 20th Experience Week 2026",
            "category": "Event Coverage & Aftermovie",
            "badge": "DRIVE 4K",
            "year": "2026",
            "desc": "Universitas Ciputra's 20th Birthday Experience Week Event",
            "thumbnail": "https://drive.google.com/thumbnail?id=1aTxd2DjM6eAspWFQUeeQuIugG2J1Tn2W&sz=w1600",
            "videoUrl": "https://drive.google.com/file/d/1aTxd2DjM6eAspWFQUeeQuIugG2J1Tn2W/preview",
            "driveVaultUrl": "https://drive.google.com/file/d/1aTxd2DjM6eAspWFQUeeQuIugG2J1Tn2W/view?usp=drive_link"
        },
        {
            "title": "Parent's Gathering UC Surabaya 2026",
            "category": "Event Coverage & Aftermovie",
            "badge": "DRIVE 4K",
            "year": "2026",
            "desc": "Parents Gathering Event Program for Freshmans recap by Universitas Ciputra Surabaya",
            "thumbnail": "https://drive.google.com/thumbnail?id=1t953QxmNRPiKwZ8qxZ7MXafWkItjLM-o&sz=w1600",
            "videoUrl": "https://drive.google.com/file/d/1t953QxmNRPiKwZ8qxZ7MXafWkItjLM-o/preview",
            "driveVaultUrl": "https://drive.google.com/file/d/1t953QxmNRPiKwZ8qxZ7MXafWkItjLM-o/view?usp=drive_link"
        }
    ],
    "stills": [
        {
            "title": "Main Stage Laser Array",
            "category": "FESTIVAL CROWD",
            "meta": "Sony A7R V • 24-70mm GM II",
            "src": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
        },
        {
            "title": "Backstage Session",
            "category": "PORTRAIT",
            "meta": "Leica Q3 • 28mm Summilux",
            "src": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
        },
        {
            "title": "Keynote Key Visuals",
            "category": "CORPORATE",
            "meta": "Canon R5 • 70-200mm f/2.8",
            "src": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
        }
    ]
};
