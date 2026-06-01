import re
import sys

def convert_html(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Strip styles and add link
    content = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="styles.css">', content, flags=re.DOTALL)
    
    # 2. Strip scripts and add link
    content = re.sub(r'<script>\s*// ── Particles\.js ──.*?</script>', '<script src="app.js"></script>', content, flags=re.DOTALL)
    
    # 3. Add hamburger menu and theme toggle to nav
    nav_repl = """<nav class="nav" id="nav">
  <button class="nav__hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <div class="nav__menu" id="nav-menu">"""
    content = content.replace('<nav class="nav" id="nav">', nav_repl)
    
    # Need to close nav__menu and add theme toggle before </nav>
    nav_end_repl = """  </div>
  <button class="nav__theme-toggle" id="theme-toggle" aria-label="Toggle Theme">
    <svg viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21.75a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 6.166a.75.75 0 001.06 1.06L5.636 8.816A.75.75 0 104.576 7.755l1.59-1.589z" /></svg>
  </button>
</nav>"""
    content = content.replace('</nav>', nav_end_repl)

    # 4. Fix Nav Links
    content = re.sub(r'<a href="([^"]+)">', r'<a href="\1" class="nav__link">', content)
    # The previous regex catches all a tags, but let's restrict to nav. Actually in this HTML almost all a tags are nav. Let's fix.
    
    # Let's do class replacements using regex
    replacements = {
        r'class="hero-star"': r'class="hero__star"',
        r'class="hero-title"': r'class="hero__title"',
        r'class="hero-subtitle"': r'class="hero__subtitle"',
        r'class="hero-line"': r'class="hero__line"',
        r'class="scroll-arrow"': r'class="scroll-hint__arrow"', # Also changed this in logic
        r'class="section-label"': r'class="section__label"',
        r'class="label"': r'class="id-card__label"', # Needs to be careful, but probably ok
        r'class="value"': r'class="id-card__value"',
        r'class="narrative classified"': r'class="narrative narrative--classified"',
        r'class="emp-title"': r'class="emperor-card__title"',
        r'class="emp-sub"': r'class="emperor-card__sub"',
        r'class="power-name"': r'class="power-card__name"',
        r'class="power-desc"': r'class="power-card__desc"',
        r'class="nine-name"': r'class="nine-card__name"',
        r'class="nine-domain"': r'class="nine-card__domain"',
        r'class="nine-detail"': r'class="nine-card__detail"',
        r'class="char-header"': r'class="char-profile__header"',
        r'class="char-name"': r'class="char-profile__name"',
        r'class="char-role"': r'class="char-profile__role"',
        r'class="sub-title"': r'class="char-profile__subtitle"',
        r'class="desc"': r'class="char-profile__text"',
        r'class="god-name"': r'class="god-card__name"',
        r'class="god-angel"': r'class="god-card__angel"',
        r'class="god-desc"': r'class="god-card__desc"',
        r'class="irony-believes"': r'class="irony-item__believes"',
        r'class="irony-truth"': r'class="irony-item__truth"',
        r'class="sep-dot"': r'class="sep__dot"',
        r'class="chant-ar"': r'class="chant-ar"', # already matching
        r'class="chant-en"': r'class="chant-en"'  # already matching
    }
    
    for old, new in replacements.items():
        content = re.sub(old, new, content)

    # Convert the manual <a href> tag to a modal-trigger if any, or add Modal HTML structure at the end of body
    modal_html = """
<!-- MODAL -->
<dialog class="modal" id="modal">
  <div class="modal__content">
    <button class="modal__close" aria-label="Close Modal">✕</button>
    <div class="modal__body"></div>
  </div>
</dialog>
"""
    content = content.replace('</body>', modal_html + '\n</body>')

    # Convert Narrative headings to have classes
    content = re.sub(r'(<div class="narrative[^>]*>)\s*<h3>', r'\1\n  <h3 class="narrative__title">', content)
    content = re.sub(r'(<div class="narrative[^>]*>.*?)(<p>)', r'\1<p class="narrative__text">', content, flags=re.DOTALL)
    content = content.replace('<p>', '<p class="narrative__text">')
    
    # Fix the ID label and value
    content = content.replace('class="id-card__label"', 'class="id-card__label"')

    # Fix inline styles and structural issues mentioned in previous steps
    content = re.sub(r'style="[^"]*"', '', content)
    content = content.replace('<div class="footer">', '<footer class="footer">').replace('</div>\n\n</main>', '</footer>\n\n</main>')
    content = content.replace('<span class="irony-label">', '<span class="irony-item__label">')
    
    # Defer particles.js and move it to head
    content = content.replace('<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>', '')
    content = content.replace('</title>', '</title>\n  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer></script>')

    # Add images
    linksia_img = '<img src="My ocs/linxia.png" alt="Linksia" class="char-profile__avatar">'
    content = content.replace('<span class="char-profile__name">لينكسيا — Linksia</span>', linksia_img + '\n        <span class="char-profile__name">لينكسيا — Linksia</span>')

    # Add Tooltips
    keywords = {
        "The Wipe": "A cataclysmic event designed by an unnamed god to eradicate the Muqadas and the Tree of Knowledge.",
        "Golden Blood": "A legendary, exponentially scaling power system born from a single drop of golden rain.",
        "Chaos Blood": "The reverse-engineered dark mirror of Golden Blood, created by Lezmyon.",
        "The Tree": "A massive, golden archive that stored the knowledge of every Muqadas Emperor across time.",
        "Muqadas": "An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.",
        "Lezmyon": "The Betrayer. A primordial entity of ruin born from a drop of blood.",
        "Ink": "A primordial entity of creation born from a drop of ink. Anything he writes or draws becomes real."
    }
    for word, definition in keywords.items():
        tooltip_html = f'<span class="lore-term" data-tooltip="{definition}">{word}</span>'
        # Basic exact string replacement wrapped in spaces to avoid inside tags
        content = content.replace(f' {word} ', f' {tooltip_html} ')

    # Add scroll progress minimap to body
    minimap_html = '<div class="scroll-progress-bar" id="scroll-progress"></div>\n'
    content = content.replace('<body>', f'<body>\n{minimap_html}')

    # Add audio toggle to nav
    audio_btn = '<button class="nav__audio-toggle" id="audio-toggle" aria-label="Toggle Audio"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button>'
    content = content.replace('<button class="nav__theme-toggle"', f'{audio_btn}\n  <button class="nav__theme-toggle"')

    # Write output
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Success: Wrote to " + output_file)

if __name__ == '__main__':
    convert_html("c:\\the hand\\the_hand_profile.html", "c:\\the hand\\index.html")
