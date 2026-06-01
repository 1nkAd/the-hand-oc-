import fs from 'fs';

const htmlPath = 'c:\\the hand\\the_hand_profile.html';
let content = fs.readFileSync(htmlPath, 'utf8');

const links = [
    { title: "The First Great Emperor — The Golden Rain", url: "the-first-emperor.html" },
    { title: "The Second Great Emperor — The Golden Age", url: "the-second-emperor.html" },
    { title: "The Tree Maker — The First Immortal", url: "the-tree-maker.html" },
    { title: "The Fourth Great Emperor — The Fall", url: "the-fourth-emperor.html" },
    { title: "Fie — The Golden Tree", url: "fie.html" },
    { title: "Lezmyon — The First Executioner", url: "lezmyon.html" },
    { title: "Ink — The Blind Executioner", url: "ink.html" },
    { title: "Linksia — The Puppet Executioner", url: "linksia.html" },
    { title: "Nour — The Perfect Creation", url: "nour.html" },
    { title: "Ahmed — The Anomaly", url: "ahmed.html" },
    { title: "Ayman — The Last Stand", url: "ayman.html" },
    { title: "Gabriel — The Guardian", url: "gabriel.html" },
    { title: "Lucifer — The Morning Star", url: "lucifer.html" },
    { title: "Messiah — The False Savior", url: "messiah.html" },
    { title: "Satanail — The First Fallen", url: "satanail.html" }
];

const linkStyle = "display:block; margin-top: 15px; color: var(--accent-primary); border-bottom: 1px solid var(--accent-primary); padding-bottom: 2px; text-decoration: none; transition: opacity 0.3s; width: max-content; font-size: 0.9rem; font-family: var(--font-sans); letter-spacing: 1px;";
const hoverAttr = "onmouseover=\"this.style.opacity='0.7'\" onmouseout=\"this.style.opacity='1'\"";

for (const link of links) {
    if (content.includes(link.title) && !content.includes(link.url)) {
        // Find the block containing this title. We'll find the next closing </div> for the narrative text, or we can just inject it before the last </div> of that section.
        // Actually, the structure is usually <div class="emp-card"> ... title ... <p>...</p> </div>
        // Let's find the index of the title.
        const titleIdx = content.indexOf(link.title);
        
        // Find the next </div> that closes the card, which is probably a bit tricky.
        // Instead, let's look for the next </p> or the end of the text.
        // Another way is to just replace the title text? No.
        
        // Let's just find the first </p> after the title, but what if there are multiple paragraphs?
        // Let's find the next <div class="emp-card"> or </section> and insert right before it?
        
        // A safer way: The text usually ends before a </div> that is followed by another <div class="emp-card"> or something similar.
        
        console.log(`Need to inject ${link.url} for ${link.title}`);
    }
}

// Special case for Tale of Lucifer
if (!content.includes("tale_of_lucifer.html")) {
    const taleTitle = "Tale of Lucifer (The True Origin)";
    if (content.includes(taleTitle)) {
         console.log("Need to inject tale_of_lucifer.html");
    }
}

// Since structure varies, let's just do targeted replacements manually for safety if script is too risky.
// Wait, I can just use regex to find the closing div of the card.
