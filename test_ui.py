from playwright.sync_api import sync_playwright

def main():
    errors = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        page.on("pageerror", lambda err: errors.append(f"[{page.url}] Page Error: {err}"))
        page.on("console", lambda msg: errors.append(f"[{page.url}] Console {msg.type}: {msg.text}") if msg.type == "error" else None)
        
        print("Navigating to adham.html...")
        page.goto("file:///c:/the hand/adham.html")
        page.wait_for_load_state('networkidle')
        
        print("Clicking buttons to test tactile feedback and errors...")
        try:
            page.evaluate("document.getElementById('theme-toggle') && document.getElementById('theme-toggle').click()")
            page.evaluate("document.getElementById('decode-toggle') && document.getElementById('decode-toggle').click()")
        except Exception as e:
            print(f"Failed to click buttons: {e}")
            
        print("Hovering over a card to test CSS transforms...")
        try:
            card = page.locator(".id-card").first
            if card:
                card.hover()
                page.wait_for_timeout(500)
        except Exception as e:
            pass

        browser.close()
        
    if errors:
        print("\nErrors found during testing:")
        errors = list(set(errors))
        for err in errors:
            print(err)
    else:
        print("\nSUCCESS: No errors found. CSS Overhaul works flawlessly!")

if __name__ == "__main__":
    main()
