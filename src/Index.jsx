import { useNavigate } from "react-router-dom"

function Index() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Welcome */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-teal-700 text-2xl font-bold">J</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Hey, John!</h1>
          <p className="text-gray-500 text-sm mt-1">What do you want to do?</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">

          {/* Create a room */}
          <button
            onClick={() => navigate("/createRoom")}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl text-sm transition-colors duration-200"
          >
            + Create a room
          </button>

          {/* Enter room code */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter room code e.g XK-4829"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
              <button
                onClick={() => navigate("/symbol-pick")}
                className="bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium px-4 rounded-xl text-sm border border-teal-200 transition-colors duration-200"
              >
                Join
              </button>
            </div>
          </div>

          {/* View history */}
          <button
            onClick={() => navigate("/history")}
            className="w-full bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 rounded-xl text-sm border border-gray-200 transition-colors duration-200"
          >
            View history
          </button>

        </div>

        {/* Logout */}
        <p
          onClick={() => navigate("/")}
          className="text-center text-sm text-gray-400 hover:text-red-400 cursor-pointer mt-8 transition-colors duration-200"
        >
          Log out
        </p>

      </div>
    </div>
  );
}

export default Index