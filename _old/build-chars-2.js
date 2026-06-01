const fs = require('fs');
const baseHtml = fs.readFileSync('c:\\\\the hand\\\\the-tree-maker.html', 'utf-8');

// 1. Linksia
let linksiaHtml = baseHtml;
linksiaHtml = linksiaHtml.replace(/THE TREE MAKER/g, 'LINKSIA');
linksiaHtml = linksiaHtml.replace(/The Tree Maker/g, 'Linksia');
linksiaHtml = linksiaHtml.replace(/<body data-theme="tree">/, '<body data-theme="anchor">');
linksiaHtml = linksiaHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `The only anchor left. A child holding the morality of the most dangerous man alive.`);
linksiaHtml = linksiaHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"The Daughter. The Moral Anchor."`);

linksiaHtml = linksiaHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">Adham's Anchor</div>`);
linksiaHtml = linksiaHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Alive. Protected by Adham at all costs.`);
linksiaHtml = linksiaHtml.replace(`Muqadas (extinct)`, `Human`);

linksiaHtml = linksiaHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Connection</h2>`);
linksiaHtml = linksiaHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Meeting</h3>`);
linksiaHtml = linksiaHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `Adham arrived in her universe just in time to see Jabrial sending a beam from the sky to wipe out an entire village. Linksia was just a child standing in front of it. Adham moved to protect her without deciding to.`);
linksiaHtml = linksiaHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `Everything Adham does now runs through one filter: Linksia. He will do anything to protect her — no limit, no line, no hesitation. But the inverse is just as absolute: he will not do anything she would see as bad. The man who burned 1.5 billion people now measures his actions against the opinion of one child.`);

linksiaHtml = linksiaHtml.replace(`The Emperor's Title`, `The Limit`);
linksiaHtml = linksiaHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `Adham's absolute loyalty to Linksia acts as a strict limit on his own destructive potential. He wants to look good in her eyes. Not powerful, not feared — good.`);
linksiaHtml = linksiaHtml.replace(`The Wipe`, `The Future`);
linksiaHtml = linksiaHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `In the Refugee Universe, she continues to grow up safely, completely unaware of the sheer cosmic scale of the horrors Adham has committed or the powers he holds.`);
linksiaHtml = linksiaHtml.replace(`Golden Blood`, `The Burden`);
linksiaHtml = linksiaHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `She is the only thing standing between Adham and total moral collapse. That is not weakness; it is the only anchor he has left.`);

fs.writeFileSync('c:\\\\the hand\\\\linksia.html', linksiaHtml);

// 2. Nour (Light)
let nourHtml = baseHtml;
nourHtml = nourHtml.replace(/THE TREE MAKER/g, 'NOUR');
nourHtml = nourHtml.replace(/The Tree Maker/g, 'Nour (Light)');
nourHtml = nourHtml.replace(/<body data-theme="tree">/, '<body data-theme="light">');
nourHtml = nourHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `He wanted to do good on his own terms. Not because a cosmic structure forced him to.`);
nourHtml = nourHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"Light. The Escaped Hero."`);

nourHtml = nourHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">Former Trainee of the Nine</div>`);
nourHtml = nourHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Missing. Disappeared without explanation.`);
nourHtml = nourHtml.replace(`Muqadas (extinct)`, `Human (Modified)`);

nourHtml = nourHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Rebellion</h2>`);
nourHtml = nourHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">Hatred of the System</h3>`);
nourHtml = nourHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `Ink dragged him out of his story at the end of it. Nour was furious. He hated everything about the system — not because he wanted to do evil, but because he wanted to do good on his own terms.`);
nourHtml = nourHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `Light is the mirror of what the Nine claim to stand for. They say they exist to lead the world toward good by example and choice. Light is proof that even the Nine's system can strip someone of choice while claiming to serve it. He wanted to be good. He just wanted it to be his.`);

nourHtml = nourHtml.replace(`The Emperor's Title`, `The Escape`);
nourHtml = nourHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `After the Tree burned, Light finally got out. He found a universe, found a girl — an idol named Ei — and started a family.`);
nourHtml = nourHtml.replace(`The Wipe`, `The Disappearance`);
nourHtml = nourHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `They had twins: Yuro and Yuno. Then he disappeared. No explanation. No goodbye.`);
nourHtml = nourHtml.replace(`Golden Blood`, `The Void Left Behind`);
nourHtml = nourHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `His sudden absence left Ayman and the others reeling. Nour was always the moral compass of the group, and without him, things changed.`);

fs.writeFileSync('c:\\\\the hand\\\\nour.html', nourHtml);

