const kelvinToFahrenheit = (kel) => {
  return (kel * 1.8) - 459.67;
}

const kelvinToCelsius = (kel) => {
  return toCelsius(kelvinToFahrenheit(kel));
}

const toCelsius = (far) => {
  return (far - 32) / 1.8;
};

const toFahrenheit = (cel) => {
  return (cel * 1.8) + 32
};

export {
  toCelsius,
  toFahrenheit,
  kelvinToFahrenheit,
  kelvinToCelsius
}