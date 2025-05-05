import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer';
import Education from './Components/Education/Educations';
import Experience from './Components/Experience/Exp';
import Prjects from './Components/Projects/Projects';
import Certifications from './Components/Certifications/Certifications'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/education' index element={<Education />} />
          <Route path='/Experience' index element={<Experience />} />
          <Route path='/Projects' index element={<Prjects />} />
          <Route path='/Certifications' index element={<Certifications />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
