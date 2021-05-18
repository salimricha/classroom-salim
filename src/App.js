
import Header from './components/header/Header';

import CheckBox from './components/checkbox/CheckBox';

import Input from './components/input-with-image/input';
import './App.css';
import ContinueWithGoogle from "./components/mahmoud/ContinueWithGoogle";
import ContinueWithFacebook from "./components/mahmoud/ContinueWithFacebook";
import ButtonPrimary from "./components/mahmoud/ButtonPrimary";
import Input2 from './components/input-salim/input2';

function App() {
  return (
    <div>

      <Header />
      
      <section>
        <CheckBox />
      </section>

      <Input />
      <Input2 />

    </div>
  );
}

export default App;
