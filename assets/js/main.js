/**
 * FANTASTIC VISUALS — Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    // 1. Cursor Ambient Glow Follower (Only active on fine pointer devices)
    const ambient = document.getElementById('ambient');
    if (ambient && !isTouch) {
        window.addEventListener('mousemove', (e) => {
            ambient.style.setProperty('--mouse-x', `${e.clientX}px`);
            ambient.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
    }

    // 3. Mobile Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');

    function toggleMobileMenu() {
        const isOpen = mobileMenu.classList.toggle('active');
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (mobileMenuIcon) mobileMenuIcon.setAttribute('data-lucide', 'x');
        } else {
            document.body.style.overflow = '';
            if (mobileMenuIcon) mobileMenuIcon.setAttribute('data-lucide', 'menu');
        }
        if (window.lucide) lucide.createIcons();
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Close menu when clicking on any mobile nav link
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
                if (mobileMenuIcon) mobileMenuIcon.setAttribute('data-lucide', 'menu');
                if (window.lucide) lucide.createIcons();
            });
        });
    }

    // 4. Bind Studio Info (Links, Email, WhatsApp, Socials)
    if (portfolioData.studio) {
        const s = portfolioData.studio;
        const emailBtn = document.getElementById('footerEmailBtn');
        const emailText = document.getElementById('footerEmailText');
        const waBtn = document.getElementById('footerWhatsappBtn');
        const ig = document.getElementById('footerInstagram');
        const yt = document.getElementById('footerYoutube');
        const vimeo = document.getElementById('footerVimeo');
        const drivePortal = document.getElementById('footerDrivePortal');

        if (emailBtn) emailBtn.href = `mailto:${s.email}`;
        if (emailText) emailText.innerText = s.email;
        if (waBtn) waBtn.href = s.whatsapp;
        if (ig) ig.href = s.instagram;
        if (yt) yt.href = s.youtube;
        if (vimeo) vimeo.href = s.vimeo;
        if (drivePortal) drivePortal.href = s.masterDrivePortal;
    }

    // 5. Render Hero Reel Data
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo && portfolioData.heroReel) {
        heroVideo.querySelector('source').src = portfolioData.heroReel.videoUrl;
    }

    // 6. Render Selected Projects (Locomotive Responsive Staggered Grid)
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer && portfolioData.projects) {
        projectsContainer.innerHTML = portfolioData.projects.map((p, i) => {
            const isWide = (i % 4 === 0 || i % 4 === 3);
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';
            const aspect = isWide ? 'aspect-[16/10]' : 'aspect-[4/3] md:aspect-[4/5]';
            const mt = (i % 2 === 1) ? 'md:mt-16' : '';
            const indexFormatted = String(i + 1).padStart(2, '0');

            return `
            <div class="col-span-12 ${colSpan} ${mt} project-card group cursor-pointer" onclick="openProjectModal(${i})">
                <div class="relative ${aspect} w-full rounded-xl overflow-hidden bg-surface border border-white/10">
                    <!-- High-Res Cover Image -->
                    <img src="${p.thumbnail}" 
                         alt="${p.title}" 
                         class="project-img w-full h-full object-cover transition-transform duration-700">
                    
                    <!-- Autoplaying 5s Video Teaser -->
                    <video loop muted playsinline class="project-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500">
                        <source src="${p.videoUrl}" type="video/mp4">
                    </video>

                    <!-- Google Drive Vault Status Badge -->
                    <div class="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                        <span class="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider bg-black/75 backdrop-blur-md border border-white/15 text-white flex items-center space-x-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-cinema"></span>
                            <span>DRIVE VAULT READY</span>
                        </span>
                    </div>

                    <!-- Category Pill -->
                    <div class="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                        <span class="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider bg-black/65 backdrop-blur-md border border-white/10 text-zinc-300">
                            ${p.badge}
                        </span>
                    </div>

                    <!-- Gradient Shade (Darker on mobile for instant legibility) -->
                    <div class="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/30 to-transparent sm:from-obsidian/90 sm:via-transparent opacity-90 sm:opacity-80 transition-opacity"></div>

                    <!-- Bottom Info -->
                    <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-3">
                        <div class="space-y-1">
                            <span class="text-[10px] sm:text-xs font-mono text-zinc-400 block">${indexFormatted} / ${p.category}</span>
                            <h3 class="font-syne font-bold text-lg sm:text-2xl lg:text-3xl text-white group-hover:text-cinema transition-colors duration-300 leading-snug">${p.title}</h3>
                        </div>
                        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <i data-lucide="arrow-up-right" class="w-4 h-4 sm:w-5 sm:h-5"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    // 6. Render Event Stills Grid (Responsive for Touch & Mouse)
    const stillsContainer = document.getElementById('stillsContainer');
    if (stillsContainer && portfolioData.stills) {
        stillsContainer.innerHTML = portfolioData.stills.map((s) => `
            <div class="relative group aspect-[3/4] rounded-xl overflow-hidden bg-surface border border-white/10 cursor-pointer" 
                 onclick="openImageLightbox('${s.src}', '${s.title.replace(/'/g, "\\'")}', '${s.meta.replace(/'/g, "\\'")}')">
                <img src="${s.src}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <!-- Caption overlay: visible on mobile, reveals on hover on desktop -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent sm:bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-5 sm:p-6">
                    <div class="text-white space-y-1">
                        <span class="text-[9px] sm:text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">${s.category}</span>
                        <h4 class="font-syne font-bold text-base sm:text-lg">${s.title}</h4>
                        <span class="text-[10px] font-mono text-zinc-400 hidden sm:block">${s.meta}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 7. Video Preview Playback (Hover on Desktop + Viewport Auto-Preview on Mobile)
    const projectCards = document.querySelectorAll('.project-card');

    if (!isTouch) {
        // Desktop mouse hover
        projectCards.forEach(card => {
            const video = card.querySelector('.project-video');
            if (video) {
                card.addEventListener('mouseenter', () => {
                    video.currentTime = 0;
                    video.play().catch(() => {});
                });
                card.addEventListener('mouseleave', () => {
                    video.pause();
                });
            }
        });
    } else {
        // Mobile & Tablet: IntersectionObserver plays video when scrolled into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target.querySelector('.project-video');
                if (!video) return;
                if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
                    video.style.opacity = '1';
                    video.play().catch(() => {});
                } else {
                    video.style.opacity = '0';
                    video.pause();
                }
            });
        }, { threshold: [0.45] });

        projectCards.forEach(card => observer.observe(card));
    }

    // 8. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});

// ========================================================
// MODAL & LIGHTBOX CONTROLLERS
// ========================================================

function setModalPlayer(videoUrl) {
    const video = document.getElementById('modalVideoPlayer');
    const iframe = document.getElementById('modalIframePlayer');
    if (!video || !iframe) return;

    const url = videoUrl || '';
    const isEmbed = url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com') || url.includes('drive.google.com');

    if (isEmbed) {
        video.classList.add('hidden');
        video.pause();
        iframe.classList.remove('hidden');
        iframe.src = url;
    } else if (url) {
        iframe.classList.add('hidden');
        iframe.src = '';
        video.classList.remove('hidden');
        video.querySelector('source').src = url;
        video.load();
        video.play().catch(() => {});
    } else {
        iframe.classList.add('hidden');
        iframe.src = '';
        video.classList.add('hidden');
        video.pause();
    }
}

function openProjectModal(index) {
    const data = portfolioData.projects[index];
    if (!data) return;

    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalCategory').innerText = data.category;
    document.getElementById('modalYear').innerText = data.year;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalDriveBtn').href = data.driveVaultUrl;

    setModalPlayer(data.videoUrl);

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    const video = document.getElementById('modalVideoPlayer');
    const iframe = document.getElementById('modalIframePlayer');

    if (video) video.pause();
    if (iframe) iframe.src = '';

    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function openHeroReel() {
    const data = portfolioData.heroReel;
    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalCategory').innerText = "FLAGSHIP SHOWREEL";
    document.getElementById('modalYear').innerText = data.year;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalDriveBtn').href = data.driveVaultUrl;

    setModalPlayer(data.videoUrl);

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
}

function openImageLightbox(src, title, meta) {
    const lightbox = document.getElementById('imageLightbox');
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxTitle').innerText = title;
    document.getElementById('lightboxMeta').innerText = meta;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
    document.getElementById('imageLightbox').classList.add('hidden');
    document.body.style.overflow = '';
}
