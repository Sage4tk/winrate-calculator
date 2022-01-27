//create a calculator to calculate wins needed to have a 50% winrate.

const calculateWins = (totalMatches, currentWinRate, wantedWinRate = 50) => {

    //validate if winrate is already over the wanted winrate
    if (currentWinRate >= wantedWinRate) {
        return {
            message: `Win percentage is already above ${wantedWinRate};`
        }
    }

    //variables
    let wins = parseFloat(((currentWinRate / 100) * totalMatches).toFixed(2));
    let loses = totalMatches - wins;
    const winStatic = wins;

    //if wanted winrate is not equal to 50%
    let neededWins = 0;
    
    while (wins / totalMatches < wantedWinRate / 100) {
        wins++;
        totalMatches++
        neededWins++;
    }

    return {
        message: `You need ${neededWins} wins to have a ${wantedWinRate}% win rate.`,
        numberTW: neededWins,
        wins: winStatic,
        loses: loses
    }
}

console.log(calculateWins(100,48,50))