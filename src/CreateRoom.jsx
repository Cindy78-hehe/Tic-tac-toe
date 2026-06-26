import { useNavigate } from "react-router-dom"

function CreateRoom() {
  const navigate = useNavigate()
  const roomCode = "XK-4829"

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-teal-700">Create a Room</h1>
          <p className="text-gray-500 text-sm mt-1">Share this code with your friend</p>
        </div>

        {/* Room code box */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center mb-6">
          <p className="text-sm text-teal-600 mb-2">Your room code</p>
          <h2 className="text-4xl font-bold text-teal-700 tracking-widest mb-4">
            {roomCode}
          </h2>
          <button
            onClick={() => navigator.clipboard.writeText(roomCode)}
            className="bg-white border border-teal-300 text-teal-600 text-sm font-medium px-6 py-2 rounded-lg hover:bg-teal-50 transition-colors duration-200"
          >
            Copy code
          </button>
        </div>

        {/* Waiting indicator */}
        <div className="flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-xl py-4 mb-8">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:0.2s]" />
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:0.4s]" />
          <p className="text-sm text-gray-500">Waiting for your friend...</p>
        </div>

        {/* Simulate friend joining — for now */}
        <button
          onClick={() => navigate("/SymbolPick")}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl text-sm transition-colors duration-200"
        >
          Friend joined! Continue →
        </button>

        {/* Back */}
        <p
          onClick={() => navigate("/Index")}
          className="text-center text-sm text-gray-400 hover:text-gray-600 cursor-pointer mt-6 transition-colors duration-200"
        >
          ← Back to home
        </p>

      </div>
    </div>
  );
}

export default CreateRoom