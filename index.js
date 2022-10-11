diceImages = document.querySelector('.dicesImages')
let newGameBtn = document.querySelector('#newGame')
let rollDiceBtn = document.querySelector("#rollDice")
let holdBtn = document.querySelector("#hold")

let finalScore;
let activePlayer, currentScore;

function init() {
    finalScore = [0, 0]
    activePlayer = 0;
    currentScore = 0
    document.getElementById('pl_0_current_score').textContent = 0
    document.getElementById('pl_0_high_score').textContent = 0
    diceImages.src = `./dice-images/dice-default.png`;
    document.getElementById('pl_1_current_score').textContent = 0
    document.getElementById('pl_1_high_score').textContent = 0

}
init()

newGameBtn.addEventListener('click', () => {
    return init()
})

function switchPlayer() {
    document.getElementById(`player--${activePlayer}`).classList.toggle('active-player')
    finalScore[activePlayer] += Number(document.getElementById(`pl_${activePlayer}_high_score`).textContent);
    document.getElementById(`pl_${activePlayer}_current_score`).textContent = finalScore[activePlayer];
    document.getElementById(`pl_${activePlayer}_high_score`).textContent = 0;
    currentScore = 0

    if (finalScore[activePlayer] >= 100) {
        alert(`Player ${activePlayer} wins the Game...🎖️🎉🎖️🎉`)
        init()
    }

    activePlayer
        = activePlayer === 0 ? 1 : 0;
    document.getElementById(`player--${activePlayer}`).classList.toggle('active-player')
    finalScore[activePlayer] += Number(document.getElementById(`pl_${activePlayer}_high_score`).textContent);
}

rollDiceBtn.addEventListener('click', () => {
    const score = Math.ceil(6 * Math.random())
    diceImages.src = `./dice-images/dice-${score}.png`;

    if (score !== 1) {
        currentScore += score;
        document.getElementById(`pl_${activePlayer}_high_score`).textContent = currentScore;
    } else {
        switchPlayer()
    }
})

holdBtn.addEventListener('click', () => {
    switchPlayer()
})