import React from 'react'

// nodes
import Fade from 'react-reveal/Fade'

import imgLogo from './dailymoment-logo.svg'
import sample from './dailymoment_sample.gif'


const headingStyles = { 
  "margin" : "0"
}

const taglineStyles = { 
  "fontSize" : "large",
  "lineHeight" : "1.2",
  "fontWeight" : "400",
  "color" : "white",
  "position" : "relative",
  "top" : "-1.6rem",
}

const logoStyle = { 
  "width" : "250px"
}

const boxShadow = {
  "boxShadow" : "9px 25px 71px -5px rgba(0,0,0,0.6)",
}

const Header = ({tagline}) => (
  <div>
    <h1 style={headingStyles}>
      <img style={logoStyle} src={imgLogo}></img>
    </h1>
    <div style={taglineStyles}>{tagline}</div>
    <Fade bottom delay={1000}><div><img src={sample}style={boxShadow} /></div></Fade>
  </div>
)

export default Header