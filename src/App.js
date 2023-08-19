import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Container } from "./components/index";
import { Header, Footer } from "./sections/index";
import { Home, Profile } from "./Pages/index";

const App = () => {
  return (
    <>
      <Router basename="/Template_React">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="./profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
