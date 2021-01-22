import Title from "./components/Title";
import Menu from "./components/Menu";
import Abilities from "./components/Abilities";
import Portfolio from "./components/Portfolio";

const theme = {
  colors: {
    primary: '#945FF5',
    secondary: '#5B21CD',
    tertiary: '#FEFDFE',
    quartenary: '#211D2F'
  }
}

function App() {
  return (
    <div className="App">
      <Menu theme={theme}/>
      <Title theme={theme}/>
      <Abilities theme={theme}/>
      <Portfolio theme={theme}/>
    </div>
  );
}

export default App;
