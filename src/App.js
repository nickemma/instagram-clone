import { Bio, Gallery, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
    </>
  );
};

export default App;
