import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import Register from './Register'
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<LoginPage />}>
    </Route>
  <Route path = "/register" element = {<Register/>}>
    </Route>

  
  </Routes>
  
  </BrowserRouter>

  );
}
export default App