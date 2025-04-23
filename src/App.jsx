import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import GameApp from "./game/GameApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";
import { Loader } from "./components/Loader";
function App() {
return(
  <Suspense fallback={<Loader/>}> 
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/game" element={<GameApp/>} />

      {/* <Route path="/home" element={<AppHome/>} /> */}
    </Routes>
</Router>
  </Suspense>

);
};

export default App;
