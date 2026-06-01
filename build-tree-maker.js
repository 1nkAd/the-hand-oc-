const fs = require('fs');
let html = fs.readFileSync('c:\\\\the hand\\\\the-tree-maker.html', 'utf-8');

// 1. Change title
html = html.replace(`<title>THE HAND — Character Profile</title>`, `<title>THE TREE MAKER — Character Profile</title>`);

// 2. Remove permanent note (or change it)
html = html.replace(`<div class="permanent-note">He doesn't fight to win. He fights because stopping hurts more.</div>`, `<div class="permanent-note">He built the archive of eternity, then walked back into its branches.</div>`);

// 3. Update Hero Title and Subtitle
html = html.replace(`<h1 class="intro-title">The Hand</h1>`, `<h1 class="intro-title">The Tree Maker</h1>`);
html = html.replace(`<h1 class="hero__title">THE HAND</h1>`, `<h1 class="hero__title">THE TREE MAKER</h1>`);
html = html.replace(`<p class="hero__subtitle">"He doesn't fight to win. He fights because stopping hurts more."</p>`, `<p class="hero__subtitle">"The Previous Emperor. The Architect of the Archives."</p>`);

// 4. Update default theme to tree on body if we had it, but actually the theme is set via data-theme on body dynamically in JS based on localStorage. We can force it in JS later, but for now we'll add it if missing or just let it be. Let's add data-theme="tree" to body.
html = html.replace('<body>', '<body data-theme="tree">');

// 5. Replace nav menu links
const navStart = '<div class="nav__menu" id="nav-menu">';
const navEnd = '</div>';
const navContent = `
  <a href="#identity" class="nav__link">Identity</a>
  <a href="#the-tree" class="nav__link">The Tree</a>
  <a href="#history" class="nav__link">History</a>
  <a href="#adham" class="nav__link">Connections</a>
`;
const navStartIndex = html.indexOf(navStart) + navStart.length;
const navEndIndex = html.indexOf(navEnd, navStartIndex);
html = html.substring(0, navStartIndex) + navContent + html.substring(navEndIndex);

// 6. Replace main content
const mainStart = '<main class="content">';
const mainEnd = '<!-- NETWORK GRAPH -->';
const mainStartIndex = html.indexOf(mainStart) + mainStart.length;
const mainEndIndex = html.indexOf(mainEnd);

const newMainContent = `
  <section class="section" id="identity">
    <h2 class="section__label">Identity</h2>
    <div class="id-grid bento-grid">
      <div class="id-card">
        <div class="id-card__label">Codename</div>
        <div class="id-card__value">The Tree Maker</div>
      </div>
      <div class="id-card">
        <div class="id-card__label">Real Name</div>
        <div class="id-card__value">Unknown</div>
      </div>
      <div class="id-card">
        <div class="id-card__label">Race</div>
        <div class="id-card__value">Muqadas (extinct)</div>
      </div>
      <div class="id-card">
        <div class="id-card__label">Role</div>
        <div class="id-card__value">The Previous Emperor / Architect of the Archives</div>
      </div>
      <div class="id-card">
        <div class="id-card__label">Status</div>
        <div class="id-card__value">Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.</div>
      </div>
    </div>
  </section>

  <div class="sep"><span class="sep__dot"></span></div>

  <section class="section" id="the-tree">
    <h2 class="section__label">The Tree</h2>
    <div class="narrative">
      <h3 class="narrative__title">The Golden Archive</h3>
      <p class="narrative__text">A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.</p>
      <p class="narrative__text">The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.</p>
    </div>
  </section>

  <div class="sep"><span class="sep__dot"></span></div>

  <section class="section" id="history">
    <h2 class="section__label">History & Actions</h2>
    <div class="appear-grid bento-grid">
      <div class="appear-item">
        <span class="appear-tag">The Emperor's Title</span>
        <span class="appear-desc">He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.</span>
      </div>
      <div class="appear-item">
        <span class="appear-tag">The Wipe</span>
        <span class="appear-desc">When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.</span>
      </div>
      <div class="appear-item">
        <span class="appear-tag">Golden Blood</span>
        <span class="appear-desc">He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.</span>
      </div>
    </div>
  </section>

  <div class="sep"><span class="sep__dot"></span></div>

  <section class="section" id="adham">
    <h2 class="section__label">The Successor</h2>
    <div class="narrative">
      <h3 class="narrative__title">Adham - The Last Emperor</h3>
      <p class="narrative__text">With the Tree burned, Adham is now the only place that knowledge can ever exist again — if he ever unlocks what he is. The Tree Maker's legacy rests entirely inside an assassin who doesn't know he's carrying it.</p>
      <p class="narrative__text"><a href="adham.html" style="color: var(--accent-primary); text-decoration: underline;">Return to Adham's Profile</a></p>
    </div>
  </section>

  <div class="sep"><span class="sep__dot"></span></div>

`;

html = html.substring(0, mainStartIndex) + '\\n' + newMainContent + '\\n  ' + html.substring(mainEndIndex);

fs.writeFileSync('c:\\\\the hand\\\\the-tree-maker.html', html);
console.log('Success!');
