import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SymbolPick() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const handlePick = (symbol) => {
    setSelected(symbol)
  }

  const handleContinue = () => {
    if (!selected) return
    navigate("/game")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-teal-700">Pick your symbol</h1>
          <p className="text-gray-500 text-sm mt-1">John picks first. Jane gets the other.</p>
        </div>

        {/* Symbol buttons */}
        <div className="flex gap-4 mb-8">

          {/* X button */}
          <button
            onClick={() => handlePick("X")}
            className={`flex-1 py-8 rounded-2xl border-2 text-5xl font-bold transition-all duration-200
              ${selected === "X"
                ? "border-teal-500 bg-teal-50 text-teal-600"
                : "border-gray-200 bg-gray-50 text-gray-400 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-500"
              }`}
          >
            X
          </button>

          {/* O button */}
          <button
            onClick={() => handlePick("O")}
            className={`flex-1 py-8 rounded-2xl border-2 text-5xl font-bold transition-all duration-200
              ${selected === "O"
                ? "border-teal-500 bg-teal-50 text-teal-600"
                : "border-gray-200 bg-gray-50 text-gray-400 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-500"
              }`}
          >
            O
          </button>

        </div>

        {/* Auto assign message */}
        {selected && (
          <div className="bg-teal-50 border border-teal-200 rounded-xl px-4 py-3 text-center mb-6">
            <p className="text-sm text-teal-700">
              You picked <span className="font-bold">{selected}</span> — Jane gets{" "}
              <span className="font-bold">{selected === "X" ? "O" : "X"}</span> automatically
            </p>
          </div>
        )}

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full font-medium py-3 rounded-xl text-sm transition-colors duration-200
            ${selected
              ? "bg-teal-600 hover:bg-teal-700 text-white cursor-pointer"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          {selected ? "Let's play! →" : "Pick a symbol first"}
        </button>

        {/* Back */}
        <p
          onClick={() => navigate("/create-room")}
          className="text-center text-sm text-gray-400 hover:text-gray-600 cursor-pointer mt-6 transition-colors duration-200"
        >
          ← Back
        </p>

      </div>
    </div>
  )
}

export default SymbolPick