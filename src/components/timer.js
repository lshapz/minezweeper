// import React from 'react'
// import { connect } from 'react-redux'


// export const formatTime = (time) => {
//   if (time < 0) return '--:--'
//   const h = Math.floor(time / 3600)
//   const m = Math.floor((time % 3600) / 60)
//   const mm = m < 10 ? `0${m}` : m
//   const s = time % 60
//   const ss = s < 10 ? `0${s}` : s
//   if (h > 0) return [h, mm, ss].join(':')
//   return `${m}:${ss}`
// }

// const Timer = ({ time = 0 }) => (
//   <div>
//     {formatTime(time)}
//   </div>
// )

// Timer.propTypes = {
//   time: React.PropTypes.number,
// }

// class TimerContainer extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       secondsElapsed: 0,
//     }
//   }

//   componentDidReceiveProps() {
//     if (this.props.game === true)
//       {this.interval = setInterval(this.tick.bind(this), 1000)}
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval)
//   }

//   tick() {
//     this.setState({
//       secondsElapsed: this.state.secondsElapsed + 1,
//     })
//   }

//   render() {
//     return (
//       <Timer time={this.state.secondsElapsed} />
//     )
//   }
// }


// function mapStateToProps(state, props){
//   return {game: state.gameReducer.playing} 
// }


// export default connect(mapStateToProps)(TimerContainer)
