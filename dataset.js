const traits = ["Child", "Genius", "Zealot", "Academic", "Adventurer", "Businessperson", "Criminal", "Entertainer", "Soldier", "Cultist", "Guild Member", "Politician", "Royalty", "Artist", "Counselor", "Crafter", "Dilettante", "Laborer", "Leader", "Medic", "Merchant", "Driver", "Scholar", "Scientist", "Warrior", "Wizard", "Brigand", "Con Artist", "Torturer", "Rebel", "Crime Lord", "Captain", "Judge", "Thief", "Puppet-Master", "Governor", "King", "Noble", "Priest", "Anarchist", "Conspirator", "Gang Leader", "Interrogator", "Blackmailer", "Burglar", "Shaman", "Tactician", "Prankster", "Assassin", "Busybody", "Heir", "Hunter", "Cult Leader", "Immortal", "Nurse", "Necromancer", "Theater Owner", "Ghost", "Charmer", "Acolyte", "Enforcer", "Relic Hunter", "Loner", "Pirate", "Thug", "Queen", "Recluse", "Pretender", "Former Hero", "Philanthropist", "Mascot", "Benefactor", "Spy", "Hustler", "Prostitute", "Blacksmith", "Guardian", "Librarian", "Miner", "Senator", "Purveyor", "Archivist", "Sculptor", "Patriot", "Widow", "Preacher", "Treasure Hunter", "Successor", "Innkeeper", "Mage", "Hero", "Hedge Wizard", "Farmer", "Visionary", "Bureaucrat", "Negotiator", "Investigator", "Guard", "Wanderer", "Courtier", "Constable", "General", "Sage", "Advisor", "Prodigy", "Warden", "Courier", "Smuggler", "Socialite", "Quartermaster", "Harbormaster", "Debutante", "Actor", "Seamstress", "Performer", "Surgeon", "Freedom Fighter", "Cat Burglar", "Researcher", "Reporter", "Tribesperson", "Veteran", "Healer", "Minstrel", "Spirit", "Apothecary", "Fortune Teller", "Boatman", "Witch", "Carpenter", "Gladiator", "Diviner", "Falconer", "Imposter", "Chosen One", "Lawyer", "Singer", "Fence", "Friar", "Shopkeeper", "Sheriff", "Oracle", "Seer", "Bounty Hunter", "Butler", "Trapfinder", "Weaponsmith", "Privateer", "Explorer", "Dancer", "Knight", "Prince(ss)", "Scout", "Silversmith", "Nun", "Financier", "Broker", "Patron", "Prophet"];
const keywords = ["Hideous", "Humorous", "Impoverished", "Mysterious", "Notorious", "Power Hungry", "Saintly", "Wealthy", "Genius", "Eccentric", "Famous", "Focal", "Primal", "Religious", "Charming", "Abhorrent", "Aggressive", "Ancient", "Magical", "Beautiful", "Outdoors", "Academic", "Ambitious", "Stealthy", "Anxious", "Arrogant", "Bitter", "Bloodthirsty", "Blunt", "Bold", "Brilliant", "Calculating", "Callous", "Capricious", "Cautious", "Clever", "Corrupt", "Cowardly", "Cunning", "Curious", "Defiant", "Devoted", "Disturbed", "Dogmatic", "Enigmatic", "Fair", "Foolish", "Fussy", "Garrulous", "Greedy", "Grim", "Hedonistic", "Honorable", "Hotheaded", "Humble", "Idealistic", "Ignorant", "Impish", "Impressionable", "Incompetent", "Intense", "Intimidating", "Jaded", "Jovial", "Judgmental", "Kind", "Kinky", "Lecherous", "Lively", "Macho", "Mean", "Mild", "Miserly", "Naïve", "Noble", "Nonconformist", "Nosy", "Obedient", "Oblivious", "Oily", "Optimistic", "Passionate", "Pessimistic", "Philosophical", "Poised", "Proud", "Quaint", "Quiet", "Rakish", "Rebellious", "Remorseful", "Ruthless", "Scheming", "Sensuous", "Shady", "Sly", "Tactless", "Tough", "Unlucky", "Unpredictable", "Unscrupulous", "Weak-Willed", "Weird", "Wise"];
const sexuality = ["Straight", "Gay", "Bisexual", "Asexual"];
const gender = ["Male", "Female", "Non-Binary"];
const relationship = ["Married", "Single", "In a Relationship"];

// Helper function to get valid sexualities based on gender
function getValidSexuality(selectedGender) {
  if (selectedGender === "Non-Binary") {
    // Non-binary can be Straight, Bisexual, or Asexual
    return ["Straight", "Bisexual", "Asexual"];
  }
  return sexuality; // Male and Female can be any sexuality
}

// Helper function to format sexuality based on gender
function formatSexuality(selectedSexuality, selectedGender) {
  if (selectedSexuality === "Gay" && selectedGender === "Female") {
    return "Lesbian";
  }
  return selectedSexuality;
}
