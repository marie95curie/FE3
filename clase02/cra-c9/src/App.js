import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          This is my first React-App.
        </h4>
        <p>Follow me:</p>
        <a
          className="App-link"
          href="https://github.com/eligazza"
          target="_blank"
          rel="noopener noreferrer"
        >
          gitHub
        </a>
      </header>
    </div>
  );
}

export default App;
