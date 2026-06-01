const fs = require('fs');

const baseHtml = fs.readFileSync('c:\\\\the hand\\\\the-tree-maker.html', 'utf-8');

// The First Emperor
let firstHtml = baseHtml;
firstHtml = firstHtml.replace(/THE TREE MAKER/g, 'THE FIRST EMPEROR');
firstHtml = firstHtml.replace(/The Tree Maker/g, 'The First Emperor');
firstHtml = firstHtml.replace(/<body data-theme="tree">/, '<body data-theme="golden">');
firstHtml = firstHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `He stood beneath the golden rain and drank. The universe was never the same.`);
firstHtml = firstHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"The Drinker of Rain. The Beginning of the Muqadas."`);

// Update Identity
firstHtml = firstHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">The First Emperor</div>`);
firstHtml = firstHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Unknown. But his memories remain, waiting beneath a billion years of travel.`);

// Update The Tree section to The Rain
firstHtml = firstHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Rain</h2>`);
firstHtml = firstHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Golden Rain</h3>`);
firstHtml = firstHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `He was there when the golden rain fell. He drank it. From that single drop, the legendary, exponentially scaling power system of Golden Blood was born. He had a vision of what his people could become, sparking the Golden Age of discoveries.`);
firstHtml = firstHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `His vision paved the way for everything the Muqadas would ever achieve. Though he is gone, his legacy lives on in every drop of Golden Blood and every memory stored in the archives.`);

// Update History
firstHtml = firstHtml.replace(`The Emperor's Title`, `The Origin`);
firstHtml = firstHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `He was the first. By drinking the rain, he established the foundation of the Emperor system, the inheritance of hands, and the immortality tied to the title.`);
firstHtml = firstHtml.replace(`The Wipe`, `The Legacy`);
firstHtml = firstHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `His discoveries fueled the Golden Age. He foresaw the need to preserve knowledge, laying the spiritual groundwork for the archives that would eventually become the Trees.`);
firstHtml = firstHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `The blood he ingested became the ultimate catalyst. Now, Adham carries his legacy and, buried deep within, the first Emperor's memories.`);

fs.writeFileSync('c:\\\\the hand\\\\the-first-emperor.html', firstHtml);


// The Fourth Emperor
let fourthHtml = baseHtml;
fourthHtml = fourthHtml.replace(/THE TREE MAKER/g, 'THE FOURTH EMPEROR');
fourthHtml = fourthHtml.replace(/The Tree Maker/g, 'The Fourth Emperor');
fourthHtml = fourthHtml.replace(/<body data-theme="tree">/, '<body data-theme="blood">');
fourthHtml = fourthHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `He built a shield. What it became was something else.`);
fourthHtml = fourthHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"Creator of the god-killing weapon. The Summon."`);

// Update Identity
fourthHtml = fourthHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">The Fourth Great Emperor</div>`);
fourthHtml = fourthHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Deceased. Consumed by the weapon he created to protect his people.`);

// Update The Tree section to The Summon
fourthHtml = fourthHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Summon</h2>`);
fourthHtml = fourthHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Emperor's Summon</h3>`);
fourthHtml = fourthHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `The fourth great Emperor created the Emperor's Summon - a weapon capable of killing gods. It was passed in secret from Emperor to Emperor, never written down.`);
fourthHtml = fourthHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `He created it as the ultimate safeguard for the Muqadas people. He was right about the power. He was wrong about the control. The weapon is a being - or a force wearing the shape of one - that exists outside the normal hierarchy of power.`);

// Update History
fourthHtml = fourthHtml.replace(`The Emperor's Title`, `The Ultimate Safeguard`);
fourthHtml = fourthHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `He designed the Summon to protect the Muqadas against divine threats. It was the single most destructive thing they ever had access to.`);
fourthHtml = fourthHtml.replace(`The Wipe`, `The Betrayal of Control`);
fourthHtml = fourthHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `When it became clear the race was going to lose, the Emperor summoned it. It could not be controlled - this was always known. He summoned it anyway.`);
fourthHtml = fourthHtml.replace(`Golden Blood`, `The Destruction`);
fourthHtml = fourthHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `It destroyed their enemies. It also destroyed the Muqadas. The last Emperor who used it destroyed his own people with it. The four survivors escaped only because they were already gone before it reached them.`);

fs.writeFileSync('c:\\\\the hand\\\\the-fourth-emperor.html', fourthHtml);

console.log('Emperors generated!');
