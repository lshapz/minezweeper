import React from 'react'
import Octocat from './images/octocat.png'

const Footer = () => {

return (
  <div className="footer">
    created by <a href="https://about.me/laura.shapiro">Laura Shapiro</a> || <a href="https://github.com/lshapz/minezweeper"><img src={Octocat} alt="github" /></a> ||
    game images courtesy of <a href="http://opengameart.org/content/minesweeper-tile-set-lazarus">opengameart.org</a>
  </div>
  )

}

export default Footer
