import React, { Component } from 'react';
import Grid from './components/grid.js'
import Form from './components/form.js'
import Counter from './components/counter.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import Timer from './components/timer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <br />
        <Form />
        <Grid />
        <Counter /> 
        <Footer />
      </div>
    );
  }
}

export default App;
