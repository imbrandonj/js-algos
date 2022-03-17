// Two functions
// Fahrenheit to Celsius
// Celsius to Fahrenheit
// Round to nearest tenth decimal

const ftoc = function(temp) {
  let celsius = (temp - 32) / 1.8;
  celsius = (Math.round(celsius * 10)) / 10;
  return celsius 

};

const ctof = function(temp) {
  let fahrenheit = temp * 1.8 + 32;
  fahrenheit = (Math.round(fahrenheit * 10)) / 10;
  return fahrenheit;

};

