import logo from './logo.svg';
import './App.css';
import CustomP from './CustomP';

function App() {
  return (
    <div>
      <CustomP text="This CustomP is from App component" />
      <CustomP text={true} />
      <CustomP text="hello 8" />
    </div>
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     {/*<p> I am a passionate developer</p >*/}
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >

    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;











