
export type PlantType = 
  | 'Aloe Vera' | 'Neem' | 'Green Tea' | 'Tulsi' | 'Citrus Peel'
  | 'Moringa' | 'Hibiscus' | 'Papaya' | 'Ginger' | 'Garlic'
  | 'Turmeric' | 'Eucalyptus' | 'Cinnamon' | 'Grape Seed' | 'Onion Peel' | 'Orange Peel'
  | 'Lavender' | 'Rosemary' | 'Cactus' | 'Bamboo';

export interface SimulationInputs {
  plant: PlantType;
  temperature: number; // in Celsius
  ph: number;
  concentration: number; // in mM
}

export interface SimulationOutputs {
  particleSize: number; // in nm
  reactionRate: number; // arbitrary scale 0-100
  stabilityIndex: number; // arbitrary scale 0-100
  yieldPercentage: number;
  ecoScore: number; // 0-100
  color: string;
  quality: 'Low' | 'Medium' | 'High' | 'Premium';
}

export interface DataPoint {
  temperature?: number;
  ph?: number;
  size?: number;
  concentration?: number;
}
