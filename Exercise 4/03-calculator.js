function calcularPrecioFinal(basePrice, isVIP) {
  let finalPrice;

  if (isVIP) {
    finalPrice = basePrice * 0.9; 
  } else {
    finalPrice = basePrice * 1.21; 
  }

  return {
    originalPrice: basePrice,
    finalPrice: finalPrice
  };
}

const VIPClient = calcularPrecioFinal(20000, true);
const standarClient = calcularPrecioFinal(20000, false);

console.log("Cliente VIP:", VIPClient);
console.log("Cliente Estándar:",standarClient);