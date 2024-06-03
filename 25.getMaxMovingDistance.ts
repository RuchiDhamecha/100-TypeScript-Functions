function getMaxMovingDistance(budget, weight, cost) {
    const costPerKgKm = cost / (10 * 100); 

 const maxDistance = budget / (weight * costPerKgKm);

 return Math.max(maxDistance, 0);
}

export { getMaxMovingDistance };
