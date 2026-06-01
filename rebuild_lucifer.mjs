import fs from 'fs';

const htmlPath = 'c:\\the hand\\tale_of_lucifer.html';
const content = fs.readFileSync(htmlPath, 'utf8');

// Extract the chapters array definition
const scriptStartIdx = content.indexOf('const chapters = [');
if (scriptStartIdx === -1) {
    console.error('Could not find chapters array.');
    process.exit(1);
}

const scriptEndIdx = content.indexOf('let cur = 0;', scriptStartIdx);
const chaptersContent = content.substring(scriptStartIdx, scriptEndIdx);

const newHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Tale of Lucifer</title>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<style>
/* ═══════════ PREMIUM READER STYLES ═══════════ */
.reader-container {
    max-width: 900px;
    margin: 40px auto;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--card-shadow);
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.reader-header {
    padding: 30px 40px;
    border-bottom: 1px solid var(--glass-border);
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.reader-title-block h1 {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    color: var(--accent-primary);
    text-shadow: 0 0 15px var(--accent-glow);
    margin-bottom: 5px;
}

.reader-title-block p {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    color: var(--text-muted);
    letter-spacing: 2px;
    text-transform: uppercase;
}

.nav-btns {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.nav-btn {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    padding: 8px 16px;
    background: transparent;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-pill);
    color: var(--text-muted);
    cursor: pointer;
    transition: var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nav-btn:hover {
    background: var(--glass-bg-hover);
    color: var(--text-bright);
    border-color: var(--glass-border-hover);
}

.nav-btn.active {
    background: var(--accent-dim);
    color: var(--accent-primary);
    border-color: var(--accent-primary);
    box-shadow: 0 0 10px var(--accent-glow);
}

.chapter-area {
    padding: 60px 80px;
    flex-grow: 1;
}

.part-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--accent-primary);
    opacity: 0.8;
    margin-bottom: 15px;
    text-align: center;
}

.ch-title {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    color: var(--text-bright);
    margin-bottom: 40px;
    text-align: center;
    line-height: 1.2;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

.body-text {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    line-height: 2;
    color: var(--text-main);
}

.body-text p {
    margin-bottom: 25px;
}

/* DIALOGUE STYLES */
.dialogue {
    margin: 30px 0;
    padding: 20px 25px;
    background: var(--glass-bg);
    border-left: 3px solid var(--accent-primary);
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-bright);
    box-shadow: inset 0 0 20px var(--accent-dim);
}

.speaker {
    display: block;
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    color: var(--accent-primary);
    letter-spacing: 2px;
    margin-bottom: 8px;
    text-transform: uppercase;
    text-shadow: 0 0 10px var(--accent-glow);
}

/* DECREE STYLES */
.decree {
    margin: 40px 0;
    padding: 30px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid var(--glass-border-hover);
    border-radius: var(--radius-lg);
    font-family: 'Amiri', serif;
    font-size: 1.4rem;
    line-height: 2;
    color: var(--accent-primary);
    text-align: center;
    font-style: italic;
    box-shadow: 0 0 30px var(--accent-dim);
}

.rule-box {
    margin: 40px 0;
    padding: 30px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
}

.rule-box .row {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px dashed var(--glass-border);
}

.rule-box .row:last-child {
    border-bottom: none;
}

.rule-box .name {
    font-family: 'Cinzel', serif;
    font-weight: 700;
    color: var(--accent-primary);
    min-width: 150px;
}

.footer-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid var(--glass-border);
}

.footer-btn {
    font-family: 'Inter', sans-serif;
    padding: 12px 24px;
    background: var(--glass-bg);
    border: 1px solid var(--accent-primary);
    color: var(--accent-primary);
    border-radius: var(--radius-pill);
    cursor: pointer;
    transition: var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
}

.footer-btn:hover:not(:disabled) {
    background: var(--accent-primary);
    color: var(--bg-primary);
    box-shadow: 0 0 20px var(--accent-glow);
}

.footer-btn:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    border-color: var(--glass-border);
    color: var(--text-muted);
}

.ch-counter {
    font-family: 'Inter', sans-serif;
    color: var(--text-muted);
    letter-spacing: 2px;
    font-size: 0.9rem;
}

/* Return Button */
.return-home {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
    color: var(--accent-primary);
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition-fast);
}
.return-home:hover {
    text-shadow: 0 0 10px var(--accent-glow);
}

@media (max-width: 768px) {
    .chapter-area { padding: 40px 30px; }
    .reader-header { flex-direction: column; align-items: flex-start; }
    .ch-title { font-size: 2rem; }
}
</style>
</head>
<body data-theme="lucifer">

<a href="lucifer.html" class="return-home">← Return</a>

<div id="particles-js" style="position:fixed; inset:0; z-index:0; pointer-events:none;"></div>

<div class="reader-container">
  <div class="reader-header">
    <div class="reader-title-block">
      <h1>The Tale of Lucifer</h1>
      <p>Refuge Universe</p>
    </div>
    <div class="nav-btns" id="navBtns"></div>
  </div>
  <div id="chapterArea" class="chapter-area"></div>
</div>

<script>
${chaptersContent}

let cur = 0;

function render(){
  const ch = chapters[cur];
  document.getElementById('chapterArea').innerHTML = \`
    <div class="part-label">\${ch.part}</div>
    <h2 class="ch-title">\${ch.title}</h2>
    \${ch.content}
    <div class="footer-nav">
      <button class="footer-btn" id="prevBtn" \${cur===0?'disabled':''} onclick="go(cur-1)">← Prev</button>
      <span class="ch-counter">CHAPTER \${cur+1} OF \${chapters.length}</span>
      <button class="footer-btn" id="nextBtn" \${cur===chapters.length-1?'disabled':''} onclick="go(cur+1)">Next →</button>
    </div>\`;
  
  document.querySelectorAll('.nav-btn').forEach((b,i)=>{
    b.classList.toggle('active', i===cur);
  });
  window.scrollTo({top:0, behavior: 'smooth'});
}

function go(i){
  cur = Math.max(0, Math.min(chapters.length-1, i));
  render();
}

// Init Nav Buttons
const nb = document.getElementById('navBtns');
chapters.forEach((ch,i)=>{
  const b = document.createElement('button');
  b.className='nav-btn';
  b.textContent = ch.nav;
  b.onclick = () => go(i);
  nb.appendChild(b);
});

render();

// Initialize Particles
document.addEventListener('DOMContentLoaded', () => {
    if(typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 40 },
                "color": { "value": "#ff0000" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "move": { "enable": true, "speed": 1, "direction": "top", "out_mode": "out" }
            },
            "interactivity": { "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
            "retina_detect": true
        });
    }
});
</script>
</body>
</html>`;

fs.writeFileSync(htmlPath, newHTML);
console.log('Successfully rebuilt Tale of Lucifer!');
