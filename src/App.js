import { Bio, Gallery, Navbar, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Bio />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default App;
