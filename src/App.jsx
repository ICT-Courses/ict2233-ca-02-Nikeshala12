import Header from "./components/header";
import Footer from "./components/footer";
import DarkToggle from "./components/darktoggle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectPage from './pages/projects';
import ContactPage from './pages/contact';
import NotFound from './pages/notfound';


function App() {
  return (
    <Router>
        <DarkToggle />
      <Header />
      <main className="bg-white dark:bg-gray-900 transition-colors min-h-screen">
        <Routes>
           <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage/>} />

            <Route path="*" element={<NotFound />} />
            

        </Routes>
       
      </main>
      <Footer />
    </Router>
  );
}

export default App;
