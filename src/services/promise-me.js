export async function getPinballMachines() {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');

  const data = await resp.json();
  console.log(data);
  return data;
}
/**
 * TODO:
 */

export const fetchPinballMachines = () => {
  return fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((pinballData) => {
      const { results } = pinballData;
      console.log(pinballData);
      return pinballData;
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
