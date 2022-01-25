import { useEffect } from 'react';
import {
  fetchPinballMachines,
  getPinballMachines,
  fetchRickAndMorty,
  getRickAndMorty,
  fetchGenshin,
  getGenshin,
  getNBA,
  fetchNBA,
  getDogFacts,
  fetchDogFacts,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchPinballMachines();
    getPinballMachines();
    fetchRickAndMorty();
    getRickAndMorty();
    fetchGenshin();
    getGenshin();
    fetchNBA();
    getNBA();
    fetchDogFacts();
    getDogFacts();
  });

  return <h1>Hello World</h1>;
}
