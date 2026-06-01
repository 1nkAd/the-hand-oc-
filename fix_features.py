import os

profile_path = r"c:\the hand\the_hand_profile.html"
styles_path = r"c:\the hand\styles.css"
app_path = r"c:\the hand\app.js"

with open(profile_path, "r", encoding="utf-8") as f:
    html = f.read()
with open(app_path, "r", encoding="utf-8") as f:
    js = f.read()

# 1. Inject the missing CSS for the buttons
button_css = """
.nav__audio-toggle {
  background: var(--glass-bg);
  border: none;
  color: var(--accent-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
}
.nav__audio-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}
.nav__theme-toggle {
  color: var(--accent-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--glass-bg);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  flex-shrink: 0;
  margin-left: 10px;
}
.nav__theme-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent-primary);
}
.nav__theme-toggle svg {
  width: 18px;
  height: 18px;
}
"""
if ".nav__audio-toggle" not in html:
    html = html.replace('</style>', button_css + '\n</style>')

# 2. Fix the buttons in HTML
old_buttons = """
  <button class="nav__audio-toggle" id="audio-toggle" aria-label="Toggle Audio" style="background:none; border:none; cursor:pointer; color:var(--text-muted); margin-left: 10px; transition: color 0.3s;">
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
  </button>
  <button class="nav__theme-toggle" id="theme-toggle" aria-label="Toggle Theme" style="background:none; border:none; cursor:pointer; color:var(--text-muted); margin-left: 10px; transition: color 0.3s;">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21.75a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 6.166a.75.75 0 001.06 1.06L5.636 8.816A.75.75 0 104.576 7.755l1.59-1.589z" /></svg>
  </button>"""

new_buttons = """
  <div style="display:flex; align-items:center; margin-left: 20px;">
    <button class="nav__audio-toggle" id="audio-toggle" aria-label="Toggle Audio"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button>
    <button class="nav__theme-toggle" id="theme-toggle" aria-label="Toggle Theme">
      <svg viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21.75a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 6.166a.75.75 0 001.06 1.06L5.636 8.816A.75.75 0 104.576 7.755l1.59-1.589z" /></svg>
    </button>
  </div>"""
if 'id="audio-toggle" aria-label="Toggle Audio" style=' in html:
    html = html.replace(old_buttons, new_buttons)

# 3. Read correct JS blocks
# Extract Audio
start_audio = js.find("    // 10. Cinematic Audio Engine")
end_audio = js.find("function fadeOutBGM(audioObj) {")
end_audio = js.find("    }", end_audio) + 5
audio_js = js[start_audio:end_audio]

# Extract Themes
start_theme = js.find("  const themeToggle = document.getElementById('theme-toggle');")
end_theme = js.find("  /* ----------------------------------------------------------\n     7. Modal Viewer")
theme_js = js[start_theme:end_theme]

# Modify Themes array
theme_js = theme_js.replace(
"""  const themes = [
      'golden', 'chaos', 'tree', 'cosmic', 'abyss', 'anchor', 
      'light', 'shadow', 'ahmed', 'agx', 'gabriel', 'lucifer', 
      'messiah', 'satanail'
  ];""", 
"""  const themes = [
      'golden', 'chaos', 'tree'
  ];"""
)

# 4. Inject JS properly
# Instead of replacing a vague block, let's inject it into `document.addEventListener('DOMContentLoaded', () => {` at the end
# Since I failed to inject last time, let's look for "// ── INJECTED FEATURES ──" in html.

start_inject = html.find("// ── INJECTED FEATURES ──")
end_inject = html.find("</script>", start_inject)

js_to_inject = f"""// ── INJECTED FEATURES ──
document.addEventListener('DOMContentLoaded', () => {{
{theme_js}
{audio_js}
}});
"""

if start_inject != -1:
    # Remove old empty block
    html = html[:start_inject] + js_to_inject + "\n" + html[end_inject:]

with open(profile_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Fixed buttons and Javascript logic.")
