
export function getLocation() {
  return new Promise((res, rej) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      rej('Geolocation is not supported by this browser.');
    }
  });
}

export async function getSunriseSunset({ latitude, longitude }) {
  try {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`);
    return response.json();
  } catch (e) {
    return false;
  }
}
