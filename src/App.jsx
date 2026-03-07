import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Philosophy from './components/Philosophy';
import Values from './components/Values';
import ClassDetails from './components/ClassDetails';

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
      </main>
    </div>
  );
}

export default App;
