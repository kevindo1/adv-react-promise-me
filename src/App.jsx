import {
  fetchPinballMachines,
  getPinballMachines,
} from './services/promise-me';

export default function App() {
  fetchPinballMachines();
  getPinballMachines();
  return <h1>Hello World</h1>;
}
