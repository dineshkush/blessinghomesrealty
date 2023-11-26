// import logo from './logo.svg';
import './App.css';
import Footer from './main/footer/Footer';
import Header from './main/header/Header';
import Home from './page/home/Home';
import About from './page/about/About';
import Project from './page/project/Project';
import Contact from './page/contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './shared/scrolltotop/ScrollToTop';

const contactInfo = [
  "Landmark Cyber Park, 3rd Floor, Sector 67, Gurugram, Haryana 122102",
  "+919650000943",
  "vikasbhardwaj2108@gmail.com",
  "https://blessinghomesrealty.in/"
]

const socialMedia = [
  "https://www.facebook.com/blessinghomesrealty1",
  "https://www.instagram.com/blessinghomesrealty/",
]


function App() {

  const [address, phone, email, website] = contactInfo;

  const [facebookLink, instagramLink] = socialMedia;

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Header phone={phone} email={email} facebookLink={facebookLink} instagramLink={instagramLink} />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='about-us' exact element={<About />} />
        <Route path='our-project' exact element={<Project />} />
        <Route path='contact-us' exact element={<Contact phone={phone} email={email} address={address} website={website} />} />
      </Routes>
      <Footer address={address} phone={phone} email={email} />
    </BrowserRouter>
    </>
  );
}

export default App;
