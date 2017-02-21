import React, { Component } from 'react';
import Grid from './components/grid.js'
import Counter from './components/Counter.js'
import Footer from './components/footer.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid />
      <Counter /> 
      <Footer />
      </div>
    );
  }
}

export default App;
//       
