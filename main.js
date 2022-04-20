let convertWeight = function (number, unit) {
    if (number >0 && unit === "kilos") {
         return number * 2.20462;
}else if (number > 0 && unit === "pounds") {
     return number / 2.20462;
}
};
console.log(convertWeight(100, "pounds"));



 Math.roundTo = (number, positions) => {
     const newNumber = Math.pow(10, positions)
     return Math.round(number * newNumber) / newNumber
   }
   
   console.log(Math.roundTo(45.35929094356398, 3)) // 0.235
