const mmBoard = document.querySelector('#mmBoard')

// GET COLOR PEGS

const pegs = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

const red = document.querySelector('#red')
const orange = document.querySelector('#orange')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const purple = document.querySelector('#purple')

// GET PEG HOLES AND ASSIGN TO ROWS

const a1 = document.querySelector('#a1')
const a2 = document.querySelector('#a2')
const a3 = document.querySelector('#a3')
const a4 = document.querySelector('#a4')
let rowA = [a1, a2, a3, a4]
const playRowABtn = document.querySelector('#playRowA')
const overRowABtn = document.querySelector('#overRowA')

const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const b4 = document.querySelector('#b4')
let rowB = [b1, b2, b3, b4]
const playRowBBtn = document.querySelector('#playRowB')
const overRowBBtn = document.querySelector('#overRowB')

const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const c4 = document.querySelector('#c4')
let rowC = [c1, c2, c3, c4]
const playRowCBtn = document.querySelector('#playRowC')
const overRowCBtn = document.querySelector('#overRowC')

const d1 = document.querySelector('#d1')
const d2 = document.querySelector('#d2')
const d3 = document.querySelector('#d3')
const d4 = document.querySelector('#d4')
let rowD = [d1, d2, d3, d4]
const playRowDBtn = document.querySelector('#playRowD')
const overRowDBtn = document.querySelector('#overRowD')

const e1 = document.querySelector('#e1')
const e2 = document.querySelector('#e2')
const e3 = document.querySelector('#e3')
const e4 = document.querySelector('#e4')
let rowE = [e1, e2, e3, e4]
const playRowEBtn = document.querySelector('#playRowE')
const overRowEBtn = document.querySelector('#overRowE')

const f1 = document.querySelector('#f1')
const f2 = document.querySelector('#f2')
const f3 = document.querySelector('#f3')
const f4 = document.querySelector('#f4')
let rowF = [f1, f2, f3, f4]
const playRowFBtn = document.querySelector('#playRowF')
const overRowFBtn = document.querySelector('#overRowF')

const g1 = document.querySelector('#g1')
const g2 = document.querySelector('#g2')
const g3 = document.querySelector('#g3')
const g4 = document.querySelector('#g4')
let rowG = [g1, g2, g3, g4]
const playRowGBtn = document.querySelector('#playRowG')
const overRowGBtn = document.querySelector('#overRowG')

const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')
const h3 = document.querySelector('#h3')
const h4 = document.querySelector('#h4')
let rowH = [h1, h2, h3, h4]
const playRowHBtn = document.querySelector('#playRowH')
const overRowHBtn = document.querySelector('#overRowH')

const allRows = [rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH]

// GET RESULT HOLES

const outputA1 = document.querySelector('#resultA1')
const outputA2 = document.querySelector('#resultA2')
const outputA3 = document.querySelector('#resultA3')
const outputA4 = document.querySelector('#resultA4')
let rowAOutput = [outputA1, outputA2, outputA3, outputA4]

const outputB1 = document.querySelector('#resultB1')
const outputB2 = document.querySelector('#resultB2')
const outputB3 = document.querySelector('#resultB3')
const outputB4 = document.querySelector('#resultB4')
let rowBOutput = [outputB1, outputB2, outputB3, outputB4]

const outputC1 = document.querySelector('#resultC1')
const outputC2 = document.querySelector('#resultC2')
const outputC3 = document.querySelector('#resultC3')
const outputC4 = document.querySelector('#resultC4')
let rowCOutput = [outputC1, outputC2, outputC3, outputC4]

const outputD1 = document.querySelector('#resultD1')
const outputD2 = document.querySelector('#resultD2')
const outputD3 = document.querySelector('#resultD3')
const outputD4 = document.querySelector('#resultD4')
let rowDOutput = [outputD1, outputD2, outputD3, outputD4]

const outputE1 = document.querySelector('#resultE1')
const outputE2 = document.querySelector('#resultE2')
const outputE3 = document.querySelector('#resultE3')
const outputE4 = document.querySelector('#resultE4')
let rowEOutput = [outputE1, outputE2, outputE3, outputE4]