// 3. Fie
let fieHtml = baseHtml;
fieHtml = fieHtml.replace(/THE TREE MAKER/g, 'FIE');
fieHtml = fieHtml.replace(/The Tree Maker/g, 'Fie');
fieHtml = fieHtml.replace(/<body data-theme="tree">/, '<body data-theme="shadow">');
fieHtml = fieHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `Born to kill. Choosing to live.`);
fieHtml = fieHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"The Assassin. The Anomaly."`);

fieHtml = fieHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">Rogue Assassin</div>`);
fieHtml = fieHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Alive. Evading her own nature.`);
fieHtml = fieHtml.replace(`Muqadas (extinct)`, `Human (Assassin Universe)`);

fieHtml = fieHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Nature</h2>`);
fieHtml = fieHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Assassin Universe</h3>`);
fieHtml = fieHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `She comes from a universe where humanity's default trait is violence, not cooperation. The baseline of society is assassination, subterfuge, and survival.`);
fieHtml = fieHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `By all logic, she should be a monster. But Fie possesses an anomaly: a conscience. She actively fights against her own universe's programming, struggling to find a way to exist without killing.`);

fieHtml = fieHtml.replace(`The Emperor's Title`, `The Connection`);
fieHtml = fieHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `Adham met her during his endless training cycles. He recognized the same quiet lethality in her that had been forced onto him.`);
fieHtml = fieHtml.replace(`The Wipe`, `The Choice`);
fieHtml = fieHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `She continually makes the active, painful choice to deny her instincts. This makes her incredibly dangerous, as her restraint is learned, not natural.`);
fieHtml = fieHtml.replace(`Golden Blood`, `The Parallel`);
fieHtml = fieHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `Fie and Adham are mirrors. Both were forced into becoming killers by their environments, but while Adham embraced it, Fie is desperately trying to escape it.`);

fs.writeFileSync('c:\\\\the hand\\\\fie.html', fieHtml);

// 4. Update CSS Themes
let css = fs.readFileSync('c:\\\\the hand\\\\styles.css', 'utf-8');
const newThemes = `
body.theme-anchor {
  --bg-primary: #f0fdfa;
  --bg-secondary: #ccfbf1;
  --bg-tertiary: #99f6e4;
  --accent-primary: #0d9488;
  --accent-secondary: #0f766e;
  --accent-glow: rgba(13, 148, 136, 0.4);
  --accent-dim: rgba(13, 148, 136, 0.1);
  --text-main: #115e59;
  --text-muted: #134e4a;
  --text-bright: #042f2e;
  --glass-bg: rgba(240, 253, 250, 0.7);
  --glass-border: rgba(13, 148, 136, 0.2);
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

body.theme-light {
  --bg-primary: #fffbeb;
  --bg-secondary: #fef3c7;
  --bg-tertiary: #fde68a;
  --accent-primary: #d97706;
  --accent-secondary: #b45309;
  --accent-glow: rgba(217, 119, 6, 0.4);
  --accent-dim: rgba(217, 119, 6, 0.1);
  --text-main: #78350f;
  --text-muted: #92400e;
  --text-bright: #451a03;
  --glass-bg: rgba(255, 251, 235, 0.7);
  --glass-border: rgba(217, 119, 6, 0.2);
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

body.theme-shadow {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --accent-primary: #94a3b8;
  --accent-secondary: #64748b;
  --accent-glow: rgba(148, 163, 184, 0.4);
  --accent-dim: rgba(148, 163, 184, 0.1);
  --text-main: #e2e8f0;
  --text-muted: #cbd5e1;
  --text-bright: #f8fafc;
  --glass-bg: rgba(15, 23, 42, 0.7);
  --glass-border: rgba(148, 163, 184, 0.2);
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}
`;
if (!css.includes('.theme-anchor')) {
  fs.writeFileSync('c:\\\\the hand\\\\styles.css', css + newThemes);
}

// 5. Update app.js Routing
let appJs = fs.readFileSync('c:\\\\the hand\\\\app.js', 'utf-8');
if (!appJs.includes('linksia')) {
  appJs = appJs.replace(
      /\} else if \(window\.location\.pathname\.includes\('ink'\)\) \{/,
      `} else if (window.location.pathname.includes('ink')) {
              currentTheme = 'cosmic';
          } else if (window.location.pathname.includes('linksia')) {
              currentTheme = 'anchor';
          } else if (window.location.pathname.includes('nour')) {
              currentTheme = 'light';
          } else if (window.location.pathname.includes('fie')) {
              currentTheme = 'shadow';`
  );
  fs.writeFileSync('c:\\\\the hand\\\\app.js', appJs);
}

console.log('Phase 2 generation complete.');
