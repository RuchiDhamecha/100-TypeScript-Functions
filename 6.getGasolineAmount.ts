function getGasolineAmount(distance, consumptionPer100Km) {
    return ((distance*2) * consumptionPer100Km) /100
}

export { getGasolineAmount };