const outputF1 = document.querySelector('#resultF1')
const outputF2 = document.querySelector('#resultF2')
const outputF3 = document.querySelector('#resultF3')
const outputF4 = document.querySelector('#resultF4')
let rowFOutput = [outputF1, outputF2, outputF3, outputF4]

const outputG1 = document.querySelector('#resultG1')
const outputG2 = document.querySelector('#resultG2')
const outputG3 = document.querySelector('#resultG3')
const outputG4 = document.querySelector('#resultG4')
let rowGOutput = [outputG1, outputG2, outputG3, outputG4]

const outputH1 = document.querySelector('#resultH1')
const outputH2 = document.querySelector('#resultH2')
const outputH3 = document.querySelector('#resultH3')
const outputH4 = document.querySelector('#resultH4')
let rowHOutput = [outputH1, outputH2, outputH3, outputH4]

const allOutputs = [
	rowAOutput,
	rowBOutput,
	rowCOutput,
	rowDOutput,
	rowEOutput,
	rowFOutput,
	rowGOutput,
	rowHOutput,
]

const codePeg1 = document.querySelector('#code1')
const codePeg2 = document.querySelector('#code2')
const codePeg3 = document.querySelector('#code3')
const codePeg4 = document.querySelector('#code4')
let allCodePegs = [codePeg1, codePeg2, codePeg3, codePeg4]

const scoreBox = document.querySelector('.mm-score-box')
const winsOutput = document.querySelector('#wins')
const lossesOutput = document.querySelector('#losses')

const startBtn = document.querySelector('#startBtn')

const activeHoleColor = 'rgb(75, 64, 53)'
const pegBorderTop = '5px solid rgba(255, 255, 255, 0.7)'
const pegBorderLeft = '5px solid rgba(255, 255, 255, 0.5)'
const pegBorderRight = '5px solid rgba(0, 0, 0, 0.2)'
const pegBorderBottom = '5px solid rgba(0, 0, 0, 0.4)'
const boxShadow = '5px 5px 8px rgba(0, 0, 0, 0.4)'

const inactiveHoleColor = 'rgb(110, 95, 80)'
const holeBorderTop = '5px solid rgb(139, 113, 79)'
const holeBorderLeft = '5px solid rgb(173, 146, 110)'
const holeBorderRight = '5px solid rgb(224, 193, 153)'
const holeBorderBottom = '5px solid rgb(245, 215, 176)'

// TEMPORARY OUTPUTS TO HTML FOR DEBUGGING
// ALSO COMMENT IN/OUT LINE 256
//const codeOutput = document.querySelector('#code');

const selectPeg = (e) => {
	currentPeg = e.target.id
	currentPegIndex = pegs.indexOf(currentPeg)
}

const resetPeg = () => {
	currentPeg = ''
	currentPegIndex = pegs.indexOf(currentPeg)
}

// GET COLOR ID OF SELECTED PEG AND CHANGE SELECTED HOLE TO THAT COLOR

const changeColor = (e) => {
	if (pegs.indexOf(currentPeg) >= 0) {
		e.target.style.backgroundColor = pegs[currentPegIndex]
		e.target.style.borderTop = pegBorderTop
		e.target.style.borderLeft = pegBorderLeft
		e.target.style.borderRight = pegBorderRight
		e.target.style.borderBottom = pegBorderBottom
		e.target.style.boxShadow = boxShadow
		resetPeg()
	}
	// SHOW RESULT BUTTON WHEN ALL HOLES ARE FILLED
	holesFilled = 0
	pegs.forEach((color) => {
		activeRow.forEach((hole) => {
			hole = hole.style.backgroundColor
			if (color === hole) {
				holesFilled++
			}
		})
	})
	if (holesFilled === 4) {
		activeResultBtn.style.display = 'inline-block'
	}
}

