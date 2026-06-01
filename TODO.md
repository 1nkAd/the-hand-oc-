# The Hand Universe - V2 Migration TODOs

This file tracks the remaining tasks to complete the Astro Web App migration for "The Hand Universe".

## 1. Complete Character Content Migration (MDX)
Currently, only 4 characters (Adham, Lezmyon, Ink, Second Emperor) have been partially migrated as a proof-of-concept. 
We need to create `.mdx` files and port the full lore from the old `.html` and `the_hand_profile.md` for the following:
- [x] Ahmed
- [x] Ayman / AGX
- [x] Nour (Light)
- [x] Gabriel
- [x] Lucifer
- [x] The Messiah
- [x] Satanail
- [x] Fie
- [x] Linksia
- [x] The First Emperor
- [x] The Third Emperor
- [x] The Fourth Emperor
- [x] The Tree Maker (Previous Emperor)

## 2. UI / UX Component Development
- [x] **Navigation & Footer**: Create a global `<Navbar>` (with mobile hamburger menu) and `<Footer>`.
- [x] **ID Card Component**: Rebuild the dynamic `<IdCard>` component to display character stats (Codename, Race, Age, Origin, Status) aesthetically on the detail pages.
- [x] **Lore Accordions**: Build expandable `<Accordion>` or `<Tabs>` components for deep lore sections so the pages don't become text walls.
- [x] **Modal Image Viewer**: Implement a `<dialog>` based image viewer for character portraits.

## 3. Thematic Polish
- [x] Ensure the markdown prose (`prose-invert`) perfectly aligns with the character themes.
- [x] Implement View Transitions for smooth page loads between characters and the hub.

## 4. Final Review
- [x] Mobile Responsiveness: Verify that `<Navbar>`, `<Footer>`, and `<IdCard>` scale down perfectly on mobile screens.
- [x] Lore Verification: Double check the lore text rendering of "Tale of Lucifer" and "The Tree Maker" against the original to guarantee nothing was lost.
- [ ] Run final production build (`npm run build`) to ensure 0 errors.
- [ ] **Commit and Push to GitHub** (Do not push until all the above is completed).
