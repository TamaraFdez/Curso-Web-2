import { getRandomFact } from '../services/fact.js';
import { useState, useEffect } from 'react';

export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  //para recuperar la cita
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
