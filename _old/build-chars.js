const fs = require('fs');
const baseHtml = fs.readFileSync('c:\\\\the hand\\\\the-tree-maker.html', 'utf-8');

// The Second Emperor
let secondHtml = baseHtml;
secondHtml = secondHtml.replace(/THE TREE MAKER/g, 'THE SECOND EMPEROR');
secondHtml = secondHtml.replace(/The Tree Maker/g, 'The Second Emperor');
secondHtml = secondHtml.replace(/<body data-theme="tree">/, '<body data-theme="golden">');
secondHtml = secondHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `He inherited the spark, and built an empire of light.`);
secondHtml = secondHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"The Golden Age. The Expanders of Truth."`);

secondHtml = secondHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">The Second Great Emperor</div>`);
secondHtml = secondHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Deceased. His legacy is the empire he built, now ruined.`);

secondHtml = secondHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Golden Age</h2>`);
secondHtml = secondHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Apex of Civilization</h3>`);
secondHtml = secondHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `The Second Emperor took the First Emperor's vision and accelerated it. Under his rule, the Muqadas became a cosmic superpower. Science, philosophy, and power were all mastered during this era.`);
secondHtml = secondHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `His reign was one of unchecked expansion. But with such rapid growth came enemies. It was during the Golden Age that the cosmic entities began to notice the Muqadas, laying the groundwork for their eventual destruction.`);

secondHtml = secondHtml.replace(`The Emperor's Title`, `The Expander`);
secondHtml = secondHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `He ruled the Muqadas during their peak. His hands were tied to creation and societal advancement, pushing the boundaries of what was possible.`);
secondHtml = secondHtml.replace(`The Wipe`, `The Legacy of Light`);
secondHtml = secondHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `His Golden Age was not meant to last forever, but the knowledge accumulated during his time was so vast that it directly inspired the Third Emperor to build the Trees to store it.`);
secondHtml = secondHtml.replace(`Golden Blood`, `The Burden of Growth`);
secondHtml = secondHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `He realized too late that a flame that burns twice as bright burns half as long. His era was the brightest the Muqadas ever saw.`);

fs.writeFileSync('c:\\\\the hand\\\\the-second-emperor.html', secondHtml);


// Lezmyon
let lezmyonHtml = baseHtml;
lezmyonHtml = lezmyonHtml.replace(/THE TREE MAKER/g, 'LEZMYON');
lezmyonHtml = lezmyonHtml.replace(/The Tree Maker/g, 'Lezmyon');
lezmyonHtml = lezmyonHtml.replace(/<body data-theme="tree">/, '<body data-theme="blood">');
lezmyonHtml = lezmyonHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `A primordial entity of ruin. He does not create. He only consumes.`);
lezmyonHtml = lezmyonHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"The Betrayer. The Burner of Trees."`);

lezmyonHtml = lezmyonHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">Primordial Entity of Ruin</div>`);
lezmyonHtml = lezmyonHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Active. A roaming force of cosmic annihilation.`);
lezmyonHtml = lezmyonHtml.replace(`Muqadas (extinct)`, `Primordial`);

lezmyonHtml = lezmyonHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">The Betrayal</h2>`);
lezmyonHtml = lezmyonHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Burning of the Tree</h3>`);
lezmyonHtml = lezmyonHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `Lezmyon is a force born from a single drop of blood. He is the antithesis of Ink. Where Ink creates, Lezmyon destroys.`);
lezmyonHtml = lezmyonHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `He was responsible for the ultimate destruction of the Golden Archive. By burning the Tree, he erased billions of years of accumulated Muqadas knowledge, forcing Adham to become the last remaining backup of their legacy.`);

lezmyonHtml = lezmyonHtml.replace(`The Emperor's Title`, `The Nature of Ruin`);
lezmyonHtml = lezmyonHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `He is not a person in the traditional sense, but an inevitable consequence of the universe's mechanics. He embodies betrayal and the erasure of history.`);
lezmyonHtml = lezmyonHtml.replace(`The Wipe`, `The Cosmic Balance`);
lezmyonHtml = lezmyonHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `In a universe with a being of pure creation (Ink), a being of pure destruction was necessitated. Lezmyon represents the void that hungers to reclaim all that the Muqadas built.`);
lezmyonHtml = lezmyonHtml.replace(`Golden Blood`, `The Eternal Hunt`);
lezmyonHtml = lezmyonHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `He is the most dangerous entity in the cosmos, constantly seeking to finish the job he started by hunting down the last remnants of the Muqadas bloodline.`);

