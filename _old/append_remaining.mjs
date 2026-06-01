import fs from 'fs';

const css = `
/* AHMED (Dark Void / Piercing Crimson) */
[data-theme='ahmed'] {
  --bg-primary: #040008;
  --bg-secondary: #080010;
  --bg-tertiary: #0c0018;
  --accent-primary: #ff0044;
  --accent-secondary: #ff3366;
  --accent-glow: rgba(255, 0, 68, 0.5);
  --accent-dim: rgba(255, 0, 68, 0.08);
  --glass-border-hover: rgba(255, 0, 68, 0.4);
}

/* AGX (Neon Hacker / Cyan) */
[data-theme='agx'] {
  --bg-primary: #000808;
  --bg-secondary: #001010;
  --bg-tertiary: #001818;
  --accent-primary: #00ffff;
  --accent-secondary: #66ffff;
  --accent-glow: rgba(0, 255, 255, 0.5);
  --accent-dim: rgba(0, 255, 255, 0.08);
  --glass-border-hover: rgba(0, 255, 255, 0.4);
}

/* ANCHOR (Ocean / Deep Sea Blue) */
[data-theme='anchor'] {
  --bg-primary: #000a14;
  --bg-secondary: #001428;
  --bg-tertiary: #001f3d;
  --accent-primary: #00aaff;
  --accent-secondary: #33bbff;
  --accent-glow: rgba(0, 170, 255, 0.5);
  --accent-dim: rgba(0, 170, 255, 0.08);
  --glass-border-hover: rgba(0, 170, 255, 0.4);
}
`;

fs.appendFileSync('c:\\the hand\\styles.css', css);
console.log('Appended missing themes successfully.');
