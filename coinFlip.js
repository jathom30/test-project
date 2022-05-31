// Result of a coin flip
// Coin state: # of times heads/tails, # of flips

let totalFlips = 0
let resultOfHeads = 0
let resultOfTails = 0

const coin = document.getElementById('coin')
const results = document.getElementById('results')
const input = document.getElementById('number-of-flips')

const paintResults = () => {
  const localFlips = localStorage.getItem('totalFlips')
  const localHeads = localStorage.getItem('resultOfHeads')
  const localTails = localStorage.getItem('resultOfTails')
  const localSide = localStorage.getItem('side')
  
  coin.innerHTML = localSide ?? 'Flip'

  const ratio = Math.round(localHeads / localFlips * 100)
  const displayRatio = isNaN(ratio) ? 0 : ratio

  results.innerHTML = `
    <p class="space-between">Heads: <span>${localHeads ?? 0}</span></p>
    <p class="space-between">Tails: <span>${localTails ?? 0}</span></p>
    <p class="space-between">Total flips: <span>${localFlips ?? 0}</span></p>
    <p class="space-between">Percentage heads: <span>${displayRatio}%</span></p>
  `
}

paintResults()

const flipCoin = () => {
  const side = Math.random() < 0.5 ? 'Heads' : 'Tails'
  localStorage.setItem('side', side)
  totalFlips += 1
  localStorage.setItem('totalFlips', totalFlips)
  if (side === 'Heads') {
    resultOfHeads += 1
  } else {
    resultOfTails +=1
  }
  localStorage.setItem('resultOfHeads', resultOfHeads)
  localStorage.setItem('resultOfTails', resultOfTails)

  paintResults()
}

const flipTimesBtn = () => {
  const numberOfFlips = input.value
  // if no flips, return
  if (!numberOfFlips || numberOfFlips < 0) {
    return
  }
  totalFlips = 0
  resultOfHeads = 0
  resultOfTails = 0
  for (let i = 0; i < numberOfFlips; i++) {
    flipCoin()
  }
  
}