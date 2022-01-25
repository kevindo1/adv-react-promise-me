export async function getPinballMachines() {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');

  const data = await resp.json();
  console.log(data);
  return data;
}

export const fetchPinballMachines = () => {
  return fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((pinballData) => {
      console.log(pinballData);
      return pinballData;
    });
};

export async function getRickAndMorty() {
  const resp = await fetch('https://rickandmortyapi.com/api/character');

  const data = await resp.json();
  console.log(data.results);
  return data;
}

export const fetchRickAndMorty = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((rickData) => {
      console.log(rickData.results);
      return rickData;
    });
};

export async function getGenshin() {
  const resp = await fetch('https://api.genshin.dev/');

  const data = await resp.json();
  console.log(data.types);
  return data;
}

export const fetchGenshin = () => {
  return fetch('https://api.genshin.dev/')
    .then((data) => data.json())
    .then((genshinData) => {
      console.log(genshinData.types);
      return genshinData.types;
    });
};

/**
 * TODO:
 */
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
