const fs = require('fs');
let code = fs.readFileSync('c:\\\\the hand\\\\app.js', 'utf-8');
const idx = code.indexOf('// ADVANCED VISUAL FEATURES');
if (idx > -1) {
  code = code.substring(0, idx - 50); // Cut off before the header
}
const newJS = `
document.addEventListener('DOMContentLoaded', () => {
    // 1. Blood / Ink Canvas Engine
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
        cursor.style.transform = \`translate(\${cursorX - 10}px, \${cursorY - 10}px) scale(\${isClicking ? 0.8 : 1})\`;
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
`;
fs.writeFileSync('c:\\\\the hand\\\\app.js', code + '\n' + newJS);
