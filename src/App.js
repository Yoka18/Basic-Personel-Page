import Conteiner from './components/container';
import Socialmedia from './components/social-media'

import './App.css';

function App() {
  return (
    <div className="App">
      <Conteiner
      name="Your Name"
      desc="Description"
      desc2="Description Secondary"
      photo='https://i.pinimg.com/474x/0f/c8/a7/0fc8a7b349e7da5b4566bf6967b3a9d6.jpg'
      />

      <Socialmedia/>
    </div>
  );
}

export default App;
