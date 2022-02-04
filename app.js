//create a calculator to calculate wins needed to have a 50% winrate.
const calculateWins = (totalMatches, currentWinRate, wantedWinRate = 50) => {

    //validate if winrate is already over the wanted winrate
    if (currentWinRate >= wantedWinRate) {
        return {
            message: `Win percentage is already above ${wantedWinRate}`
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

//if already calculated before checker
let calculated = false;

//input from html
document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();

    

    //parse inputs
    const parseTm = parseInt(document.querySelectorAll("input")[0].value);
    const parseCWR = parseInt(document.querySelectorAll("input")[1].value);
    const parseWWR = parseInt(document.querySelectorAll("input")[2].value);

    //display dom variables
    const explanation = document.querySelector(".explanation");
    const removeContainer = document.querySelector(".bar-container");

    //remove explantion display
    if (!calculated) {
        explanation.remove();
    }
    

    //validate inputs
    if (typeof(parseTm) !== "number" || (typeof(parseCWR) !== "number" || typeof(parseWWR) !== "number")) {
        window.alert("Not a number.")
    } else {
        // document.querySelector('.visuals').innerHTML = calculateWins(parseTm, parseCWR, parseWWR?parseWWR:50).message;
        //check if calculated else just change width of visuals

        //target element
        const targetVisualizer = document.querySelector(".visuals");
        const removePreviousElement = document.querySelector(".bar-container");

        //remove prev bar
        if (calculated) {
            removePreviousElement.remove();
        }

        //visualizers

        //elements
        const barContainer = document.createElement("div");
        barContainer.className = "bar-container";
        targetVisualizer.appendChild(barContainer);

        const insideContainer = document.createElement("div");
        insideContainer.className = "inside-container";
        insideContainer.style.width = parseCWR + "%";
        barContainer.appendChild(insideContainer);
        

            
        
        

        

        //toggle calculate
        calculated = true;
    }
}