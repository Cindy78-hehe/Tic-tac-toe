import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Tic-Tac-Toe</h1>
          <p className="text-gray-500 mt-1 text-sm">Sign in to play</p>
        </div>

        {/* Form */}
        <form 
        onSubmit = {() => navigate ("/Index")}
        className="flex flex-col gap-4">

          {/* Username field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Password field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Login button */}
          <button
        
  type="submit"
  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg text-sm transition-colors duration-200"
>
  Login
</button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-gray-500">
          No account?{' '}
          <span onClick = {() => navigate ("/Register")}className="text-teal-600 font-medium cursor-pointer hover:underline">
            Create one
          </span>
        </p>

      </div>
    </div>
  )
}

export default LoginPage