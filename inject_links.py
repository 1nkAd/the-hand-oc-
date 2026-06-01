import os
import re

file_path = r"c:\the hand\the_hand_profile.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

links_data = [
    # (unique_substring_to_find, html_file, link_text)
    ("drop in his cup.</p>", "the-first-emperor.html", "View Character Profile &rarr;"),
    ("preparation for it.</p>", "the-second-emperor.html", "View Character Profile &rarr;"),
    ("this Emperor's life's work.</p>", "the-tree-maker.html", "View Character Profile &rarr;"),
    ("became was something else.</p>", "the-fourth-emperor.html", "View Character Profile &rarr;"),
    ("its own kind of permanent.</p>", "fie.html", "View Character Profile &rarr;"),
    ("did both things willingly.</p>", "lezmyon.html", "View Character Profile &rarr;"),
    ("has ever had to home is the other one.</p>", "ink.html", "View Character Profile &rarr;"),
    ("starts tearing the person apart from the inside.</p>", "linksia.html", "View Character Profile &rarr;"),
    ("he would just survive that too.</p>", "nour.html", "View Character Profile &rarr;"),
    ("something broken and finding a home in it.</p>", "ahmed.html", "View Character Profile &rarr;"),
    ("never going to be able to follow.</p>", "ayman.html", "View Character Profile &rarr;"),
    ("God of the Sun / Order", "gabriel.html", "View Character Profile &rarr;"),
    ("God of the Moon / Chaos", "lucifer.html", "View Character Profile &rarr;"),
    ("The First Human God", "messiah.html", "View Character Profile &rarr;"),
    ("God of Shadows / Balance", "satanail.html", "View Character Profile &rarr;")
]

link_style = 'style="display:inline-block; margin-top: 15px; color: var(--accent-primary); border-bottom: 1px solid var(--accent-primary); padding-bottom: 2px; text-decoration: none; transition: opacity 0.3s; font-size: 0.95rem; font-family: var(--font-sans);" onmouseover="this.style.opacity=\'0.7\'" onmouseout="this.style.opacity=\'1\'"'

for substring, url, text in links_data:
    if substring in html and url not in html:
        # We need to figure out where to place the link for the Gods because they don't have a <p> tag right after.
        # Wait, the gods are in the <div class="god-card">...</div>
        # Let's find the closing </div> for the god card.
        # It's better to just replace the substring with substring + link.
        
        replacement = f'{substring}\n        <a href="{url}" {link_style}>{text}</a>'
        
        # For the gods, the substring is the god-desc or similar. 
        # Actually Gabriel is "God of the Sun / Order". Let's inject it into the description or right after the sub title.
        if "God of" in substring or "Human God" in substring:
            # Substring is like `class="god-angel">God of the Sun / Order</div>`
            full_sub = f'<div class="god-angel">{substring}</div>'
            if full_sub in html:
                replacement = f'{full_sub}\n        <a href="{url}" {link_style} style="margin-top:0; margin-bottom:15px; display:block;">{text}</a>'
                html = html.replace(full_sub, replacement)
        else:
            html = html.replace(substring, replacement)

# Add tale of lucifer link
# Find: `<!-- DRAMATIC IRONY / HIDDEN TRUTH -->` or `<h2 class="section-label">Hidden Truth</h2>`
# Wait, tale_of_lucifer was added at the end of the Identity/Origin section or at the very end of the page?
# In adham.html, tale_of_lucifer was right before the GODS section.
if "tale_of_lucifer.html" not in html:
    truth_section = '<h2 class="section-label">Hidden Truth</h2>'
    tale_link = f'\n    <div style="text-align: center; margin-bottom: 40px;"><a href="tale_of_lucifer.html" {link_style} style="font-size: 1.2rem;">Read the Full Tale of Lucifer &rarr;</a></div>\n'
    if truth_section in html:
        html = html.replace(truth_section, truth_section + tale_link)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)
print("Injected links.")
