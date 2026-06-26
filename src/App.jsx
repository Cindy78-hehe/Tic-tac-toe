import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import Register from './Register'
import Index from './Index'
import CreateRoom from './CreateRoom'
import SymbolPick from './SymbolPick'
import Game from './Game'
import History from './History'
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<LoginPage />} />
    <Route path = "/register" element = {<Register/>} />
    <Route path = "/index" element = {<Index />} />
    <Route path = "/create-room" element = {<CreateRoom />} />
    <Route path = "/symbolPick" element = {<SymbolPick />} />
    <Route path = "/game" element = {<Game />} />
    <Route path = "/history" element = {<History />} />
  </Routes>
  
  </BrowserRouter>

  );
}
export default App