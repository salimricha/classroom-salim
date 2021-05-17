
import Header from './components/header/Header';

import CheckBox from './components/checkbox/CheckBox';

import Input from './components/input-with-image/input';
import './App.css';
import ContinueWithGoogle from "./components/mahmoud/ContinueWithGoogle";
import ContinueWithFacebook from "./components/mahmoud/ContinueWithFacebook";
import ButtonPrimary from "./components/mahmoud/ButtonPrimary";

function App() {
  return (
    <div>

      <Header />
      
      <section>
        <CheckBox />
      </section>

      <Input />

    </div>
  );
}

export default App;
