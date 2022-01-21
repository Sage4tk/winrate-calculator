//create a calculator to calculate wins needed to have a 50% winrate.

const calculateWins = (totalMatches, currentWinRate, wantedWinRate = 50) => {

    //validate if winrate is already over the wanted winrate
    if (currentWinRate >= wantedWinRate) {
        return {
            message: `Win percentage is already above ${wantedWinRate};`
        }
    }

    //calculate loss and win
    const wins = parseFloat(((currentWinRate / 100) * totalMatches).toFixed(2));
    const loses = totalMatches - wins;

    return {
        message: `You need ${parseFloat((loses - wins).toFixed(2))} to have a ${wantedWinRate}% win rate`,
        numberTW: parseFloat((loses - wins).toFixed(2)),
        wins: wins,
        loses: loses
    };
}

console.log(calculateWins(152, 40))