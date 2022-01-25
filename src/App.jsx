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
  });

  return <h1>Hello World</h1>;
}
