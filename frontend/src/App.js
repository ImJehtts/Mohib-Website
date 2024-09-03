import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import School from './components/School/School'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <School/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
