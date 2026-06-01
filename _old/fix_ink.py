import io

with open('c:\\the hand\\ink.html', 'r', encoding='utf-8') as f:
    content = f.read()

head_template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>INK — Character Profile</title>
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body data-theme="ink">
<!-- PRELOADER -->
<div id="page-loader" class="page-loader">
  <div class="loader-content">
    <h2 class="loader-text">UNSEALING</h2>
  </div>
</div>

<!-- PERMANENT NOTE -->
"""

idx = content.find('<div class="permanent-note">')
if idx != -1:
    content = head_template + content[idx:]
    with open('c:\\the hand\\ink.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Fixed ink.html')
else:
    print('Could not find injection point.')