// SET GLOBAL MUTABLE VARIABLES
let wins = 0
let losses = 0
let holesFilled = 0
let code = []
let activeRow
let activeResultBtn
let activeOverBtn
let currentPeg = ''
let currentPegIndex = -1
let rowResult = []

// GET THE PARTY STARTED
const startGame = () => {
	holesFilled = 0
	rowResult = []
	resetCodePegs()
	if (activeOverBtn) {
		activeOverBtn.style.display = 'none'
	}
	startBtn.style.display = 'none'
	scoreBox.style.display = 'inline-block'
	allRows.forEach((row) => {
		resetRow(row)
	})
	allOutputs.forEach((output) => {
		resetRow(output)
	})
	activeRow = rowA
	activeResultBtn = playRowABtn
	activeOverBtn = overRowABtn
	// ACTIVATE COLOR PEGS
	red.addEventListener('focus', selectPeg)
	orange.addEventListener('focus', selectPeg)
	yellow.addEventListener('focus', selectPeg)
	green.addEventListener('focus', selectPeg)
	blue.addEventListener('focus', selectPeg)
	purple.addEventListener('focus', selectPeg)
	// ACTIVATE ROW A --- CLEAR ANY PEGS
	activateRow(rowA)
	// GENERATE CODE FOR PLAYER TO CRACK === ARRAY OF 4 COLORS
	code = []
	for (let i = 0; i < 4; i++) {
		const num = Math.floor(Math.random() * pegs.length)
		color = pegs[num]
		code.push(color)
	}
	//codeOutput.innerHTML = code;
}
startBtn.addEventListener('pointerup', startGame)

const resetCodePegs = () =>
	allCodePegs.forEach((hole) => {
		hole.style.backgroundColor = inactiveHoleColor
		hole.style.color = 'white'
		hole.style.borderTop = holeBorderTop
		hole.style.borderLeft = holeBorderLeft
		hole.style.borderRight = holeBorderRight
		hole.style.borderBottom = holeBorderBottom
		hole.style.boxShadow = 'none'
		hole.removeEventListener('pointerup', changeColor)
	})

// CHECK COMPLETED ROW AGAINST CODE
const compareArrays = (row, code) => {
	// clone both arrays, so originals aren't modified
	let codePegs = code.map((x) => x)
	let rowPegs = row.map((x) => x)
	//GET GREEN PEGS
	for (let k = 0; k < 4; k++) {
		// exact matches at same index,
		if (row[k].style.backgroundColor === code[k]) {
			// make null so gray check skips value
			codePegs[k] = null
			rowPegs[k] = null
			rowResult.push('green')
		} else {
			rowPegs[k] = row[k].style.backgroundColor
		}
	}
	//GET GRAY PEGS
	for (let i = 0; i < 4; i++) {
		// iterate through all 4 rowPegs values by index
		inner: for (let j = 0; j < 4; j++) {
			// check each code peg if not null
			if (rowPegs[i] === codePegs[j] && rowPegs[i] != null) {
				// rowPegs index is null if it had a green match
				rowResult.push('grey')
				codePegs[j] = null // codePeg is made null so it never counts again
				break inner //exit inner loop since you found a match; go to next rowPeg
			}
		}
	}
	rowResult.sort()
}

const activateRow = (row) => {
	row.forEach((hole) => {
		hole.addEventListener('pointerup', changeColor)
		hole.style.backgroundColor = activeHoleColor
	})
}

const deactRow = (row) => {
	row.forEach((hole) => {
		hole.removeEventListener('pointerup', changeColor)
	})
}

const resetRow = (row) => {
	row.forEach((hole) => {
		hole.style.backgroundColor = inactiveHoleColor
		hole.style.borderTop = holeBorderTop
		hole.style.borderLeft = holeBorderLeft
		hole.style.borderRight = holeBorderRight
		hole.style.borderBottom = holeBorderBottom
		hole.style.boxShadow = 'none'
		hole.removeEventListener('pointerup', changeColor)
	})
}

