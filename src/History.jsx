import { useState } from "react"
import { useNavigate } from "react-router-dom"

function History() {
  const navigate = useNavigate()

  const [history, setHistory] = useState([
    {
      id: 1,
      player1: "John",
      player2: "Jane",
      winner: "John",
      symbol: "X",
      score: "2-1",
      date: "June 24, 2026",
    },
    {
      id: 2,
      player1: "John",
      player2: "Bob",
      winner: "Bob",
      symbol: "O",
      score: "0-2",
      date: "June 23, 2026",
    },
    {
      id: 3,
      player1: "John",
      player2: "Sara",
      winner: "draw",
      symbol: null,
      score: "1-1",
      date: "June 22, 2026",
    },
    {
      id: 4,
      player1: "John",
      player2: "Mike",
      winner: "John",
      symbol: "X",
      score: "2-0",
      date: "June 21, 2026",
    },
  ])

  const getResult = (match) => {
    if (match.winner === "draw") return "draw"
    if (match.winner === match.player1) return "win"
    return "loss"
  }

  const resultStyles = {
    win: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      badge: "bg-teal-100 text-teal-700",
      label: "W",
    },
    loss: {
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "bg-red-100 text-red-600",
      label: "L",
    },
    draw: {
      bg: "bg-gray-50",
      border: "border-gray-200",
      badge: "bg-gray-100 text-gray-500",
      label: "D",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/index")}
            className="text-gray-400 hover:text-teal-600 transition-colors duration-200 text-xl"
          >
            ←
          </button>
          <div>
            <h1 className="text-2xl font-bold text-teal-700">Match History</h1>
            <p className="text-gray-500 text-sm">All your past games</p>
          </div>
        </div>

        {/* Stats summary */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 text-center bg-teal-50 border border-teal-200 rounded-xl py-3">
            <p className="text-2xl font-bold text-teal-600">
              {history.filter(m => getResult(m) === "win").length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Wins</p>
          </div>
          <div className="flex-1 text-center bg-gray-50 border border-gray-200 rounded-xl py-3">
            <p className="text-2xl font-bold text-gray-400">
              {history.filter(m => getResult(m) === "draw").length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Draws</p>
          </div>
          <div className="flex-1 text-center bg-red-50 border border-red-200 rounded-xl py-3">
            <p className="text-2xl font-bold text-red-400">
              {history.filter(m => getResult(m) === "loss").length}
            </p>
            <p className="text-xs text-gray-500 mt-1">Losses</p>
          </div>
        </div>

        {/* Match list */}
        <div className="flex flex-col gap-3">
          {history.map((match) => {
            const result = getResult(match)
            const style = resultStyles[result]

            return (
              <div
                key={match.id}
                className={`${style.bg} border ${style.border} rounded-2xl p-4`}
              >
                <div className="flex items-center justify-between">

                  {/* Left — result badge + players */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${style.badge}`}>
                      {style.label}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {match.player1} vs {match.player2}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{match.date}</p>
                    </div>
                  </div>

                  {/* Right — score + winner */}
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-700">{match.score}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {match.winner === "draw"
                        ? "Draw"
                        : `${match.winner} won`}
                    </p>
                  </div>

                </div>
              </div>
              
            )
          })}
        </div>

        {/* Empty state */}
        {history.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-2">No games yet</p>
            <p className="text-gray-400 text-sm">
              Play your first game to see history here
            </p>
            <button
              onClick={() => navigate("/Index")}
              className="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-2 rounded-xl text-sm transition-colors duration-200"
            >
              Start playing
            </button>
            
            
          </div>
        )}
        <button
  onClick={() => navigate("/index")}
  className="w-full mt-6 bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 rounded-xl text-sm border border-gray-200 transition-colors duration-200"
>
  ← Back to Home
</button>

      </div>
    </div>
  )
}

export default History