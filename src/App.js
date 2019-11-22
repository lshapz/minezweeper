import React from 'react';
import Grid from './components/Grid.js'
import Form from './components/Form.js'
import Counter from './components/Counter.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Grid />
        <Counter /> 
        <Footer />
      </div>
    );
  }
}

export default App;
