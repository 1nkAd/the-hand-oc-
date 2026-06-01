import fs from 'fs';

const css = `
/* ============================================================
   CHARACTER VISUAL THEMES
   ============================================================ */

/* INK (Monochrome / Memory Loss) */
[data-theme='ink'] {
  --bg-primary: #020202;
  --bg-secondary: #080808;
  --bg-tertiary: #101010;
  --accent-primary: #f0f0f0;
  --accent-secondary: #ffffff;
  --accent-glow: rgba(255, 255, 255, 0.4);
  --accent-dim: rgba(255, 255, 255, 0.05);
  --glass-border-hover: rgba(255, 255, 255, 0.3);
}

/* LEZMYON (Blood / Parasite / Abyss) */
[data-theme='blood'] {
  --bg-primary: #050000;
  --bg-secondary: #0a0000;
  --bg-tertiary: #120000;
  --accent-primary: #cc0000;
  --accent-secondary: #ff3333;
  --accent-glow: rgba(204, 0, 0, 0.5);
  --accent-dim: rgba(204, 0, 0, 0.08);
  --glass-border-hover: rgba(204, 0, 0, 0.4);
}

/* NOUR (Light / Absolute Freeze) */
[data-theme='light'] {
  --bg-primary: #00040a;
  --bg-secondary: #010814;
  --bg-tertiary: #021124;
  --accent-primary: #80cfff;
  --accent-secondary: #b3e0ff;
  --accent-glow: rgba(128, 207, 255, 0.5);
  --accent-dim: rgba(128, 207, 255, 0.08);
  --glass-border-hover: rgba(128, 207, 255, 0.4);
}

/* MESSIAH (Ethereal / Light & Fire) */
[data-theme='messiah'] {
  --bg-primary: #0a0705;
  --bg-secondary: #120c08;
  --bg-tertiary: #1a120b;
  --accent-primary: #ffebd6;
  --accent-secondary: #ffb470;
  --accent-glow: rgba(255, 235, 214, 0.5);
  --accent-dim: rgba(255, 180, 112, 0.08);
  --glass-border-hover: rgba(255, 235, 214, 0.4);
}

/* SATANAIL (Fire / Defiance) */
[data-theme='satanail'] {
  --bg-primary: #080200;
  --bg-secondary: #100400;
  --bg-tertiary: #180600;
  --accent-primary: #ff5500;
  --accent-secondary: #ff8800;
  --accent-glow: rgba(255, 85, 0, 0.5);
  --accent-dim: rgba(255, 85, 0, 0.08);
  --glass-border-hover: rgba(255, 85, 0, 0.4);
}

/* FIE (Shadow / Normalcy / Betrayal) */
[data-theme='shadow'] {
  --bg-primary: #040506;
  --bg-secondary: #080a0c;
  --bg-tertiary: #0d1014;
  --accent-primary: #788a99;
  --accent-secondary: #a1b0bd;
  --accent-glow: rgba(120, 138, 153, 0.4);
  --accent-dim: rgba(120, 138, 153, 0.08);
  --glass-border-hover: rgba(120, 138, 153, 0.3);
}

/* FOURTH EMPEROR (Abyss / Void) */
[data-theme='abyss'] {
  --bg-primary: #000000;
  --bg-secondary: #020005;
  --bg-tertiary: #05000a;
  --accent-primary: #9d00ff;
  --accent-secondary: #cc80ff;
  --accent-glow: rgba(157, 0, 255, 0.5);
  --accent-dim: rgba(157, 0, 255, 0.08);
  --glass-border-hover: rgba(157, 0, 255, 0.4);
}

/* TREE MAKER (Tree / Nature) */
[data-theme='tree'] {
  --bg-primary: #020603;
  --bg-secondary: #040c06;
  --bg-tertiary: #061208;
  --accent-primary: #00ff66;
  --accent-secondary: #66ff99;
  --accent-glow: rgba(0, 255, 102, 0.4);
  --accent-dim: rgba(0, 255, 102, 0.08);
  --glass-border-hover: rgba(0, 255, 102, 0.3);
}

/* LUCIFER (Hell / Rebellion) */
[data-theme='lucifer'] {
  --bg-primary: #080000;
  --bg-secondary: #100000;
  --bg-tertiary: #180000;
  --accent-primary: #ff0000;
  --accent-secondary: #ff4d4d;
  --accent-glow: rgba(255, 0, 0, 0.5);
  --accent-dim: rgba(255, 0, 0, 0.08);
  --glass-border-hover: rgba(255, 0, 0, 0.4);
}

/* GABRIEL (Golden - slightly more holy than default) */
[data-theme='gabriel'] {
  --bg-primary: #080705;
  --bg-secondary: #100e0a;
  --accent-primary: #ffdd77;
  --accent-secondary: #ffeeaa;
  --accent-glow: rgba(255, 221, 119, 0.5);
}

/* FIRST EMPEROR (Cosmic / Origin Gold) */
[data-theme='cosmic'] {
  --bg-primary: #030105;
  --bg-secondary: #06020a;
  --bg-tertiary: #0a0312;
  --accent-primary: #ffd700;
  --accent-secondary: #ffea70;
  --accent-glow: rgba(255, 215, 0, 0.6);
  --accent-dim: rgba(255, 215, 0, 0.1);
  --glass-border-hover: rgba(255, 215, 0, 0.5);
}
`;

fs.appendFileSync('c:\\the hand\\styles.css', css);
console.log('Appended CSS themes successfully.');
