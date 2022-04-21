import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Home from "./Routes/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Git from "./Components/Git";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/" element={<Skills />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<Git />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
