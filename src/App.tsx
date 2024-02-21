
import './App.css'
import Hero from './components/hero'
import Features from './components/features'
import FeaturesBlocks from './components/features-blocks'
import Testimonials from './components/testimonials'
import Newsletter from './components/newsletter'
import Footer from './components/ui/footer'
import Header from './components/ui/header'

function App() {
  
  return (
    <>
    <Header></Header>
    <Hero /> 
    <Testimonials />
    <FeaturesBlocks />
    <Newsletter />
    <Features />
    <Footer></Footer>
    </>
  )
}

export default App
