import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/navbar/Navbar';

import Footer from './component/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/frontend-portfolio/" element={<Home />} />
          <Route path="/frontend-portfolio/projects" element={<Projects />} />
          <Route path="/frontend-portfolio/project/:id" element={<Project />} />
          <Route path="/frontend-portfolio/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