fs.writeFileSync('c:\\\\the hand\\\\lezmyon.html', lezmyonHtml);

// Ink
let inkHtml = baseHtml;
inkHtml = inkHtml.replace(/THE TREE MAKER/g, 'INK');
inkHtml = inkHtml.replace(/The Tree Maker/g, 'Ink');
inkHtml = inkHtml.replace(/<body data-theme="tree">/, '<body data-theme="cosmic">');
inkHtml = inkHtml.replace(`He built the archive of eternity, then walked back into its branches.`, `The primordial entity of creation. The vessel of Golden Blood.`);
inkHtml = inkHtml.replace(`"The Previous Emperor. The Architect of the Archives."`, `"The First Creator. The Bearer of the Legacy."`);

inkHtml = inkHtml.replace(`<div class="id-card__value">The Previous Emperor / Architect of the Archives</div>`, `<div class="id-card__value">Primordial Entity of Creation</div>`);
inkHtml = inkHtml.replace(`Unknown — Walked back into the branches of the Tree. Lost immortality after the Wipe.`, `Active. Wandering the multiverse.`);
inkHtml = inkHtml.replace(`Muqadas (extinct)`, `Primordial`);

inkHtml = inkHtml.replace(`<h2 class="section__label">The Tree</h2>`, `<h2 class="section__label">Creation</h2>`);
inkHtml = inkHtml.replace(`<h3 class="narrative__title">The Golden Archive</h3>`, `<h3 class="narrative__title">The Burden of Golden Blood</h3>`);
inkHtml = inkHtml.replace(`A massive, golden, glowing tree of unknown location. He built it to store knowledge itself — everything every <span class="lore-term" data-tooltip="An extinct, ancient spacefaring race. Each member was born with a specific numbered hand.">Muqadas</span> Emperor ever learned across all of time.`, `Ink is a primordial entity dedicated entirely to the act of creation. It is the direct opposite of Lezmyon. To protect it from destruction, the Tree Maker gifted Ink the Golden Blood.`);
inkHtml = inkHtml.replace(`The Tree's mission was cosmic: a force intending to give every universe a genuine chance at a better life. But beneath the visible wars of the universe was a single directive from an unnamed god: destroy the Muqadas, and destroy the Tree. It was ultimately burned by <span class="lore-term" data-tooltip="The Betrayer. A primordial entity of ruin born from a drop of blood.">Lezmyon</span>, and all that knowledge was lost.`, `The Golden Blood ensures that Ink can regenerate and survive almost any assault. It carries the regenerative legacy of the Muqadas within its veins, acting as a living memorial to the extinct race.`);

inkHtml = inkHtml.replace(`The Emperor's Title`, `The Nature of Creation`);
inkHtml = inkHtml.replace(`He was the man who emerged from the Tree as the Previous Emperor of the Muqadas. He held the most hands among his race at the time, earning him the Emperor title and its associated immortality.`, `Ink creates instinctively. Its entire existence revolves around breathing life into new realities and crafting new universes.`);
inkHtml = inkHtml.replace(`The Wipe`, `The Endless War`);
inkHtml = inkHtml.replace(`When the Wipe came and hands began consolidating, the title eventually shifted away from him. He is no longer Emperor, no longer immortal.`, `Ink is locked in an eternal, cosmic struggle with Lezmyon. Whatever Ink creates, Lezmyon seeks to burn.`);
inkHtml = inkHtml.replace(`Golden Blood`, `The Gift`);
inkHtml = inkHtml.replace(`He gave <span class="lore-term" data-tooltip="A legendary, exponentially scaling power system born from a single drop of golden rain.">Golden Blood</span> to Ink, ensuring the primordial entity of creation would carry the regenerative legacy of the Muqadas.`, `The gift from the Tree Maker was not just for survival, but a symbol of hope. The Muqadas believed that as long as Ink lived, their vision of a better multiverse would never truly die.`);

fs.writeFileSync('c:\\\\the hand\\\\ink.html', inkHtml);

console.log('Characters generated!');
