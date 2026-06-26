import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Game() {
  const navigate = useNavigate()

  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentTurn, setCurrentTurn] = useState("X")
  const [winner, setWinner] = useState(null)
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })

  const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ]

  const checkWinner = (newBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a]
      }
    }
    if (newBoard.every((cell) => cell !== null)) return "draw"
    return null
  }

  const handleCellClick = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentTurn

    const result = checkWinner(newBoard)

    setBoard(newBoard)

    if (result) {
      setWinner(result)
      if (result === "draw") {
        setScores((prev) => ({ ...prev, draws: prev.draws + 1 }))
      } else {
        setScores((prev) => ({ ...prev, [result]: prev[result] + 1 }))
      }
    } else {
      setCurrentTurn(currentTurn === "X" ? "O" : "X")
    }
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setCurrentTurn("X")
    setWinner(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Players bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 text-center py-2 rounded-xl bg-teal-50 border border-teal-200">
            <p className="text-xs text-gray-500">Player 1</p>
            <p className="text-sm font-bold text-teal-700">John (X)</p>
          </div>
          <p className="text-gray-400 font-bold px-4">vs</p>
          <div className="flex-1 text-center py-2 rounded-xl bg-orange-50 border border-orange-200">
            <p className="text-xs text-gray-500">Player 2</p>
            <p className="text-sm font-bold text-orange-500">Jane (O)</p>
          </div>
        </div>

        {/* Status bar */}
        <div className="text-center mb-6">
          {winner ? (
            <p className="text-lg font-bold text-teal-700">
              {winner === "draw" ? "It's a draw!" : `${winner} wins! 🎉`}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Current turn {" "}
              <span className="font-bold text-teal-600">{currentTurn}</span>
            </p>
          )}
        </div>

        {/* Board */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              className={`h-24 rounded-2xl text-4xl font-bold border-2 transition-all duration-200
                ${cell === "X"
                  ? "border-teal-300 bg-teal-50 text-teal-600"
                  : cell === "O"
                  ? "border-orange-300 bg-orange-50 text-orange-500"
                  : "border-gray-200 bg-gray-50 hover:border-teal-300 hover:bg-teal-50"
                }
                ${winner ? "cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              {cell}
            </button>
          ))}
        </div>

        {/* Scoreboard */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 text-center bg-teal-50 border border-teal-200 rounded-xl py-3">
            <p className="text-xs text-gray-500 mb-1">John (X)</p>
            <p className="text-2xl font-bold text-teal-600">{scores.X}</p>
          </div>
          <div className="flex-1 text-center bg-gray-50 border border-gray-200 rounded-xl py-3">
            <p className="text-xs text-gray-500 mb-1">Draws</p>
            <p className="text-2xl font-bold text-gray-400">{scores.draws}</p>
          </div>
          <div className="flex-1 text-center bg-orange-50 border border-orange-200 rounded-xl py-3">
            <p className="text-xs text-gray-500 mb-1">Jane (O)</p>
            <p className="text-2xl font-bold text-orange-500">{scores.O}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl text-sm transition-colors duration-200"
          >
            New round
          </button>
          <button
            onClick={() => navigate("/Index")}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 rounded-xl text-sm border border-gray-200 transition-colors duration-200"
          >
            Leave room
          </button>
        </div>

      </div>
    </div>
  )
}

export default Game