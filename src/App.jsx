import { useEffect } from 'react';
import {
  fetchPinballMachines,
  getPinballMachines,
  fetchRickAndMorty,
  getRickAndMorty,
  fetchGenshin,
  getGenshin,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchPinballMachines();
    getPinballMachines();
    fetchRickAndMorty();
    getRickAndMorty();
    fetchGenshin();
    getGenshin();
  });

  return <h1>Hello World</h1>;
}
