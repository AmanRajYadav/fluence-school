import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Philosophy from './components/Philosophy';
import Values from './components/Values';
import ClassDetails from './components/ClassDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Foreground Content */}
      <main>
        <Header />
        <Hero />
        <Quote />
        <Philosophy />
        <Values />
        <ClassDetails />
        <Footer />
      </main>
    </div>
  );
}

export default App;
