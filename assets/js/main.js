/**
 * FANTASTIC VISUALS — Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Smooth Scroll (Lenis)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Cursor Ambient Glow Follower
    const ambient = document.getElementById('ambient');
    if (ambient) {
        window.addEventListener('mousemove', (e) => {
            ambient.style.setProperty('--mouse-x', `${e.clientX}px`);
            ambient.style.setProperty('--mouse-y', `${e.clientY}px`);
        });
    }

    // 3. Render Hero Reel Data
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo && portfolioData.heroReel) {
        heroVideo.querySelector('source').src = portfolioData.heroReel.videoUrl;
    }

    // 4. Render Selected Projects (Locomotive Staggered 2-Column Grid)
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer && portfolioData.projects) {
        projectsContainer.innerHTML = portfolioData.projects.map((p, i) => {
            // Alternating staggered sizes: 7-col vs 5-col
            const isWide = (i % 4 === 0 || i % 4 === 3);
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';
            const aspect = isWide ? 'aspect-[16/10]' : 'aspect-[4/5]';
            const mt = (i % 2 === 1) ? 'md:mt-16' : '';
            const indexFormatted = String(i + 1).padStart(2, '0');

            return `
            <div class="${colSpan} ${mt} project-card group cursor-pointer" onclick="openProjectModal(${i})">
                <div class="relative ${aspect} w-full rounded-xl overflow-hidden bg-surface border border-white/10">
                    <!-- High-Res Cover Image -->
                    <img src="${p.thumbnail}" 
                         alt="${p.title}" 
                         class="project-img w-full h-full object-cover transition-transform duration-700">
                    
                    <!-- Autoplaying 5s Video Teaser on Hover -->
                    <video loop muted playsinline class="project-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500">
                        <source src="${p.videoUrl}" type="video/mp4">
                    </video>

                    <!-- Google Drive Vault Status Badge -->
                    <div class="absolute top-4 left-4 z-20">
                        <span class="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center space-x-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-cinema"></span>
                            <span>DRIVE VAULT READY</span>
                        </span>
                    </div>

                    <!-- Category Pill -->
                    <div class="absolute top-4 right-4 z-20">
                        <span class="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">
                            ${p.badge}
                        </span>
                    </div>

                    <!-- Gradient Shade -->
                    <div class="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    <!-- Bottom Info -->
                    <div class="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <div>
                            <span class="text-xs font-mono text-zinc-400">${indexFormatted} / ${p.category}</span>
                            <h3 class="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-cinema transition-colors duration-300">${p.title}</h3>
                        </div>
                        <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    // 5. Render Event Stills Grid
    const stillsContainer = document.getElementById('stillsContainer');
    if (stillsContainer && portfolioData.stills) {
        stillsContainer.innerHTML = portfolioData.stills.map((s, idx) => `
            <div class="relative group aspect-[3/4] rounded-xl overflow-hidden bg-surface border border-white/10 cursor-pointer" 
                 onclick="openImageLightbox('${s.src}', '${s.title.replace(/'/g, "\\'")}', '${s.meta.replace(/'/g, "\\'")}')">
                <img src="${s.src}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div class="text-white">
                        <span class="text-[10px] font-mono text-zinc-400">${s.category}</span>
                        <h4 class="font-syne font-bold text-lg">${s.title}</h4>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 6. Setup Video Hover Handlers
    document.querySelectorAll('.project-card').forEach(card => {
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

    // 7. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});

// ========================================================
// MODAL & LIGHTBOX CONTROLLERS
// ========================================================

function openProjectModal(index) {
    const data = portfolioData.projects[index];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    const video = document.getElementById('modalVideoPlayer');

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalCategory').innerText = data.category;
    document.getElementById('modalYear').innerText = data.year;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalDriveBtn').href = data.driveVaultUrl;

    video.querySelector('source').src = data.videoUrl;
    video.load();
    video.play().catch(() => {});

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    const video = document.getElementById('modalVideoPlayer');
    video.pause();
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openHeroReel() {
    const data = portfolioData.heroReel;
    const modal = document.getElementById('projectModal');
    const video = document.getElementById('modalVideoPlayer');

    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalCategory').innerText = "FLAGSHIP SHOWREEL";
    document.getElementById('modalYear').innerText = data.year;
    document.getElementById('modalDesc').innerText = data.desc;
    document.getElementById('modalDriveBtn').href = data.driveVaultUrl;

    video.querySelector('source').src = data.videoUrl;
    video.load();
    video.play().catch(() => {});

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
    document.body.style.overflow = 'auto';
}
