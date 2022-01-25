export async function getPinballMachines() {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');

  const data = await resp.json();
  console.log(data);
  return data;
}
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

/**
 * TODO:
 */
