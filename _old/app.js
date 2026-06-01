/* ============================================================
   The Hand — Character Profile Page | app.js
   ============================================================ */

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 1000);
        }, 800);
    }
}

if (document.readyState === 'complete') {
    hideLoader();
} else {
    window.addEventListener('load', hideLoader);
}

document.addEventListener('DOMContentLoaded', () => {
    // 11. Cinematic Intro
    const intro = document.getElementById('cinematic-intro');
    if (intro) {
        setTimeout(() => {
            intro.style.opacity = '0';
            setTimeout(() => intro.remove(), 1500);
        }, 3500);
    }

    // 13. Lore Search Engine & Glitch Easter Egg
    const searchInput = document.getElementById('lore-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            
            // Glitch Easter Egg
            if (query === 'jabrial' || query === 'truth' || query === 'the wipe') {
                document.body.classList.add('glitch-active');
                setTimeout(() => {
                    document.body.classList.remove('glitch-active');
                    e.target.value = '';
                    searchInput.dispatchEvent(new Event('input'));
                }, 3000);
            }

            const searchTargets = document.querySelectorAll('.narrative p, .char-profile, .emperor-card, .tl-item, .power-card, .id-card, .god-card');
            
            searchTargets.forEach(target => {
                if (query === '') {
                    target.classList.remove('dimmed');
                } else {
                    const text = target.textContent.toLowerCase();
                    if (text.includes(query)) {
                        target.classList.remove('dimmed');
                    } else {
                        target.classList.add('dimmed');
                    }
                }
            });
        });
    }

    // 14. Interactive Accordions (Timelines)
    const accordions = document.querySelectorAll('.emperor-card, .tl-item');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => acc.classList.toggle('expanded'));
    });

    // 9. Scroll Minimap
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if(progressBar) progressBar.style.width = scrolled + '%';
    });

    // 10. Cinematic Audio Engine
    const audioBtn = document.getElementById('audio-toggle');
    let audioEnabled = false;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    
    // Background Music
    const bgmTracks = {
        golden: new Audio('assets/audio/bg-golden.opus'),
        chaos: new Audio('assets/audio/bg-chaos.opus'),
        tree: new Audio('assets/audio/bg-tree.opus'),
        cosmic: new Audio('assets/audio/bg-first.mp3'), // The First Emperor
        abyss: new Audio('assets/audio/bg-hollow.mp3'),
        anchor: new Audio('assets/audio/bg-golden.opus'),
        light: new Audio('assets/audio/bg-nour.mp3'), // Nour (Light)
        shadow: new Audio('assets/audio/bg-dark.mp3'),
        ahmed: new Audio('assets/audio/bg-dark.mp3'),
        agx: new Audio('assets/audio/bg-quincy.mp3'),
        gabriel: new Audio('assets/audio/bg-golden.opus'),
        lucifer: new Audio('assets/audio/bg-lucifer.mp3'),
        messiah: new Audio('assets/audio/bg-messiah.mp3'), // Messiah
        satanail: new Audio('assets/audio/bg-satanail.mp3'), // Satanail
        ink: new Audio('assets/audio/bg-ink.mp3'), // Ink
        blood: new Audio('assets/audio/bg-lezmyon.mp3') // Lezmyon
    };
    Object.values(bgmTracks).forEach(track => { track.loop = true; track.volume = 0; });
    let currentBGM = bgmTracks.golden;

    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            audioEnabled = !audioEnabled;
            audioBtn.style.color = audioEnabled ? 'var(--accent-primary)' : '#fff';
            if (audioEnabled && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            if (audioEnabled) {
                if (currentBGM === bgmTracks.golden && currentBGM.currentTime < 20) {
                    currentBGM.currentTime = 20;
                }
                currentBGM.play().catch(() => console.log('BGM file not found, waiting for user to add MP3s.'));
                fadeInBGM(currentBGM);
            } else {
                fadeOutBGM(currentBGM);
            }
        });
    }

    function fadeInBGM(audioObj) {
        let vol = 0;
        const fade = setInterval(() => {
            if (vol < 0.2) { vol += 0.01; audioObj.volume = vol; }
            else { clearInterval(fade); }
        }, 100);
    }

    function fadeOutBGM(audioObj) {
        let vol = audioObj.volume;
        const fade = setInterval(() => {
            if (vol > 0.01) { vol -= 0.01; audioObj.volume = vol; }
            else { audioObj.pause(); clearInterval(fade); }
        }, 50);
    }

    const themeShiftSound = new Audio('assets/audio/theme-shift.mp3');

    // Expose BGM switch for the theme toggle
    window.switchThemeBGM = (themeName) => {
        if (audioEnabled) {
            fadeOutBGM(currentBGM);
        }
        
        currentBGM = bgmTracks[themeName] || bgmTracks.golden;
        
        if (!audioEnabled) return;

        if (currentBGM === bgmTracks.golden && currentBGM.currentTime < 20) {
            currentBGM.currentTime = 20;
        }
        currentBGM.play().catch(()=>{});
        fadeInBGM(currentBGM);

        const clone = themeShiftSound.cloneNode();
        clone.volume = 0.8;
        clone.play().catch(()=>{});
    };

    let lastSFXTime = 0;
    const hoverSound = new Audio('assets/audio/hover.mp3');
    const clickSound = new Audio('assets/audio/click.mp3');
    hoverSound.volume = 0.5;
    clickSound.volume = 0.5;

    // Theme-Aware SFX
    function playThemeSFX() {
        const now = Date.now();
        if (now - lastSFXTime < 50) return; // 50ms cooldown
        lastSFXTime = now;

        if (!audioEnabled) return;
        
        // Clone the node so multiple can play concurrently
        const clone = hoverSound.cloneNode();
        clone.volume = 0.5;
        clone.play().catch(()=>{});
    }
    
    function playClickSFX() {
        if (!audioEnabled) return;
        const clone = clickSound.cloneNode();
        clone.volume = 0.5;
        clone.play().catch(()=>{});
    }

    const interactableElements = document.querySelectorAll('a, button, .id-card, .power-card, .char-profile, .emperor-card, .tl-item, .lore-term, input');
    interactableElements.forEach(el => {
        el.addEventListener('mouseenter', playThemeSFX);
        el.addEventListener('click', playClickSFX);
    });


  /* ----------------------------------------------------------
     1. Dynamic Particles.js Initialization
     ---------------------------------------------------------- */
  window.setThemeParticles = (theme) => {
      if (typeof particlesJS !== 'function') return;
      
      // Destroy existing instance if any
      if (window.pJSDom && window.pJSDom.length > 0) {
          window.pJSDom[0].pJS.fn.vendors.destroypJS();
          window.pJSDom = [];
      }

      let config = {
          number: { value: 50, density: { enable: true, value_area: 900 } },
          color: { value: ['#FFC107', '#FFD700', '#D4A017'] },
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false } },
          size: { value: 2.5, random: true },
          line_linked: { enable: true, distance: 160, color: '#FFC107', opacity: 0.07, width: 1 },
          move: { enable: true, speed: 0.8, direction: 'none', random: true, straight: false, out_mode: 'out' }
      };

      if (theme === 'chaos') {
          config.color.value = ['#D32F2F', '#B71C1C', '#FF5252'];
          config.shape.type = 'triangle';
          config.line_linked.enable = false;
          config.move.direction = 'top';
          config.move.speed = 3;
          config.move.out_mode = 'out';
      } else if (theme === 'tree') {
          config.color.value = ['#00bcd4', '#b2ebf2', '#ffffff'];
          config.shape.type = 'circle';
          config.line_linked.enable = false;
          config.move.direction = 'bottom';
          config.move.speed = 1;
          config.size.value = 1.5;
      }

      particlesJS('particles-js', {
          particles: config,
          interactivity: {
              detect_on: 'window',
              events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
              modes: { grab: { distance: 180, line_linked: { opacity: 0.25 } }, push: { particles_nb: 2 } }
          },
          retina_detect: true
      });
  };

  if (typeof particlesJS === 'function') {
      const startTheme = document.body.dataset.theme || 'golden';
      setTimeout(() => window.setThemeParticles(startTheme), 200);
  }

  /* ----------------------------------------------------------
     2. Scroll Reveal (IntersectionObserver)
     ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe full sections
  document.querySelectorAll('.section').forEach((el) => revealObserver.observe(el));

  // Observe individual cards & items for staggered reveals
  const cardSelectors = [
    '.narrative', '.char-profile', '.id-card', '.power-card',
    '.nine-card', '.god-card', '.emperor-card',
    '.tl-item', '.irony-item'
  ];
  document.querySelectorAll(cardSelectors.join(', ')).forEach((el) => {
    revealObserver.observe(el);
  });

  /* ----------------------------------------------------------
     3. Sticky Navigation
     ---------------------------------------------------------- */
  const nav = document.getElementById('nav');

  const handleStickyNav = () => {
    if (!nav) return;
    const threshold = window.innerHeight * 0.6;
    nav.classList.toggle('visible', window.scrollY > threshold);
  };

  window.addEventListener('scroll', handleStickyNav, { passive: true });

  /* ----------------------------------------------------------
     4. Active Nav Link Tracking
     ---------------------------------------------------------- */
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const updateActiveLink = () => {
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ----------------------------------------------------------
     5. Hamburger Menu Toggle
     ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside the nav
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  /* ----------------------------------------------------------
     6. Multi-Faction Theme System
     ---------------------------------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const themes = [
      'golden', 'chaos', 'tree', 'cosmic', 'abyss', 'anchor', 
      'light', 'shadow', 'ahmed', 'agx', 'gabriel', 'lucifer', 
      'messiah', 'satanail'
  ];
  
  // Safe LocalStorage wrapper for Zen Browser
  const getSavedTheme = () => {
      // 1. Always prioritize the character-specific URL theme
      if (window.location.pathname.includes('tree')) return 'tree';
      if (window.location.pathname.includes('first')) return 'cosmic';
      if (window.location.pathname.includes('second')) return 'golden';
      if (window.location.pathname.includes('fourth') || window.location.pathname.includes('lezmyon')) return 'abyss';
      if (window.location.pathname.includes('ink')) return 'cosmic';
      if (window.location.pathname.includes('linksia')) return 'anchor';
      if (window.location.pathname.includes('nour')) return 'light';
      if (window.location.pathname.includes('fie')) return 'shadow';
      if (window.location.pathname.includes('ahmed')) return 'ahmed';
      if (window.location.pathname.includes('ayman')) return 'agx';
      if (window.location.pathname.includes('gabriel')) return 'gabriel';
      if (window.location.pathname.includes('lucifer')) return 'lucifer';
      if (window.location.pathname.includes('messiah')) return 'messiah';
      if (window.location.pathname.includes('satanail')) return 'satanail';

      // 2. Fall back to local storage for the main timeline page
      let currentTheme = localStorage.getItem('oc_theme');
      return currentTheme || 'golden';
  };
  const saveTheme = (theme) => {
      try { localStorage.setItem('oc_theme', theme); }
      catch (e) { console.warn('Zen browser storage blocked, theme not saved.'); }
  };

  let activeThemeIndex = themes.indexOf(getSavedTheme());
  if (activeThemeIndex === -1) activeThemeIndex = 0;

  const applyTheme = (index) => {
    const themeName = themes[index];
    document.body.className = ''; // clear all themes
    if (themeName !== 'golden') document.body.classList.add(`theme-${themeName}`);
    document.body.dataset.theme = themeName;
    
    // Switch icon visually
    if (themeToggle) {
        const iconCrown = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 17 L20 17 L22 6 L16 11 L12 2 L8 11 L2 6 Z M2 19 h20 v2 H2 Z"/></svg>`;
        const iconBlood = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 21a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 10.1 5 12 5 14a7 7 0 0 0 7 7z"/></svg>`;
        const iconLeaf = `<svg viewBox="0 0 24 24" width="20" height="20" fill="#10b981"><path d="M17.5 2.5c-4 0-9.5 3-12 9-1 2.5-1.5 5.5-1.5 8.5l-2 2 1.5 1.5 2-2c3 0 6-.5 8.5-1.5 6-2.5 9-8 9-12V2.5h-5.5z"/></svg>`;
        
        if (themeName === 'golden') themeToggle.innerHTML = iconCrown;
        else if (themeName === 'chaos') themeToggle.innerHTML = iconBlood;
        else themeToggle.innerHTML = iconLeaf;
    }

    // Trigger BGM switch
    if (window.switchThemeBGM) window.switchThemeBGM(themeName);
    // Trigger Particle Swap
    if (window.setThemeParticles) window.setThemeParticles(themeName);
  };

  // Apply on load
  applyTheme(activeThemeIndex);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      activeThemeIndex = (activeThemeIndex + 1) % themes.length;
      const newTheme = themes[activeThemeIndex];
      applyTheme(activeThemeIndex);
      saveTheme(newTheme);
    });
  }

  /* ----------------------------------------------------------
     7. Modal Viewer
     ---------------------------------------------------------- */
  const modal = document.getElementById('modal');

  if (modal) {
    // Open modal from any trigger element
    document.querySelectorAll('.modal-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const content = trigger.dataset.modalContent || trigger.innerHTML;
        const body = modal.querySelector('.modal__body');
        if (body) body.innerHTML = content;
        modal.showModal();
      });
    });

    // Close via the close button
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.close());
    }

    // Close when clicking the backdrop (outside the modal box)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.open) modal.close();
    });
  }

  /* ----------------------------------------------------------
     8. Smooth Scroll for Nav Links
     ---------------------------------------------------------- */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      const navHeight = nav ? nav.offsetHeight : 0;
      const targetPos = targetEl.offsetTop - navHeight;

      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });

  // 15. 3D Holographic Tilt Cards
  const tiltCards = document.querySelectorAll('.char-profile, .emperor-card, .power-card, .id-card');
  tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10; // max tilt 10deg
          const rotateY = ((x - centerX) / centerX) * 10;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      card.addEventListener('mouseleave', () => {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
  });

  // 16. Ancient Muqadas Decoder (Translate)
  const decodeBtn = document.getElementById('decode-toggle');
  if (decodeBtn) {
      decodeBtn.addEventListener('click', () => {
          const textNodes = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while (node = walker.nextNode()) {
              if (node.nodeValue.trim() !== '' && node.parentElement.tagName !== 'SCRIPT' && node.parentElement.tagName !== 'STYLE') {
                  textNodes.push({ node, original: node.nodeValue });
              }
          }
          const runes = ["⍙", "⎍", "⍜", "⏁", "⟒", "⏃", "⌇", "⎅", "⎎", "☌", "⊑", "⟊"];
          
          let iter = 0;
          const scrambleInterval = setInterval(() => {
              textNodes.forEach(item => {
                  if (Math.random() > 0.5) {
                      item.node.nodeValue = item.original.split('').map(c => (c.trim() === '' ? c : runes[Math.floor(Math.random() * runes.length)])).join('');
                  }
              });
              iter++;
              if (iter > 15) {
                  clearInterval(scrambleInterval);
                  textNodes.forEach(item => item.node.nodeValue = item.original);
              }
          }, 50);
      });
  }

  // 17. Interactive Canvas Network Graph
  const canvas = document.getElementById('network-canvas');
  if (canvas) {
      const ctx = canvas.getContext('2d');
      const nodes = [
          { id: 'ayman', label: 'Ayman', x: 450, y: 250, vx: 0, vy: 0, radius: 25, color: '#FFB300' },
          { id: 'jabrial', label: 'Jabrial', x: 200, y: 150, vx: 0, vy: 0, radius: 35, color: '#D32F2F' },
          { id: 'linksia', label: 'Linksia', x: 600, y: 150, vx: 0, vy: 0, radius: 20, color: '#00bcd4' },
          { id: 'fie', label: 'Fie', x: 750, y: 200, vx: 0, vy: 0, radius: 20, color: '#00bcd4' },
          { id: 'emperor', label: '1st Emperor', x: 300, y: 350, vx: 0, vy: 0, radius: 30, color: '#FFB300' },
          { id: 'wipe', label: 'The Wipe', x: 600, y: 400, vx: 0, vy: 0, radius: 30, color: '#D32F2F' }
      ];
      const links = [
          { source: 'ayman', target: 'jabrial' },
          { source: 'ayman', target: 'linksia' },
          { source: 'linksia', target: 'fie' },
          { source: 'emperor', target: 'wipe' },
          { source: 'ayman', target: 'emperor' }
      ];
      
      let draggedNode = null;

      const handleDown = (e) => {
          e.preventDefault();
          const rect = canvas.getBoundingClientRect();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const clientY = e.touches ? e.touches[0].clientY : e.clientY;
          const mouseX = clientX - rect.left;
          const mouseY = clientY - rect.top;
          draggedNode = nodes.find(n => Math.hypot(n.x - mouseX, n.y - mouseY) < n.radius);
      };
      const handleMove = (e) => {
          if (draggedNode) {
              e.preventDefault();
              const rect = canvas.getBoundingClientRect();
              const clientX = e.touches ? e.touches[0].clientX : e.clientX;
              const clientY = e.touches ? e.touches[0].clientY : e.clientY;
              draggedNode.x = clientX - rect.left;
              draggedNode.y = clientY - rect.top;
              draggedNode.vx = 0; draggedNode.vy = 0;
          }
      };
      const handleUp = () => draggedNode = null;

      canvas.addEventListener('mousedown', handleDown, { passive: false });
      canvas.addEventListener('mousemove', handleMove, { passive: false });
      canvas.addEventListener('mouseup', handleUp);
      canvas.addEventListener('mouseleave', handleUp);

      canvas.addEventListener('touchstart', handleDown, { passive: false });
      canvas.addEventListener('touchmove', handleMove, { passive: false });
      canvas.addEventListener('touchend', handleUp);
      canvas.addEventListener('touchcancel', handleUp);

      function drawNetwork() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Physics Step
          const damping = 0.9;
          const springK = 0.01;
          const repelK = 1000;
          
          nodes.forEach(n1 => {
              nodes.forEach(n2 => {
                  if (n1 !== n2) {
                      const dx = n1.x - n2.x; const dy = n1.y - n2.y;
                      const dist = Math.max(Math.hypot(dx, dy), 1);
                      const f = repelK / (dist * dist);
                      if (n1 !== draggedNode) { n1.vx += (dx/dist)*f; n1.vy += (dy/dist)*f; }
                  }
              });
              // Center gravity
              if (n1 !== draggedNode) {
                  n1.vx += (canvas.width/2 - n1.x) * 0.001;
                  n1.vy += (canvas.height/2 - n1.y) * 0.001;
              }
          });
          
          links.forEach(l => {
              const n1 = nodes.find(n => n.id === l.source);
              const n2 = nodes.find(n => n.id === l.target);
              if (n1 && n2) {
                  const dx = n2.x - n1.x; const dy = n2.y - n1.y;
                  const dist = Math.max(Math.hypot(dx, dy), 1);
                  const f = (dist - 150) * springK;
                  if (n1 !== draggedNode) { n1.vx += (dx/dist)*f; n1.vy += (dy/dist)*f; }
                  if (n2 !== draggedNode) { n2.vx -= (dx/dist)*f; n2.vy -= (dy/dist)*f; }
              }
          });
          
          nodes.forEach(n => {
              if (n !== draggedNode) {
                  n.vx *= damping; n.vy *= damping;
                  n.x += n.vx; n.y += n.vy;
              }
              // Boundaries
              if(n.x < n.radius) n.x = n.radius; if(n.x > canvas.width - n.radius) n.x = canvas.width - n.radius;
              if(n.y < n.radius) n.y = n.radius; if(n.y > canvas.height - n.radius) n.y = canvas.height - n.radius;
          });

          // Draw Links
          links.forEach(l => {
              const n1 = nodes.find(n => n.id === l.source);
              const n2 = nodes.find(n => n.id === l.target);
              if (n1 && n2) {
                  ctx.beginPath();
                  ctx.moveTo(n1.x, n1.y);
                  ctx.lineTo(n2.x, n2.y);
                  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                  ctx.lineWidth = 2;
                  ctx.stroke();
              }
          });

          // Draw Nodes
          nodes.forEach(n => {
              ctx.beginPath();
              ctx.arc(n.x, n.y, n.radius, 0, Math.PI*2);
              ctx.fillStyle = n.color;
              ctx.fill();
              ctx.shadowBlur = 15;
              ctx.shadowColor = n.color;
              ctx.fillStyle = '#fff';
              ctx.font = '14px Inter';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(n.label, n.x, n.y);
              ctx.shadowBlur = 0;
          });
          
          requestAnimationFrame(drawNetwork);
      }
      drawNetwork();
  }

  /* ----------------------------------------------------------
     18. Parallax Scrolling
     ---------------------------------------------------------- */
  window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const particles = document.getElementById('particles-js');
      const heroStar = document.querySelector('.hero__star');
      const permanentNote = document.querySelector('.permanent-note');
      
      if (particles) {
          particles.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      if (heroStar) {
          heroStar.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      if (permanentNote) {
          permanentNote.style.transform = `translateY(calc(-50% + ${scrolled * 0.1}px)) rotate(180deg)`;
      }
  }, { passive: true });

  /* ----------------------------------------------------------
     19. Typewriter Effect on Scroll
     ---------------------------------------------------------- */
  const typeWriterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
              entry.target.classList.add('typed');
              const text = entry.target.dataset.text || entry.target.textContent;
              entry.target.textContent = '';
              entry.target.dataset.text = text;
              
              const cursor = document.createElement('span');
              cursor.className = 'typewriter-cursor';
              entry.target.appendChild(cursor);

              let i = 0;
              const typeInterval = setInterval(() => {
                  if (i < text.length) {
                      entry.target.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                      i++;
                  } else {
                      clearInterval(typeInterval);
                      setTimeout(() => cursor.remove(), 1000);
                  }
              }, 25);
          }
      });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.prophecy .narrative__text, .chant-block p, .secret-text p').forEach(el => {
      typeWriterObserver.observe(el);
  });

});




