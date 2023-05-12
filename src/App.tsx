import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Layout from './components/layout';
import IconSection from './components/icon-section';
import AboutMe from './components/about-me';
import Offer from './components/offer';
import Contact from './components/contact';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <IconSection />
      <AboutMe />
      <Offer />
      <Contact />
    </Layout>
  );
}

export default App;
