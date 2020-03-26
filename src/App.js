import React from 'react';
import "./CSS/App.css";
import GamePage from "./containers/GamePage"


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <GamePage/>
       </div>
    );
  }
}

export default App;

