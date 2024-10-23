import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";



function HomePage(){
  return(
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
    
    
      <Footer></Footer>
    </div>
  );
}

export default HomePage;