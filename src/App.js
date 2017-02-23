import React, { Component } from 'react';
import Grid from './components/grid.js'
import Form from './components/form.js'
import Counter from './components/Counter.js'
import Footer from './components/footer.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Form />
      <Grid />
      <Counter /> 
      <Footer />
      </div>
    );
  }
}

export default App;
//       
