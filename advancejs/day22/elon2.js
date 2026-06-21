const speedWarning = (speed, limit) => {
    if (speed > limit) {
        return `You are driving at ${speed} above speed limit ${limit}`
    }
}

console.log(speedWarning(30,20))