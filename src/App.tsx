import './App.scss';
import { GlassEffect } from './components/GlassEffect';
import { Loader } from './components/Loader';

function App() {
  return (
    <>
      <div className="loader-block">
        <Loader />
      </div>
      <div className="glass-block">
        <GlassEffect />
      </div>
    </>
  );
}

export default App;
