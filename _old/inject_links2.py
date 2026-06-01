import os

file_path = r"c:\the hand\the_hand_profile.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

links_data = [
    ("and how much was his own.</p>", "gabriel.html", "View Character Profile &rarr;"),
    ('Her answer: <em>"A new beginning."</em></p>', "lucifer.html", "View Character Profile &rarr;"),
    ("turned to dust. Current state unknown.</p>", "messiah.html", "View Character Profile &rarr;"),
    ("Fighting for something she calls a new beginning.</p>", "satanail.html", "View Character Profile &rarr;")
]

link_style = 'style="display:inline-block; margin-top: 15px; color: var(--accent-primary); border-bottom: 1px solid var(--accent-primary); padding-bottom: 2px; text-decoration: none; transition: opacity 0.3s; font-size: 0.95rem; font-family: var(--font-sans);" onmouseover="this.style.opacity=\'0.7\'" onmouseout="this.style.opacity=\'1\'"'

for substring, url, text in links_data:
    if substring in html and url not in html:
        replacement = f'{substring}\n        <a href="{url}" {link_style}>{text}</a>'
        html = html.replace(substring, replacement)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)
print("Injected final 4 links.")
