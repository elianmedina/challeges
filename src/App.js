import {Counter} from './components/1'
import { Lista } from './components/2';
import './components/challenges.css';
import {GifExpertApp} from './components/GifExpertApp';

function App() {
  return (
    <>
     <hr className="mt-5" />
    <Counter/>
    <hr className="mt-5" />
    <Lista/>
    <hr className="mt-5" />
    <GifExpertApp />

    </>
  )
}

export default App;
