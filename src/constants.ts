import { PlantType } from './types';

export const PLANT_PROPERTIES = {
  'Aloe Vera': { reducingPower: 0.8, baseSize: 25, efficiency: 0.85 },
  'Neem': { reducingPower: 0.7, baseSize: 30, efficiency: 0.75 },
  'Green Tea': { reducingPower: 0.95, baseSize: 15, efficiency: 0.92 },
  'Tulsi': { reducingPower: 0.75, baseSize: 28, efficiency: 0.80 },
  'Citrus Peel': { reducingPower: 0.85, baseSize: 20, efficiency: 0.88 },
  'Moringa': { reducingPower: 0.82, baseSize: 22, efficiency: 0.86 },
  'Hibiscus': { reducingPower: 0.78, baseSize: 26, efficiency: 0.82 },
  'Papaya': { reducingPower: 0.72, baseSize: 32, efficiency: 0.78 },
  'Ginger': { reducingPower: 0.88, baseSize: 18, efficiency: 0.90 },
  'Garlic': { reducingPower: 0.84, baseSize: 24, efficiency: 0.84 },
  'Turmeric': { reducingPower: 0.92, baseSize: 12, efficiency: 0.94 },
  'Eucalyptus': { reducingPower: 0.80, baseSize: 30, efficiency: 0.85 },
  'Cinnamon': { reducingPower: 0.90, baseSize: 14, efficiency: 0.91 },
  'Grape Seed': { reducingPower: 0.94, baseSize: 10, efficiency: 0.96 },
  'Onion Peel': { reducingPower: 0.76, baseSize: 28, efficiency: 0.81 },
  'Orange Peel': { reducingPower: 0.86, baseSize: 19, efficiency: 0.89 },
  'Lavender': { reducingPower: 0.74, baseSize: 31, efficiency: 0.79 },
  'Rosemary': { reducingPower: 0.77, baseSize: 29, efficiency: 0.82 },
  'Cactus': { reducingPower: 0.68, baseSize: 35, efficiency: 0.72 },
  'Bamboo': { reducingPower: 0.65, baseSize: 40, efficiency: 0.70 },
};

export const PLANT_DESCRIPTIONS: Record<string, string> = {
  'Aloe Vera': 'Rich in aloesin and lignin, Aloe Vera provides excellent stabilization and produces moderate-sized particles with high biocompatibility.',
  'Neem': 'Contains azadirachtin which acts as an effective capping agent, resulting in stable, antimicrobial nanoparticles.',
  'Green Tea': 'High concentration of polyphenols and catechins enables rapid reduction and high-yield synthesis of small particles.',
  'Tulsi': 'Known for its high antioxidant capacity, it facilitates the formation of uniform spherical nanoparticles with potent bioactivity.',
  'Citrus Peel': 'Abundant in limonene and hesperidin, providing high reducing power and eco-friendly synthesis pathways.',
  'Moringa': 'Contains various proteins and vitamins that promote fast nucleation and prevent particle aggregation.',
  'Hibiscus': 'Rich in anthocyanins and organic acids, which assist in controlling morphology and particle size distribution.',
  'Papaya': 'The presence of papain enzymes assists in both the reduction of silver ions and subsequent stabilization.',
  'Ginger': 'Contains gingerol and shogaol, which are highly effective in producing narrow-sized nanoparticles at room temperature.',
  'Garlic': 'Allicin and other sulfur-containing compounds provide unique stabilizing properties and enhanced antimicrobial activity.',
  'Turmeric': 'Curcuminoids allow for the synthesis of extremely small nanoparticles with exceptional stability and medicinal properties.',
  'Eucalyptus': 'High cineole content facilitates rapid bio-reduction and creates a distinct aroma-stabilized nanoparticle complex.',
  'Cinnamon': 'Cinnamaldehyde acts as a powerful reducing agent, producing high-purity silver nanoparticles with rapid kinetics.',
  'Grape Seed': 'Proanthocyanidins offer one of the highest reducing potentials in nature, ideal for ultra-fine nanoparticle production.',
  'Onion Peel': 'The high quercetin content makes it a cost-effective and powerful source for biogenic silver synthesis.',
  'Orange Peel': 'Abundant citric acid and vitamin C content ensure high yield and monodispersity in the resulting suspension.',
  'Lavender': 'Terpenoids and linalool provide a gentle reduction process, resulting in highly stable, therapeutic-grade particles.',
  'Rosemary': 'Rosmarinic acid and carnosol provide balanced reduction and capping, suitable for agricultural applications.',
  'Cactus': 'Mucilage and organic acids provide a unique viscous environment for controlling large-scale growth of particles.',
  'Bamboo': 'Silica-rich extracts combined with flavonoids provide robust stabilization, creating durable nanoparticle structures.',
};

export const EDUCATIONAL_CONTENT = {
  whatIsIt: "Green synthesis of silver nanoparticles (AgNPs) is an eco-friendly approach that uses biological entities like plant extracts, fungi, or bacteria as reducing and stabilizing agents instead of hazardous chemicals. Plant extracts are preferred due to their easy availability, non-toxicity, and presence of phytochemicals like polyphenols and flavonoids.",
  howItWorks: "1. Extraction: Phytochemicals are extracted from plants. 2. Reduction: Silver ions(Ag+) are reduced to metallic silver(Ag0). 3. Nucleation: Silver atoms cluster to form nuclei. 4. Growth & Stabilization: Nuclei grow into nanoparticles, stabilized by plant biomolecules to prevent clumping.",
  applications: [
    "Antimicrobial agents in medicine",
    "Catalysts in chemical reactions",
    "Biosensors for detecting toxins",
    "Wound dressings and surgical coatings",
    "Environmental remediation (dye degradation)"
  ],
  conclusion: "The green synthesis of silver nanoparticles represents a transformative shift towards sustainable nanotechnology. By harnessing the innate reducing power of nature, we can produce highly stable, functional nanoparticles with minimal environmental footprint. This 'Green Engine' approach not only addresses safety concerns associated with traditional chemical synthesis but also paves the way for cost-effective, large-scale production in biomedical and environmental sectors."
};
