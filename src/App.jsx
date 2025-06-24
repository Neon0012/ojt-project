import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import './styles/Pages.css';
import AdmissionPage from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";

const App = () => {
  
    return(
          <Router>
            <div className="window">
            <div className="content">
            <Routes>
              
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/courses" element={<CoursesPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
            </Routes>
          
          <ChatbotComponent/>
           </div>
          <Footer/>
          </div>
        </Router> 
        
    )
}

export default App;