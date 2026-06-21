const distanceTraveledMiles = [267, 345, 234, 190, 299]
const distanceTraveledKm = distanceTraveledMiles.map(distance => Math.round(distance * 1.6))
console.log(distanceTraveledKm)