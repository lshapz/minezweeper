import React from 'react';
import Grid from './components/grid.js'
import Form from './components/form.js'
import Counter from './components/Counter.js'
import Footer from './components/footer.js'
import Header from './components/header.js'

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
