// import logo from './logo.svg';
import './App.css';
import Footer from './main/footer/Footer';
import Header from './main/header/Header';
import Home from './page/home/Home';
import About from './page/about/About';
import Project from './page/project/Project';
import Contact from './page/contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// const contactInfo = [
//   "+919896442289",
//   "info@housemaster.in",
// ]


function App() {

  // const [phone, email] = contactInfo

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='about-us' exact element={<About />} />
        <Route path='our-project' exact element={<Project />} />
        <Route path='contact-us' exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
