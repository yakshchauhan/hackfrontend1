
import Loginpage from "./pages/Loginpage.jsx";
import Signup from "./pages/Signup.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Loginpage" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
