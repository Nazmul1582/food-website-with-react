import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(false);
  const changeTheme = () => {
    setLightMode(!lightMode);
  };
  return (
    <ThemeProvider theme={lightMode ? light : dark}>
      <Router>
        <GlobalStyle />
        <Hero changeTheme={changeTheme} lightMode={lightMode} />
        <Products data={productData} heading="Our Popular Delicious Foods" />
        <Feature />
        <Products data={productDataTwo} heading="Sweet Treats for You" />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
