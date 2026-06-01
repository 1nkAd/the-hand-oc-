const fs = require('fs');
const baseHtml = fs.readFileSync('c:\\\\the hand\\\\the-tree-maker.html', 'utf-8');

function createPage(name, title, theme, subTitle, aliveStatus, race, p1, p2, p3) {
  let html = baseHtml;
  html = html.replace(/THE TREE MAKER/g, name.toUpperCase());
  html = html.replace(/The Tree Maker/g, name);
  html = html.replace(/<body data-theme="tree">/, '<body data-theme="' + theme + '">');
  
  html = html.replace(`He built the archive of eternity, then walked back into its branches.`, subTitle);
  html = html.replace(`"The Previous Emperor. The Architect of the Archives."`, `"${title}"`);

  html = html.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">${title}</div>`);
  html = html.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, aliveStatus);
  html = html.replace(`Muqadas (extinct)`, race);

  html = html.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Background</h2>`);
  html = html.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">Origin</h3>`);
  html = html.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, p1);
  html = html.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, p2);

  html = html.replace(`The Emperor's Title`, `The Connection`);
  html = html.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, p3);
  html = html.replace(`The Wipe`, `The Future`);
  html = html.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `Their fate remains deeply tied to the survival of the universe and the actions of the last Emperor.`);
  html = html.replace(`Golden Blood`, `The Power`);
  html = html.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `A being possessing profound capabilities that transcend ordinary comprehension, standing as a pivotal piece in the cosmic war.`);

  return html;
}

// 1. Ahmed
const ahmed = createPage(
  'Ahmed', 'The Silent Observer', 'ahmed', 'Always alone, but still friends with the rest.', 'Alive.', 'Human (Modified)',
  `Ahmed was brought in by Lezmyon to train under the Nine. He possessed a terrifying potential but preferred the quiet.`,
  `Unlike Nour or Ayman, Ahmed never tried to be the center of attention. He operated in the shadows, mastering his powers in solitude.`,
  `He was part of Adham's group. The group worked because nobody forced it, and Ahmed's silent presence was the glue that kept them grounded.`
);
fs.writeFileSync('c:\\\\the hand\\\\ahmed.html', ahmed);

// 2. Ayman (AGX)
const ayman = createPage(
  'Ayman / AGX', 'The Strategist', 'agx', 'The other half of the duo. Always in sync.', 'Alive.', 'Human (Modified)',
  `Ayman, known under the moniker AGX, was Nour's closest friend during the training under the Nine. They were a duo, always operating in perfect sync.`,
  `When Nour disappeared, Ayman was left to navigate the brutal system alone. He developed a sharper, more pragmatic approach to survival.`,
  `Adham respects Ayman's tactical genius. Though they weren't best friends, they shared a bond forged in the crucible of their impossible training.`
);
fs.writeFileSync('c:\\\\the hand\\\\ayman.html', ayman);

// 3. Gabriel
const gabriel = createPage(
  'Gabriel', 'The Left Hand of God', 'gabriel', 'An Archangel operating on cold bureaucracy.', 'Active.', 'Archangel',
  `Gabriel is a high-ranking Archangel, tasked with enforcing the will of a God that has seemingly abandoned the universe.`,
  `Operating entirely on a rigid, bureaucratic interpretation of divine law, Gabriel is devoid of human empathy, carrying out planetary wipes without a second thought.`,
  `Adham clashed directly with the Archangel's forces when Jabrial (a subordinate) attempted to wipe Linksia's village. Gabriel views Adham as a glitch in the cosmic order.`
);
fs.writeFileSync('c:\\\\the hand\\\\gabriel.html', gabriel);

// 4. Lucifer
const lucifer = createPage(
  'Lucifer', 'The Fallen Prince', 'lucifer', 'He who questioned the design.', 'Active.', 'Fallen Angel',
  `Lucifer rebelled against the bureaucratic indifference of heaven. He saw the flaws in the system before anyone else did.`,
  `He now operates as a wild card, manipulating events from the shadows, opposing both Gabriel's rigid order and Lezmyon's pure chaos.`,
  `Lucifer finds Adham deeply fascinating. The Last Emperor is a variable that neither God nor the Angels predicted.`
);
fs.writeFileSync('c:\\\\the hand\\\\lucifer.html', lucifer);

// 5. The Messiah
const messiah = createPage(
  'The Messiah', 'The Promised Savior', 'messiah', 'A figure shrouded in myth and expectation.', 'Unknown.', 'Divine Avatar',
  `The Messiah is a legendary figure foretold to bring true balance to the multiverse, standing above the squabbles of Angels and Emperors.`,
  `Many believe The Messiah is the only entity capable of permanently destroying Lezmyon and restoring the Golden Age.`,
  `Adham has heard the stories, but he doesn't rely on saviors. In his experience, if you want something saved, you have to do it yourself.`
);
fs.writeFileSync('c:\\\\the hand\\\\messiah.html', messiah);

