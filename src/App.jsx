import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from "react";
import { Loader } from "./components/Loader";
function App() {
return(
  <Suspense fallback={<Loader/>}> 
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
</Router>
  </Suspense>

);
};

export default App;
