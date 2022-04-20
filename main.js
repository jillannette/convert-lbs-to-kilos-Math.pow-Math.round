const convertWeight = function (weight, unit) {
  if (weight > 0 && unit === "kilos") {
  return (weight * 2.20462);
} else if (weight > 0 && unit === "pounds") {
  return (weight / 2.20462);
}
};
console.log(convertWeight(100, "pounds"));


Math.roundTo = function (number, positions) {
  if(!positions){
      positions = 2;
  }
  number = number * Math.pow(10, positions);
  number = Math.round(number);
  number = number / Math.pow(10, positions);
  return number;
};
console.log(Math.roundTo(45.35929094356398, 3));
