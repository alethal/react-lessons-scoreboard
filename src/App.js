import logo from './logo.svg';
import './App.css';
import './scoreboard.css';

{/* usually just use props but trying it out */}
const Header = (headerprops) => {
  console.log(headerprops)
  return (
    <header>
      <h1 className="ScoreboardTitle">{ headerprops.title }</h1>
      <div className="stats">Players: <div className="HeaderPropsTotalPlayer">{ 'headerprops ttlplayers ' + headerprops.totalPlayers}</div></div>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Guil
      </span>

      <Counter />
    </div>
  );
}

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

{/*
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="header-title=Scoreboard" totalPlayers="5" />

   
      <Player />
    </div>
  );
}
*/}



function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="ProjectTitle">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <div>Scoreboard Project: Treehouse</div>
        </div>
      <a  className="App-link"   href="https://ns-cubik.gitlab.io/ns-simplified" target="_blank"  rel="noopener noreferrer">NS Simplified</a>

      </header>
      <div className="scoreboard">
           <p>
          <Header title="TitleScoreboard" totalPlayers={10} />
        </p>
        <p>
          <Player />
        </p>
        </div>
    </div>
  );
}

export default App;
