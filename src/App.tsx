import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";


const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Achievements = lazy(() => import("./pages/achievements"));
const Engagements = lazy(() => import("./pages/engagements"));
const Media = lazy(() => import("./pages/media"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/milestones" element={<Achievements />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;