const displayResults = (results, outputs) => {
	holesFilled = 0
	outputs[0].style.backgroundColor = results[0]
	outputs[1].style.backgroundColor = results[1]
	outputs[2].style.backgroundColor = results[2]
	outputs[3].style.backgroundColor = results[3]
	outputs.forEach((output) => {
		if (output.style.backgroundColor === 'grey' || output.style.backgroundColor === 'green') {
			output.style.borderLeft = pegBorderLeft
			output.style.borderTop = pegBorderTop
			output.style.borderRight = pegBorderRight
			output.style.borderBottom = pegBorderBottom
			output.style.boxShadow = boxShadow
			output.style.color = 'rgba(0,0,0,0)'
		}
	})
}

const displayCode = (code, outputs) => {
	outputs[0].style.backgroundColor = code[0]
	outputs[1].style.backgroundColor = code[1]
	outputs[2].style.backgroundColor = code[2]
	outputs[3].style.backgroundColor = code[3]
	outputs.forEach((output) => {
		output.style.borderLeft = pegBorderLeft
		output.style.borderTop = pegBorderTop
		output.style.borderRight = pegBorderRight
		output.style.borderBottom = pegBorderBottom
		output.style.boxShadow = boxShadow
		output.style.color = 'rgba(0,0,0,0)'
	})
}

// DEACTIVATE CURRENT ROW, ACTIVATE NEXT --- GREY + GREEN PEGS --- RESET GLOBAL ROW RESULT ARRAY
const playRow = (thisRow, output, nextRow, nextResultBtn, nextOverBtn) => {
	holesFilled = 0
	const winningResult = ['green', 'green', 'green', 'green']
	compareArrays(thisRow, code)
	displayResults(rowResult, output)
	deactRow(thisRow)
	console.log(rowResult)
	if (JSON.stringify(rowResult) === JSON.stringify(winningResult)) {
		activeResultBtn.style.display = 'none'
		activeRow = ' '
		activeOverBtn.style.display = 'inline-block'
		activeOverBtn.innerHTML = 'YOU WIN! PLAY AGAIN?'
		activeOverBtn.addEventListener('pointerup', startGame)
		wins++
		winsOutput.innerHTML = wins
		displayCode(code, allCodePegs)
		rowResult = []
		console.log('winner!')
	} else if (thisRow === rowH) {
		activeResultBtn.style.display = 'none'
		activeRow = ' '
		activeOverBtn.style.display = 'inline-block'
		activeOverBtn.innerHTML = 'YOU LOSE! MWAH MWAH'
		activeOverBtn.addEventListener('pointerup', startGame)
		losses++
		lossesOutput.innerHTML = losses
		displayCode(code, allCodePegs)
		rowResult = []
		console.log('loser!')
	} else {
		activeResultBtn.style.display = 'none'
		activeRow = nextRow
		activeResultBtn = nextResultBtn
		activeOverBtn = nextOverBtn
		activateRow(nextRow)
		rowResult = []
	}
}

playRowABtn.addEventListener('pointerup', () => {
	playRow(rowA, rowAOutput, rowB, playRowBBtn, overRowBBtn)
})
playRowBBtn.addEventListener('pointerup', () => {
	playRow(rowB, rowBOutput, rowC, playRowCBtn, overRowCBtn)
})
playRowCBtn.addEventListener('pointerup', () => {
	playRow(rowC, rowCOutput, rowD, playRowDBtn, overRowDBtn)
})
playRowDBtn.addEventListener('pointerup', () => {
	playRow(rowD, rowDOutput, rowE, playRowEBtn, overRowEBtn)
})
playRowEBtn.addEventListener('pointerup', () => {
	playRow(rowE, rowEOutput, rowF, playRowFBtn, overRowFBtn)
})
playRowFBtn.addEventListener('pointerup', () => {
	playRow(rowF, rowFOutput, rowG, playRowGBtn, overRowGBtn)
})
playRowGBtn.addEventListener('pointerup', () => {
	playRow(rowG, rowGOutput, rowH, playRowHBtn, overRowHBtn)
})
playRowHBtn.addEventListener('pointerup', () => {
	playRow(rowH, rowHOutput)
})
