const fs = require('fs');
let css = fs.readFileSync('c:\\\\the hand\\\\styles.css', 'utf-8');

// 1. Remove the completely mangled block that fuzzy match created.
// The mangled block starts with `body.theme-tree {` and ends with `}  --text-main: #212529;`
// We will just find `body.theme-tree {` and replace everything down to `--text-muted: #495057;` with the clean tree theme.

const targetStart = 'body.theme-tree {';
const targetEnd = '--text-muted: #495057;';

const startIndex = css.indexOf(targetStart);
const endIndex = css.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
    const fixedBlock = `body.theme-tree {
  --bg-primary: #f8f9fa;
  --bg-secondary: #e9ecef;
  --bg-tertiary: #dee2e6;
  --accent-primary: #10b981;
  --accent-secondary: #059669;
  --accent-glow: rgba(16, 185, 129, 0.4);
  --accent-dim: rgba(16, 185, 129, 0.1);
  --text-main: #212529;
  `;
    css = css.substring(0, startIndex) + fixedBlock + css.substring(endIndex);
    
    // Append the new themes to the bottom of the CSS file
    const newThemes = `
body.theme-cosmic {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-tertiary: #1a1a24;
  --accent-primary: #8b5cf6;
  --accent-secondary: #6d28d9;
  --accent-glow: rgba(139, 92, 246, 0.4);
  --accent-dim: rgba(139, 92, 246, 0.1);
  --text-main: #f8f9fa;
  --text-muted: #adb5bd;
  --text-bright: #ffffff;
  --glass-bg: rgba(10, 10, 15, 0.7);
  --glass-border: rgba(139, 92, 246, 0.2);
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}

body.theme-abyss {
  --bg-primary: #0d0d0d;
  --bg-secondary: #171717;
  --bg-tertiary: #262626;
  --accent-primary: #f43f5e;
  --accent-secondary: #be123c;
  --accent-glow: rgba(244, 63, 94, 0.4);
  --accent-dim: rgba(244, 63, 94, 0.1);
  --text-main: #f5f5f5;
  --text-muted: #a3a3a3;
  --text-bright: #ffffff;
  --glass-bg: rgba(13, 13, 13, 0.7);
  --glass-border: rgba(244, 63, 94, 0.2);
  --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}
`;
    css += newThemes;
    fs.writeFileSync('c:\\\\the hand\\\\styles.css', css);
    console.log('Fixed CSS and appended themes.');
} else {
    console.log('Could not find bounds to fix CSS.');
}
