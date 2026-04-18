import { useState, useMemo } from 'react';
import { SimulationInputs, SimulationOutputs, PlantType } from '../types';
import { PLANT_PROPERTIES } from '../constants';

export function useSimulation() {
  const [inputs, setInputs] = useState<SimulationInputs>({
    plant: 'Green Tea',
    temperature: 50,
    ph: 7,
    concentration: 1,
  });

  const outputs = useMemo<SimulationOutputs>(() => {
    const props = PLANT_PROPERTIES[inputs.plant];
    
    // Size logic: Higher T mostly reduces size, higher pH reduces size, higher Conc increases size.
    // Temperature effect (Size decreases as T increases up to 80, then fluctuates)
    const tEffect = Math.max(0.5, 1.5 - (inputs.temperature / 100));
    // pH effect (Basic pH 8-10 often gives smaller, more stable particles)
    const phEffect = Math.max(0.6, 1.4 - (Math.abs(inputs.ph - 9) / 10));
    // Conc effect (Higher concentration = larger particles due to aggregation)
    const cEffect = Math.sqrt(inputs.concentration);
    
    const size = props.baseSize * tEffect * phEffect * cEffect;

    // Reaction rate: Increases with Temp and pH(basic)
    const rate = Math.min(100, (inputs.temperature * 1.0) + (inputs.ph * 2) * props.reducingPower);

    // Stability: Best at basic pH and moderate temps
    const stability = Math.min(100, (100 - Math.abs(inputs.ph - 9) * 8) * props.efficiency);

    // Yield: Increases with concentration and temp
    const yieldPerc = Math.min(99, (inputs.concentration * 10 + inputs.temperature * 0.5) * props.efficiency);

    // Eco Score calculation
    // Points deduction for high temp (above 25C)
    const energyPenalty = Math.max(0, (inputs.temperature - 25) * 0.5);
    // Points deduction for high concentration
    const resourcePenalty = inputs.concentration * 5;
    // Points deduction for extreme pH
    const phPenalty = Math.abs(inputs.ph - 7) * 4;
    
    const ecoValue = Math.max(0, 100 - energyPenalty - resourcePenalty - phPenalty);

    // Color determination
    let color = '#78350f'; // Dark yellow/brown (typical AgNP)
    if (size < 20) color = '#fef08a'; // Yellow
    else if (size < 40) color = '#fbbf24'; // Amber
    else if (size < 60) color = '#d97706'; // Brown
    else color = '#451a03'; // Dark Brown

    // Quality
    let quality: SimulationOutputs['quality'] = 'Medium';
    if (stability > 85 && size < 30) quality = 'Premium';
    else if (stability > 70 && size < 50) quality = 'High';
    else if (stability < 40) quality = 'Low';

    return {
      particleSize: Number(size.toFixed(2)),
      reactionRate: Number(rate.toFixed(1)),
      stabilityIndex: Number(stability.toFixed(1)),
      yieldPercentage: Number(yieldPerc.toFixed(1)),
      ecoScore: Number(ecoValue.toFixed(0)),
      color,
      quality,
    };
  }, [inputs]);

  return { inputs, setInputs, outputs };
}
