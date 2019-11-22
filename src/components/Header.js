import React from 'react'
import Modal from 'react-modal'
import image1 from './instructiongifs/01-click.gif'
import image2 from './instructiongifs/02-flag.gif'
import image3 from './instructiongifs/03-reveal.gif'
import image4 from './instructiongifs/04-lose.gif'
import {connect} from 'react-redux'
import {makeHard, resetMines} from '../ducks/board.js'
import {resetGame} from '../ducks/game.js'

const customStyles = { 
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Header extends React.Component {

constructor(props){
  super(props)
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.resetButton = this.resetButton.bind(this);
}

  resetButton(){
    this.props.resetMines()
    this.props.resetGame()
    this.props.makeHard(this.props.level)
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }



render(){
return (
  <div>
    <span className="buttons">
      <button className="button" onClick={this.openModal}>Instructions</button> 
      <button className="button" onClick={this.resetButton}>New Game</button>
    </span>

    <Modal 
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Instructions"
    >
      <div> <h3>How To Play!</h3>
        <div className="container">
          <div className="a">
            <img src={image1} alt="click"/> Click on a square to reveal
          </div> 
          <div className="b" >
            <img src={image2} alt="flag" />
            Right click on a square to flag it as a mine
          </div>
          <div className="d" >
            <img src={image4} alt="lose" />
            If you reveal a mine, you lose!
          </div>
          <div className="c" >
            <img src={image3} alt="friends" />
            Click on a completed revealed square to reveal neighbors
          </div>
        </div>
      </div>
    </Modal>
  </div>


)
}
}


function mapStateToProps(state, props){
  return {level: state.gridReducer.level} 
}

// export default Form
export default connect(mapStateToProps, {makeHard, resetGame, resetMines})(Header)