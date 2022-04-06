import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Home from "./Routes/Home";
import Skills from "./Components/Skills";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
