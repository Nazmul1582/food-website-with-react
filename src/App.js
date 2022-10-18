import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Hero />
        <Product />
        <Feature />
        <Product />
        <Footer />
      </Router>
    </>
  );
}

export default App;