document.addEventListener('DOMContentLoaded', () => {
    // 1. Blood / Ink Canvas Engine
    (() => {
        const canvas = document.getElementById('blood-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let splatters = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function addSplatter(x, y, color) {
        for (let i = 0; i < (Math.random() * 15 + 10); i++) {
            splatters.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 15,
                vy: (Math.random() - 0.5) * 15,
                radius: Math.random() * 8 + 2,
                color: color,
                life: 1.0,
                decay: Math.random() * 0.02 + 0.005
            });
        }
    }

    function animateSplatters() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = splatters.length - 1; i >= 0; i--) {
            let s = splatters[i];
            s.x += s.vx;
            s.y += s.vy;
            s.vy += 0.5; // gravity
            s.radius *= 0.95;
            s.life -= s.decay;
            
            if (s.life <= 0 || s.radius < 0.1) {
                splatters.splice(i, 1);
                continue;
            }
            
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = s.color.replace('<alpha>', s.life);
            ctx.fill();
        }
        requestAnimationFrame(animateSplatters);
    }
    animateSplatters();

    document.addEventListener('click', (e) => {
        const theme = document.body.dataset.theme || 'golden';
        if (theme === 'chaos') {
            addSplatter(e.clientX, e.clientY, 'rgba(255, 42, 42, <alpha>)');
        } else if (theme === 'tree') {
            addSplatter(e.clientX, e.clientY, 'rgba(0, 188, 212, <alpha>)');
        } else {
            addSplatter(e.clientX, e.clientY, 'rgba(255, 215, 0, <alpha>)');
        }
    });
    })();

    // 2. Custom Cursor
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isHovering = false;
    let isClicking = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Trail generation
        if (Math.random() > 0.5) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            const theme = document.body.dataset.theme || 'golden';
            let color = '#ffd700';
            if (theme === 'chaos') color = '#ff2a2a';
            else if (theme === 'tree') color = '#00bcd4';
            
            trail.style.backgroundColor = color;
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
            trail.style.width = (Math.random() * 8 + 2) + 'px';
            trail.style.height = trail.style.width;
            
            document.body.appendChild(trail);
            setTimeout(() => { trail.remove(); }, 1000);
        }
    });

    document.addEventListener('mousedown', () => isClicking = true);
    document.addEventListener('mouseup', () => isClicking = false);

    document.querySelectorAll('a, button, .lore-term').forEach(el => {
        el.addEventListener('mouseenter', () => { isHovering = true; cursor.classList.add('hovering'); });
        el.addEventListener('mouseleave', () => { isHovering = false; cursor.classList.remove('hovering'); });
    });

    function renderCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px) scale(${isClicking ? 0.8 : 1})`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // 3. Forbidden Seal Hold-to-Unlock
    const seal = document.getElementById('forbidden-seal');
    const sealContent = document.getElementById('forbidden-content');
    let holdTimer;
    let holdProgress = 0;

    if (seal) {
        const startHold = () => {
            seal.classList.add('holding');
            holdTimer = setInterval(() => {
                holdProgress += 100;
                if (holdProgress >= 3000) {
                    clearInterval(holdTimer);
                    unlockSeal();
                }
            }, 100);
        };

        const stopHold = () => {
            clearInterval(holdTimer);
            holdProgress = 0;
            seal.classList.remove('holding');
        };

        seal.addEventListener('mousedown', startHold);
        seal.addEventListener('mouseup', stopHold);
        seal.addEventListener('mouseleave', stopHold);
        seal.addEventListener('touchstart', startHold);
        seal.addEventListener('touchend', stopHold);
    }

    function unlockSeal() {
        seal.style.display = 'none';
        sealContent.classList.remove('hidden');
        document.body.style.animation = 'shake 0.5s 1';
        // Add giant splatter
        const rect = sealContent.getBoundingClientRect();
        for(let i=0; i<5; i++) {
            addSplatter(rect.left + rect.width/2, rect.top + 50, 'rgba(255, 42, 42, <alpha>)');
        }
    }
});
