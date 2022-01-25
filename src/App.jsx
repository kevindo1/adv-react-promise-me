import { getPinballMachines } from './services/promise-me';

export default function App() {
  getPinballMachines();
  return <h1>Hello World</h1>;
}
