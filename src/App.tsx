import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { Home, Converter } from "./pages";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="converter" element={<Converter />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
