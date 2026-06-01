import os
import re

profile_path = r"c:\the hand\the_hand_profile.html"
styles_path = r"c:\the hand\styles.css"
app_path = r"c:\the hand\app.js"

# 1. Read files
with open(profile_path, "r", encoding="utf-8") as f:
    html = f.read()
with open(styles_path, "r", encoding="utf-8") as f:
    css = f.read()
with open(app_path, "r", encoding="utf-8") as f:
    js = f.read()

# 2. Extract CSS Themes
# The themes are between lines 246 and 304, and 2484 to 2636 in styles.css.
# A safer regex: capture `body.theme-... { ... }` blocks.
theme_blocks = ""
matches = re.findall(r'body\.theme-[a-zA-Z0-9_-]+[^{]*\{[^}]*\}', css)
for m in matches:
    # Only keep the ones defining --bg-primary or --accent-primary to keep it light
    # Actually we can just keep all of them
    if "--bg-primary" in m or "--accent-primary" in m:
        theme_blocks += m + "\n"

# 3. Inject CSS into <style>
html = html.replace('</style>', f'\n/* ── THEMES ── */\n{theme_blocks}\n</style>')

# 4. Inject Buttons into <nav>
buttons_html = """
  <button class="nav__audio-toggle" id="decode-toggle" aria-label="Decode Runes" title="Decode Language" style="background:none; border:none; cursor:pointer; color:var(--text-muted); margin-left: 20px; transition: color 0.3s;">
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
  </button>
  <button class="nav__audio-toggle" id="audio-toggle" aria-label="Toggle Audio" style="background:none; border:none; cursor:pointer; color:var(--text-muted); margin-left: 10px; transition: color 0.3s;">
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
  </button>
  <button class="nav__theme-toggle" id="theme-toggle" aria-label="Toggle Theme" style="background:none; border:none; cursor:pointer; color:var(--text-muted); margin-left: 10px; transition: color 0.3s;">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21.75a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 6.166a.75.75 0 001.06 1.06L5.636 8.816A.75.75 0 104.576 7.755l1.59-1.589z" /></svg>
  </button>
"""
html = html.replace('</nav>', buttons_html + '</nav>')

# 5. Extract JS Features
# Theme Switcher
start_theme = js.find("const themeToggle = document.getElementById('theme-toggle');")
end_theme = js.find("const modals = document.querySelectorAll('.modal');")
theme_js = js[start_theme:end_theme] if start_theme != -1 and end_theme != -1 else ""

# Audio Engine
start_audio = js.find("const audioBtn = document.getElementById('audio-toggle');")
end_audio = js.find("function fadeOutBGM") + 250
end_audio = js.find("}", end_audio) + 1
audio_js = js[start_audio:end_audio] if start_audio != -1 else ""

# 3D Tilt Cards
start_tilt = js.find("const tiltCards = document.querySelectorAll('.char-profile")
end_tilt = js.find("});", js.find("});", start_tilt) + 3) + 3
tilt_js = js[start_tilt:end_tilt] if start_tilt != -1 else ""

# Decoder
start_decoder = js.find("const decodeBtn = document.getElementById('decode-toggle');")
end_decoder = js.find("});", js.find("});", start_decoder) + 3) + 3
decoder_js = js[start_decoder:end_decoder] if start_decoder != -1 else ""

# Glitch search
start_glitch = js.find("const searchInput = document.getElementById('lore-search');")
end_glitch = js.find("});", js.find("});", start_glitch) + 3) + 3
glitch_js = js[start_glitch:end_glitch] if start_glitch != -1 else ""

# 6. Inject JS into <script>
js_to_inject = f"""
// ── INJECTED FEATURES ──
document.addEventListener('DOMContentLoaded', () => {{
{theme_js}
{audio_js}
{tilt_js}
{decoder_js}
}});
"""
html = html.replace('</script>\n</body>', js_to_inject + '\n</script>\n</body>')

with open(profile_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Injected CSS, Nav buttons, and JS features.")