// 6. Satanail
const satanail = createPage(
  'Satanail', 'The Architect of Sin', 'satanail', 'The true mastermind behind the whispering shadows.', 'Active.', 'Primordial Evil',
  `Satanail is ancient. While Lezmyon is the force of ruin, Satanail is the architect of corruption. He doesn't destroy; he twists.`,
  `He is the originator of "Satan's Whisper," the psychological possession technique that Lezmyon utilized to manipulate Adham's family.`,
  `Satanail operates as the ultimate puppet master, viewing the multiverse as a grand chessboard where he controls both the white and black pieces.`
);
fs.writeFileSync('c:\\\\the hand\\\\satanail.html', satanail);

// Update CSS
let css = fs.readFileSync('c:\\\\the hand\\\\styles.css', 'utf-8');
const newThemes = `
body.theme-ahmed {
  --bg-primary: #f0fdf4;
  --bg-secondary: #dcfce7;
  --bg-tertiary: #bbf7d0;
  --accent-primary: #16a34a;
  --accent-secondary: #15803d;
  --accent-glow: rgba(22, 163, 74, 0.4);
  --accent-dim: rgba(22, 163, 74, 0.1);
  --text-main: #14532d;
  --glass-bg: rgba(240, 253, 244, 0.7);
  --glass-border: rgba(22, 163, 74, 0.2);
}
body.theme-agx {
  --bg-primary: #eff6ff;
  --bg-secondary: #dbeafe;
  --bg-tertiary: #bfdbfe;
  --accent-primary: #2563eb;
  --accent-secondary: #1d4ed8;
  --accent-glow: rgba(37, 99, 235, 0.4);
  --accent-dim: rgba(37, 99, 235, 0.1);
  --text-main: #1e3a8a;
  --glass-bg: rgba(239, 246, 255, 0.7);
  --glass-border: rgba(37, 99, 235, 0.2);
}
body.theme-gabriel {
  --bg-primary: #fdfcee;
  --bg-secondary: #fef08a;
  --bg-tertiary: #fde047;
  --accent-primary: #eab308;
  --accent-secondary: #ca8a04;
  --accent-glow: rgba(234, 179, 8, 0.4);
  --accent-dim: rgba(234, 179, 8, 0.1);
  --text-main: #713f12;
  --glass-bg: rgba(253, 252, 238, 0.7);
  --glass-border: rgba(234, 179, 8, 0.2);
}
body.theme-lucifer {
  --bg-primary: #2e1012;
  --bg-secondary: #4a151b;
  --bg-tertiary: #701c24;
  --accent-primary: #dc2626;
  --accent-secondary: #991b1b;
  --accent-glow: rgba(220, 38, 38, 0.4);
  --accent-dim: rgba(220, 38, 38, 0.1);
  --text-main: #fecaca;
  --text-bright: #ffffff;
  --text-muted: #fca5a5;
  --glass-bg: rgba(46, 16, 18, 0.7);
  --glass-border: rgba(220, 38, 38, 0.2);
}
body.theme-messiah {
  --bg-primary: #ffffff;
  --bg-secondary: #f1f5f9;
  --bg-tertiary: #e2e8f0;
  --accent-primary: #94a3b8;
  --accent-secondary: #64748b;
  --accent-glow: rgba(148, 163, 184, 0.4);
  --accent-dim: rgba(148, 163, 184, 0.1);
  --text-main: #0f172a;
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(148, 163, 184, 0.2);
}
body.theme-satanail {
  --bg-primary: #171717;
  --bg-secondary: #262626;
  --bg-tertiary: #404040;
  --accent-primary: #a3a3a3;
  --accent-secondary: #737373;
  --accent-glow: rgba(163, 163, 163, 0.4);
  --accent-dim: rgba(163, 163, 163, 0.1);
  --text-main: #fafafa;
  --text-bright: #ffffff;
  --text-muted: #d4d4d4;
  --glass-bg: rgba(23, 23, 23, 0.7);
  --glass-border: rgba(163, 163, 163, 0.2);
}
`;
if (!css.includes('.theme-ahmed')) {
  fs.writeFileSync('c:\\\\the hand\\\\styles.css', css + newThemes);
}

// Update app.js Routing
let appJs = fs.readFileSync('c:\\\\the hand\\\\app.js', 'utf-8');
if (!appJs.includes('ahmed')) {
  appJs = appJs.replace(
      /\} else if \(window\.location\.pathname\.includes\('fie'\)\) \{/,
      `} else if (window.location.pathname.includes('fie')) {
              currentTheme = 'shadow';
          } else if (window.location.pathname.includes('ahmed')) {
              currentTheme = 'ahmed';
          } else if (window.location.pathname.includes('ayman')) {
              currentTheme = 'agx';
          } else if (window.location.pathname.includes('gabriel')) {
              currentTheme = 'gabriel';
          } else if (window.location.pathname.includes('lucifer')) {
              currentTheme = 'lucifer';
          } else if (window.location.pathname.includes('messiah')) {
              currentTheme = 'messiah';
          } else if (window.location.pathname.includes('satanail')) {
              currentTheme = 'satanail';`
  );
  fs.writeFileSync('c:\\\\the hand\\\\app.js', appJs);
}

console.log('Phase 3 generation complete.');
